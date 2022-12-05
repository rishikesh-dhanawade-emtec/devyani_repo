import { Comment } from "src/comments/comments.type";
import { User } from "src/user/user.type";
export declare class Blog {
    id: number;
    title: string;
    contents: string;
    tags: string;
    date: Date;
    likes: number;
    dislikes: number;
    ratings: number;
    userId: number;
    users: User;
    comments: Comment[];
}
