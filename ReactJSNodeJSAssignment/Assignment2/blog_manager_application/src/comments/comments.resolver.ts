import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CommentsService } from "./comments.service";
import { Comment } from "./comments.type";

@Resolver((forType) => Comment)
export class CommentResolver {

    constructor(private commentService: CommentsService) {}

    @Mutation((returns) => [Comment]) 
    createComment(@Args('userId') userId: number, @Args('blogId') blogId: number, @Args('comments') comments: string) {
        return this.commentService.createComment(userId, blogId, comments)
    }

    @Query((returns) => [Comment])
    getAllComments(@Args('id') id:number) {
        return this.commentService.getAllComments(id);
    }

}