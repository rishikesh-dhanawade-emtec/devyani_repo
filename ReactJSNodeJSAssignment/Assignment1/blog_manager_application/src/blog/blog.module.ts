import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogEntity } from './blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { CommentEntity } from 'src/comments/comments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity, UserEntity, CommentEntity])],
  providers: [BlogService],
  controllers: [BlogController]
})
export class BlogModule {}
