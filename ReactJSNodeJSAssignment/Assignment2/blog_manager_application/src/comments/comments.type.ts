import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Blog } from "src/blog/blog.type";
import { User } from "src/user/user.type";

@ObjectType('Comment')
export class Comment {

    @Field((type) => ID)
    id: number;

    @Field()
    comments: string;

    @Field()
    date: Date;

    @Field()
    blogId: number;

    @Field(type => Blog)
    blogs: Blog;

    @Field(type => User)
    users: User;
}