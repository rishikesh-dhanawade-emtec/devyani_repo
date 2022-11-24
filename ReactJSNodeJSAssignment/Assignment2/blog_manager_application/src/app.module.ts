import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';
import { TypeORMConfiguration } from './config/typeorm.configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    BlogModule,
    UserModule,
    CommentsModule,
    
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: true,
    }),

    // load the typeorm configuration in the app module
    TypeOrmModule.forRoot(TypeORMConfiguration),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
