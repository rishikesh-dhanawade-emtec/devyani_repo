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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const graphql_1 = require("@nestjs/graphql");
const comments_type_1 = require("../comments/comments.type");
const user_type_1 = require("../user/user.type");
let Blog = class Blog {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.ID),
    __metadata("design:type", Number)
], Blog.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Blog.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Blog.prototype, "contents", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Blog.prototype, "tags", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Blog.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], Blog.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], Blog.prototype, "dislikes", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Blog.prototype, "ratings", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Blog.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(type => user_type_1.User),
    __metadata("design:type", user_type_1.User)
], Blog.prototype, "users", void 0);
__decorate([
    (0, graphql_1.Field)(type => [comments_type_1.Comment], { nullable: true }),
    __metadata("design:type", Array)
], Blog.prototype, "comments", void 0);
Blog = __decorate([
    (0, graphql_1.ObjectType)('Blog')
], Blog);
exports.Blog = Blog;
//# sourceMappingURL=blog.type.js.map