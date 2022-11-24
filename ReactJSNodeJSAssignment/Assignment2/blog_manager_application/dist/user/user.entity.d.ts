import { BlogEntity } from 'src/blog/blog.entity';
import { CommentEntity } from 'src/comments/comments.entity';
import { BaseEntity } from 'typeorm';
export declare enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}
export declare class UserEntity extends BaseEntity {
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
    blogs: BlogEntity[];
    comments: CommentEntity[];
}
