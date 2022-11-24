import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Comment } from "src/comments/comments.type";
import { User } from "src/user/user.type";

@ObjectType('Blog')
export class Blog {

    @Field((type) => ID)
    id: number;

    @Field()
    title: string;

    @Field()
    contents: string;

    @Field()
    tags: string;

    @Field()
    date: Date;

    @Field({nullable:true, defaultValue: 0})
    likes: number;

    @Field({nullable: true, defaultValue: 0})
    dislikes: number;

    @Field({nullable:true})
    ratings: number;

    @Field()
    userId: number;

    @Field(type => User)
    users: User;

    @Field(type => [Comment], {nullable:true})
    comments: Comment[];

}