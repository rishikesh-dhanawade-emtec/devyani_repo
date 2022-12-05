import { Injectable, NotFoundException, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './blog.entity';
import { Like, Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { CommentEntity } from 'src/comments/comments.entity';
import { format } from 'date-fns';
import { now } from 'moment';

@Injectable()
export class BlogService {

  constructor(
    @InjectRepository(BlogEntity) private blogRepository: Repository<BlogEntity>,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @InjectRepository(CommentEntity) private commentRepository: Repository<CommentEntity>) { }

  //get users by blog id
  async getUsers(id: number) {
    const user = await this.blogRepository.findOne({
      relations: ['users'],
      where: {
        userId: id
      }
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  //create blog
  async createBlog(id: number, title: string, contents: string, tags: string) {
    const newDate = new Date().toLocaleDateString();
    const users = await this.userRepository.findOneBy({ id });

    if (!users) {
      throw new NotFoundException()
    }
    // const newDate = format((new Date()), 'yyyy-mm-dd');

    const blog = this.blogRepository.create({
      title: title,
      contents: contents,
      tags: tags,
      date: new Date(newDate),
      // date: new Date(),
      userId: users.id,
      users,
    });

    const saveBlog = this.blogRepository.save(blog);

    return saveBlog;
  }

  //get all blogs
  async getAllBlogs() {
    const blogs = await this.blogRepository.find({
      relations: ['users'], order: {
        id: 'DESC'
      }
    });
    return blogs;
  }

  async getBlog(id: number) {
    const blog = await this.blogRepository.findOne({
      relations: ['users', 'comments'],
      where: { id },
      order: {
        id: 'DESC',
      }
    });

    // send 404 if the task does not exist
    if (!blog) {
      throw new NotFoundException();
    }

    return blog;
  }

  //get blog by id
  getBlogDetails(id: number) {
    return this.getBlog(id);
  }

  //delete blog
  async deleteBlog(id: number) {
    const blog = await this.getBlog(id);

    const comment = await this.commentRepository.find({ where: { blogId: id } })

    await this.commentRepository.remove(comment);

    await this.blogRepository.remove(blog);

    return this.getAllBlogs();

  }

  // get blog by tags (search bar)
  async searchBlog(tags: string) {

    const blogs = await this.blogRepository.createQueryBuilder('blog').leftJoinAndSelect("blog.users", "users").where("tags LIKE :tags", { tags: `%${tags}%` }).getMany();

    if (!blogs) {
      throw new NotFoundException();
    }
    return blogs;
  }

  //update blog by likes
  async updateBlogByLikes(id: number) {

    const blog = await this.getBlog(id);
    blog.likes += 1;
    await blog.save();
    return this.getAllBlogs();

  }

  //update blog by dislikes
  async updateBlogByDislikes(id: number) {

    const blog = await this.getBlog(id);
    blog.dislikes += 1;
    await blog.save();
    return this.getAllBlogs();

  }

  //update blog by text
  async updateBlog(id: number, blogId: number, title: string, contents: string, tags: string) {

    const blog = await this.blogRepository.findOne({
      where: {
        id: blogId,
        userId: id,
      }
    })

    if (!blog) {
      throw new NotFoundException();
    }

    const updateBlog = await this.blogRepository.createQueryBuilder().update(blog).set({
      title: title,
      contents: contents,
      tags: tags,
    }).where('id = :blogId', { blogId }).execute();

    return this.getBlog(id);

  }

}
