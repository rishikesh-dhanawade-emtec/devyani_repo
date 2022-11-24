import { Injectable, NotFoundException, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './blog.entity';
import { Like, Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create.blog.dto';
import { UserEntity } from 'src/user/user.entity';
import { CommentEntity } from 'src/comments/comments.entity';
// import { format } from 'date-fns';

@Injectable()
export class BlogService {

  constructor(
    @InjectRepository(BlogEntity) private blogRepository: Repository<BlogEntity>,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @InjectRepository(CommentEntity) private commentRepository: Repository<CommentEntity>) { }

  //get users by blog id
  async getUsers(id: number) {
    const user = await this.blogRepository.findOne({
      relations: ['user'],
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
  async createBlog(id: number, createBlogDto: CreateBlogDto) {
    const newDate = new Date().toISOString().slice(0, 10);
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException()
    }

    // const newDate = format(new Date(), 'yyyy-mm-dd');

    const blog = this.blogRepository.create({
      ...createBlogDto,
      date: newDate,
      user
    });

    const saveBlog = this.blogRepository.save(blog);

    return saveBlog;
  }

  //get all blogs
  async getBlogs() {
    return await this.blogRepository.find({ relations: ['user'], order: {
      id: 'DESC'
    } });
  }

  async getBlog(id: number) {
    const blog = await this.blogRepository.findOne({
      relations: ['user', 'comments'],
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

    return this.getBlogs();

  }

  // get blog by tags (search bar)
  async getBlogByTags(tags: string) {

    const blogs = await this.blogRepository.createQueryBuilder('blog').leftJoinAndSelect("blog.user", "user").where("tags LIKE :tags", {tags: `%${tags}%`}).getMany();

    if(!blogs){
      throw new NotFoundException();
    }
    return blogs;
  }

  //update blog by likes
  async updateBlogByLikes(id: number) {

    const blog = await this.getBlog(id);
    blog.likes += 1;
    await blog.save();
    return this.getBlogs();

  }

  //update blog by dislikes
  async updateBlogByDislikes(id: number) {

    const blog = await this.getBlog(id);
    blog.dislikes += 1;
    await blog.save();
    return this.getBlogs();

  }

  //update blog by text
  async updateBlog(id: number, blogId: number, createBlogDto: CreateBlogDto) {

    const blog = await this.blogRepository.findOne({
      where: {
        id: blogId,
        userId: id,
      }
    })

    if (!blog) {
      throw new NotFoundException();
    }

    const updateBlog = this.blogRepository.createQueryBuilder().update(blog).set({
      title: createBlogDto.title,
      contents: createBlogDto.contents,
      tags: createBlogDto.tags,
    }).where('id = :blogId', { blogId }).execute();

    return this.getBlogDetails(blogId);

  }


}
