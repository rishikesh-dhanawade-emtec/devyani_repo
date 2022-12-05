import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comments.entity';
import { UserEntity } from 'src/user/user.entity';
import { BlogEntity } from 'src/blog/blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, UserEntity, BlogEntity])],
  providers: [CommentsService],
  controllers: [CommentsController]
})
export class CommentsModule {}
