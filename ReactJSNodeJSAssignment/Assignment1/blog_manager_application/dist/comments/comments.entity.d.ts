import { BlogEntity } from "src/blog/blog.entity";
import { UserEntity } from "src/user/user.entity";
import { BaseEntity } from "typeorm";
export declare class CommentEntity extends BaseEntity {
    id: number;
    comments: string;
    date: Date;
    blogId: number;
    blog: BlogEntity;
    user: UserEntity;
}
