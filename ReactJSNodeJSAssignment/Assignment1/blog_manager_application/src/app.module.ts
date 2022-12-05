import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';
import { TypeORMConfiguration } from './config/typeorm.configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BlogModule,
    UserModule,
    CommentsModule,
    // load the typeorm configuration in the app module
    TypeOrmModule.forRoot(TypeORMConfiguration),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
