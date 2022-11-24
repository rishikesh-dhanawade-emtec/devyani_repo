import { CommentEntity } from 'src/comments/comments.entity';
import { UserEntity } from 'src/user/user.entity';
import { BaseEntity } from 'typeorm';
export declare class BlogEntity extends BaseEntity {
    id: number;
    title: string;
    contents: string;
    tags: string;
    date: Date;
    likes: number;
    dislikes: number;
    ratings: number;
    userId: number;
    user: UserEntity;
    comments: CommentEntity[];
}
