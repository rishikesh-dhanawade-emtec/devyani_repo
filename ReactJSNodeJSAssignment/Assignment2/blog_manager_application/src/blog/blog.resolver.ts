import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BlogService } from "./blog.service";
import { Blog } from "./blog.type";

@Resolver((forType) => Blog)
export class BlogResolver {

    constructor(private blogService : BlogService){}

    @Mutation((returns) => Blog)
    createBlog(@Args('id') id:number, @Args('title') title: string, @Args('contents') contents: string, @Args('tags') tags: string) {
        return this.blogService.createBlog(id, title, contents, tags);
    }

    @Query((returns) => [Blog])
    getAllBlogs() {
        return this.blogService.getAllBlogs();
    }

    @Query((returns) => Blog) 
    getBlogDetails(@Args('id') id:number) {
        return this.blogService.getBlogDetails(id);
    }

    @Mutation((returns) => [Blog])
    deleteBlog(@Args('id') id:number) {
        return this.blogService.deleteBlog(id);
    }

    @Mutation((returns) => [Blog]) 
    searchBlog(@Args('tags') tags: string) {
        return this.blogService.searchBlog(tags);
    }

    @Mutation((returns) => [Blog])
    updateBlogByLikes(@Args('id') id:number) {
        return this.blogService.updateBlogByLikes(id);
    }

    @Mutation((returns) => [Blog])
    updateBlogByDislikes(@Args('id') id:number) {
        return this.blogService.updateBlogByDislikes(id);
    }

    @Mutation((returns) => Blog)
    updateBlog(@Args('id') id:number, @Args('blogId') blogId: number, @Args('title') title: string, @Args('contents') contents: string, @Args('tags') tags: string) {
        return this.blogService.updateBlog(id, blogId, title, contents, tags);
    }
    

}