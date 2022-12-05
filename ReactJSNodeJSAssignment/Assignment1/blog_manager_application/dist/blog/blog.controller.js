"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const blog_service_1 = require("./blog.service");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    getUsers(id) {
        return this.blogService.getUsers(id);
    }
    createBlog(id, createBlogDto) {
        return this.blogService.createBlog(id, createBlogDto);
    }
    getBlogs() {
        return this.blogService.getBlogs();
    }
    getBlogDetails(id) {
        return this.blogService.getBlogDetails(id);
    }
    getBlogByTags(tags) {
        return this.blogService.getBlogByTags(tags);
    }
    deleteBlog(id) {
        return this.blogService.deleteBlog(id);
    }
    updateBlogByLikes(id) {
        return this.blogService.updateBlogByLikes(id);
    }
    updateBlogByDislikes(id) {
        return this.blogService.updateBlogByDislikes(id);
    }
    updateBlog(userId, blogId, createBlogDto) {
        return this.blogService.updateBlog(userId, blogId, createBlogDto);
    }
};
__decorate([
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "createBlog", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getBlogs", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getBlogDetails", null);
__decorate([
    (0, common_1.Get)('search/:tags'),
    __param(0, (0, common_1.Param)('tags')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getBlogByTags", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "deleteBlog", null);
__decorate([
    (0, common_1.Patch)('likes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "updateBlogByLikes", null);
__decorate([
    (0, common_1.Patch)('dislikes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "updateBlogByDislikes", null);
__decorate([
    (0, common_1.Put)('/:userId/:blogId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('blogId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "updateBlog", null);
BlogController = __decorate([
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map