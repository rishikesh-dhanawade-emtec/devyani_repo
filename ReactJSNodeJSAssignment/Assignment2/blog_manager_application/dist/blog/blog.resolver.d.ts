import { BlogService } from "./blog.service";
export declare class BlogResolver {
    private blogService;
    constructor(blogService: BlogService);
    createBlog(id: number, title: string, contents: string, tags: string): Promise<import("./blog.entity").BlogEntity>;
    getAllBlogs(): Promise<import("./blog.entity").BlogEntity[]>;
    getBlogDetails(id: number): Promise<import("./blog.entity").BlogEntity>;
    deleteBlog(id: number): Promise<import("./blog.entity").BlogEntity[]>;
    searchBlog(tags: string): Promise<import("./blog.entity").BlogEntity[]>;
    updateBlogByLikes(id: number): Promise<import("./blog.entity").BlogEntity[]>;
    updateBlogByDislikes(id: number): Promise<import("./blog.entity").BlogEntity[]>;
    updateBlog(id: number, blogId: number, title: string, contents: string, tags: string): Promise<import("./blog.entity").BlogEntity>;
}
