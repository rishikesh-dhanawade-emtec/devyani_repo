import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blog/blog.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CommentEntity } from './comments.entity';

@Injectable()
export class CommentsService {

    constructor(@InjectRepository(CommentEntity) private commentRepository: Repository<CommentEntity>,
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
        @InjectRepository(BlogEntity) private blogRepository: Repository<BlogEntity>) { }

    //get all comments
    async getAllComments(id: number) {
        const blogs = await this.commentRepository.find({
            relations: ['users', 'blogs'],
            where: {
                blogId: id
            }
        });

        return blogs;
    }

    //post comment - userId, BlogId
    async createComment(id: number, blogId: number, comments: string) {

        const newDate = new Date().toLocaleDateString();
        const users = await this.userRepository.findOneBy({ id });

        const blogs = await this.blogRepository.createQueryBuilder('blogs').where('id = :blogId', { blogId }).getOne();

        if (!users || !blogs) {
            throw new NotFoundException()
        }

        const comment = this.commentRepository.create({
            comments,
            date: new Date(newDate),
            blogId: blogs.id,
            users,
            blogs,
        });

        const saveComment = await this.commentRepository.save(comment);

        return this.getAllComments(blogId);
    }


}
