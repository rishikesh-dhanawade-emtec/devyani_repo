import { IsDate, IsInt, Min } from 'class-validator';
import { CommentEntity } from 'src/comments/comments.entity';
import { UserEntity } from 'src/user/user.entity';
import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Blogs')
export class BlogEntity extends BaseEntity {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column({length:500})
    title: string;

    @Column({type: 'varchar', length: '1000'})
    contents: string;

    @Column()
    tags: string;

    @Column()
    @IsDate()
    date: Date;

    @Column({nullable: true, default: 0})
    @IsInt()
    likes: number;

    @Column({nullable: true, default: 0})
    @IsInt()
    dislikes: number;

    @Column({nullable: true})
    @IsInt()
    @Min(0)
    ratings: number;

    @Column()
    userId: number;

    @ManyToOne(() => UserEntity, (user) => user.blogs)
    users: UserEntity;

    @OneToMany(() => CommentEntity, (comment) => comment.blogs)
    comments: CommentEntity[];

}
