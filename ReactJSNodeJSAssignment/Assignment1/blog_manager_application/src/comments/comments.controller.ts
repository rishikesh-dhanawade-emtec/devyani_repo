import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create.comment.dto';

@Controller('comments')
export class CommentsController {

    constructor(private commentsService: CommentsService) {}

    @Post('/:userId/:blogId')
    createComments(@Param('userId') userId:number, @Param('blogId') blogId:number, @Body() createCommentDto: CreateCommentDto) {
        return this.commentsService.createComments(userId, blogId, createCommentDto);
    }

    //get all comments
    @Get('/:id') //blogId
    getComments(@Param('id') id:number) {
        return this.commentsService.getComments(id);
    }
}
