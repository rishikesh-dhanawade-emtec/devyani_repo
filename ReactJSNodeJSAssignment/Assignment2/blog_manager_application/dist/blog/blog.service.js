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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blog_entity_1 = require("./blog.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const comments_entity_1 = require("../comments/comments.entity");
let BlogService = class BlogService {
    constructor(blogRepository, userRepository, commentRepository) {
        this.blogRepository = blogRepository;
        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
    }
    async getUsers(id) {
        const user = await this.blogRepository.findOne({
            relations: ['users'],
            where: {
                userId: id
            }
        });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async createBlog(id, title, contents, tags) {
        const newDate = new Date().toLocaleDateString();
        const users = await this.userRepository.findOneBy({ id });
        if (!users) {
            throw new common_1.NotFoundException();
        }
        const blog = this.blogRepository.create({
            title: title,
            contents: contents,
            tags: tags,
            date: new Date(newDate),
            userId: users.id,
            users,
        });
        const saveBlog = this.blogRepository.save(blog);
        return saveBlog;
    }
    async getAllBlogs() {
        const blogs = await this.blogRepository.find({
            relations: ['users'], order: {
                id: 'DESC'
            }
        });
        return blogs;
    }
    async getBlog(id) {
        const blog = await this.blogRepository.findOne({
            relations: ['users', 'comments'],
            where: { id },
            order: {
                id: 'DESC',
            }
        });
        if (!blog) {
            throw new common_1.NotFoundException();
        }
        return blog;
    }
    getBlogDetails(id) {
        return this.getBlog(id);
    }
    async deleteBlog(id) {
        const blog = await this.getBlog(id);
        const comment = await this.commentRepository.find({ where: { blogId: id } });
        await this.commentRepository.remove(comment);
        await this.blogRepository.remove(blog);
        return this.getAllBlogs();
    }
    async searchBlog(tags) {
        const blogs = await this.blogRepository.createQueryBuilder('blog').leftJoinAndSelect("blog.users", "users").where("tags LIKE :tags", { tags: `%${tags}%` }).getMany();
        if (!blogs) {
            throw new common_1.NotFoundException();
        }
        return blogs;
    }
    async updateBlogByLikes(id) {
        const blog = await this.getBlog(id);
        blog.likes += 1;
        await blog.save();
        return this.getAllBlogs();
    }
    async updateBlogByDislikes(id) {
        const blog = await this.getBlog(id);
        blog.dislikes += 1;
        await blog.save();
        return this.getAllBlogs();
    }
    async updateBlog(id, blogId, title, contents, tags) {
        const blog = await this.blogRepository.findOne({
            where: {
                id: blogId,
                userId: id,
            }
        });
        if (!blog) {
            throw new common_1.NotFoundException();
        }
        const updateBlog = await this.blogRepository.createQueryBuilder().update(blog).set({
            title: title,
            contents: contents,
            tags: tags,
        }).where('id = :blogId', { blogId }).execute();
        return this.getBlog(id);
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_entity_1.BlogEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(comments_entity_1.CommentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map