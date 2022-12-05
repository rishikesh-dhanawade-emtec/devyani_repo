import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogEntity } from './blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { CommentEntity } from 'src/comments/comments.entity';
import { BlogResolver } from './blog.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity, UserEntity, CommentEntity])],
  providers: [BlogService, BlogResolver],
})
export class BlogModule {}
