import { BlogService } from "./blog.service";
export declare class BlogResolver {
    private blogService;
    constructor(blogService: BlogService);
    createBlog(id: number, title: string, contents: string): void;
}
