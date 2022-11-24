import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create.comment.dto';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    createComments(userId: number, blogId: number, createCommentDto: CreateCommentDto): Promise<import("./comments.entity").CommentEntity[]>;
    getComments(id: number): Promise<import("./comments.entity").CommentEntity[]>;
}
