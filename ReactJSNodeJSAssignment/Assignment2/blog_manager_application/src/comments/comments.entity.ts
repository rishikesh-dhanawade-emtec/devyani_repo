import { IsDate } from "class-validator";
import { BlogEntity } from "src/blog/blog.entity";
import { UserEntity } from "src/user/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Comments')
export class CommentEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '1000'})
    comments: string;

    @Column()
    @IsDate()
    date: Date;

    @Column()
    blogId: number;

    @ManyToOne(()=> BlogEntity, (blog)=>blog.comments)
    blogs: BlogEntity;

    @ManyToOne(() => UserEntity, (user)=> user.comments)
    users: UserEntity;

}