import { BlogEntity } from './blog.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { CommentEntity } from 'src/comments/comments.entity';
export declare class BlogService {
    private blogRepository;
    private userRepository;
    private commentRepository;
    constructor(blogRepository: Repository<BlogEntity>, userRepository: Repository<UserEntity>, commentRepository: Repository<CommentEntity>);
    getUsers(id: number): Promise<BlogEntity>;
    createBlog(id: number, title: string, contents: string, tags: string): Promise<BlogEntity>;
    getAllBlogs(): Promise<BlogEntity[]>;
    getBlog(id: number): Promise<BlogEntity>;
    getBlogDetails(id: number): Promise<BlogEntity>;
    deleteBlog(id: number): Promise<BlogEntity[]>;
    searchBlog(tags: string): Promise<BlogEntity[]>;
    updateBlogByLikes(id: number): Promise<BlogEntity[]>;
    updateBlogByDislikes(id: number): Promise<BlogEntity[]>;
    updateBlog(id: number, blogId: number, title: string, contents: string, tags: string): Promise<BlogEntity>;
}
