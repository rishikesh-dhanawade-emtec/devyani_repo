import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create.blog.dto';

@Controller('blog')
export class BlogController {

    constructor(private blogService: BlogService) { }

    @Get('/user/:id')
    getUsers(@Param('id') id: number) {
        return this.blogService.getUsers(id);
    }

    @Post('/:id') //userId
    createBlog(@Param('id') id: number, @Body() createBlogDto: CreateBlogDto) {
        return this.blogService.createBlog(id, createBlogDto);
    }

    //get all blogs
    @Get('/')
    getBlogs() {
        return this.blogService.getBlogs();
    }

    @Get(':id')
    getBlogDetails(@Param('id') id: number) {
        return this.blogService.getBlogDetails(id);
    }

    @Get('search/:tags')
    getBlogByTags(@Param('tags') tags: string) {
        return this.blogService.getBlogByTags(tags);
    }

    @Delete(':id')
    deleteBlog(@Param('id') id: number) {
        return this.blogService.deleteBlog(id);
    }

    //update blog by likes
    @Patch('likes/:id')
    updateBlogByLikes(@Param('id') id: number) {
        return this.blogService.updateBlogByLikes(id);
    }

    //update blog by dislikes
    @Patch('dislikes/:id')
    updateBlogByDislikes(@Param('id') id: number) {
        return this.blogService.updateBlogByDislikes(id);
    }

    //update blog by text
    @Put('/:userId/:blogId')
    updateBlog(@Param('userId') userId: number, @Param('blogId') blogId: number, @Body() createBlogDto: CreateBlogDto) {
        return this.blogService.updateBlog(userId, blogId, createBlogDto);
    }

}
