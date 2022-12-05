import { BlogEntity } from 'src/blog/blog.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CommentEntity } from './comments.entity';
import { CreateCommentDto } from './dto/create.comment.dto';
export declare class CommentsService {
    private commentRepository;
    private userRepository;
    private blogRepository;
    constructor(commentRepository: Repository<CommentEntity>, userRepository: Repository<UserEntity>, blogRepository: Repository<BlogEntity>);
    getComments(id: number): Promise<CommentEntity[]>;
    createComments(id: number, blogId: number, createCommentDto: CreateCommentDto): Promise<CommentEntity[]>;
}
