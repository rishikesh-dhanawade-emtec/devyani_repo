import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comments.entity';
import { UserEntity } from 'src/user/user.entity';
import { BlogEntity } from 'src/blog/blog.entity';
import { CommentResolver } from './comments.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, UserEntity, BlogEntity])],
  providers: [CommentsService, CommentResolver],
})
export class CommentsModule {}
