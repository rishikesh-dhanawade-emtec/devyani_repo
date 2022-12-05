import { Blog } from "src/blog/blog.type";
import { Comment } from "src/comments/comments.type";
export declare enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    birthDate: Date;
    gender: Gender;
    blogs: Blog[];
    comments: Comment[];
}
