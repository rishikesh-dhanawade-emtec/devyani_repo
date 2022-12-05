import { Blog } from "src/blog/blog.type";
import { User } from "src/user/user.type";
export declare class Comment {
    id: number;
    comments: string;
    date: Date;
    blogId: number;
    blogs: Blog;
    users: User;
}
