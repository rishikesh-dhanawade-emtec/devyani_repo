import { CommentsService } from "./comments.service";
export declare class CommentResolver {
    private commentService;
    constructor(commentService: CommentsService);
    createComment(userId: number, blogId: number, comments: string): Promise<import("./comments.entity").CommentEntity[]>;
    getAllComments(id: number): Promise<import("./comments.entity").CommentEntity[]>;
}
