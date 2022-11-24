import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Blog } from "src/blog/blog.type";
import { Comment } from "src/comments/comments.type";

//enum gender
export enum Gender {
    Male = 'Male', 
    Female = 'Female', 
    Other = 'Other',
}

@ObjectType('User')
export class User {

    @Field((type) => ID)
    id: number;

    @Field({nullable:false})
    firstName: string;

    @Field({nullable:false})
    lastName: string;

    @Field((type) => ID, {nullable:false})
    email: string;

    @Field({nullable: false})
    password: string;

    @Field({nullable:true})
    city: string;

    @Field({nullable:true})
    state: string;

    @Field({nullable:true})
    country: string;

    @Field({nullable:true})
    postalCode: string;

    @Field({nullable:true})
    birthDate: Date;

    @Field({nullable:true})
    gender: Gender;

    @Field(type => [Blog])
    blogs: Blog[];

    @Field(type => [Comment])
    comments: Comment[];


}