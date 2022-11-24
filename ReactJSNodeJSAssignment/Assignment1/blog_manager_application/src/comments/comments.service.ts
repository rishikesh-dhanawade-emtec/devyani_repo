import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blog/blog.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CommentEntity } from './comments.entity';
import { CreateCommentDto } from './dto/create.comment.dto';

@Injectable()
export class CommentsService {

    constructor(@InjectRepository(CommentEntity) private commentRepository: Repository<CommentEntity>,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @InjectRepository(BlogEntity) private blogRepository: Repository<BlogEntity>) {}

    //get all comments
    async getComments(id: number) {
        return await this.commentRepository.find({
            relations: ['user', 'blog'],
            where: {
                blogId: id
            }
        });
    }

    //post comment - userId, BlogId
    async createComments(id:number, blogId:number, createCommentDto: CreateCommentDto) {

        const user = await this.userRepository.findOneBy({id});

        const blog = await this.blogRepository.createQueryBuilder('blogs').where('id = :blogId', {blogId}).getOne();

        if(!user || !blog) {
            throw new NotFoundException()
        }

        const comment = this.commentRepository.create({
            ...createCommentDto,
            date: new Date(),
            user,
            blog,
        })

        await this.commentRepository.save(comment);

        return this.getComments(blogId);
    }

    
}
