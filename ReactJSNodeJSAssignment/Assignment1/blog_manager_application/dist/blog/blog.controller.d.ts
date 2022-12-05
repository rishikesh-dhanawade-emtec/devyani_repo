import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create.blog.dto';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    getUsers(id: number): Promise<import("./blog.entity").BlogEntity>;
    createBlog(id: number, createBlogDto: CreateBlogDto): Promise<import("./blog.entity").BlogEntity>;
    getBlogs(): Promise<import("./blog.entity").BlogEntity[]>;
    getBlogDetails(id: number): Promise<import("./blog.entity").BlogEntity>;
    getBlogByTags(tags: string): Promise<import("./blog.entity").BlogEntity[]>;
    deleteBlog(id: number): Promise<import("./blog.entity").BlogEntity[]>;
    updateBlogByLikes(id: number): Promise<import("./blog.entity").BlogEntity[]>;
    updateBlogByDislikes(id: number): Promise<import("./blog.entity").BlogEntity[]>;
    updateBlog(userId: number, blogId: number, createBlogDto: CreateBlogDto): Promise<import("./blog.entity").BlogEntity>;
}
