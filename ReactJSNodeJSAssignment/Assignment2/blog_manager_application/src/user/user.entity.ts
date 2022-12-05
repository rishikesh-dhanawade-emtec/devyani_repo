import { IsDate, IsEmail, IsNotEmpty, IsString, NotEquals } from 'class-validator';
import { BlogEntity } from 'src/blog/blog.entity';
import { CommentEntity } from 'src/comments/comments.entity';
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';

//enum gender
export enum Gender {
    Male = 'Male', 
    Female = 'Female', 
    Other = 'Other',
}

@Entity('Users')
export class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    firstName: string;

    @Column({nullable:false})
    lastName: string;

    @Column({unique: true,nullable:false})
    @IsEmail()
    email: string;

    @Column({nullable:false})
    @IsString()
    password: string;

    @Column({nullable: true,})
    city: string;

    @Column({nullable: true,})
    state: string;

    @Column({nullable: true,})
    country: string;

    @Column({nullable: true,})
    postalCode: string;

    @Column({nullable: true,})
    @IsDate()
    birthDate: Date;

    @Column({
        type: 'enum', 
        enum: Gender,
        nullable: true,
    })
    gender: Gender;

    @OneToMany(()=> BlogEntity, (blog) => blog.users)
    blogs: BlogEntity[];

    @OneToMany(()=> CommentEntity, (comments) => comments.users)
    comments: CommentEntity[];

}