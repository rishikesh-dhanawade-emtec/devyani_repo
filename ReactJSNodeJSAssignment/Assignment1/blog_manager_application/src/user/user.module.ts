import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { BlogEntity } from 'src/blog/blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, BlogEntity])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
