import { BlogEntity } from 'src/blog/blog.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CommentEntity } from './comments.entity';
export declare class CommentsService {
    private commentRepository;
    private userRepository;
    private blogRepository;
    constructor(commentRepository: Repository<CommentEntity>, userRepository: Repository<UserEntity>, blogRepository: Repository<BlogEntity>);
    getAllComments(id: number): Promise<CommentEntity[]>;
    createComment(id: number, blogId: number, comments: string): Promise<CommentEntity[]>;
}
