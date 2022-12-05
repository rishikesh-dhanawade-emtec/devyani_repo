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
exports.Comment = void 0;
const graphql_1 = require("@nestjs/graphql");
const blog_type_1 = require("../blog/blog.type");
const user_type_1 = require("../user/user.type");
let Comment = class Comment {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.ID),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "comments", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Comment.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Comment.prototype, "blogId", void 0);
__decorate([
    (0, graphql_1.Field)(type => blog_type_1.Blog),
    __metadata("design:type", blog_type_1.Blog)
], Comment.prototype, "blogs", void 0);
__decorate([
    (0, graphql_1.Field)(type => user_type_1.User),
    __metadata("design:type", user_type_1.User)
], Comment.prototype, "users", void 0);
Comment = __decorate([
    (0, graphql_1.ObjectType)('Comment')
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comments.type.js.map