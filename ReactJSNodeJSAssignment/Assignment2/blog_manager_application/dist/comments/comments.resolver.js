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
exports.CommentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const comments_service_1 = require("./comments.service");
const comments_type_1 = require("./comments.type");
let CommentResolver = class CommentResolver {
    constructor(commentService) {
        this.commentService = commentService;
    }
    createComment(userId, blogId, comments) {
        return this.commentService.createComment(userId, blogId, comments);
    }
    getAllComments(id) {
        return this.commentService.getAllComments(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)((returns) => [comments_type_1.Comment]),
    __param(0, (0, graphql_1.Args)('userId')),
    __param(1, (0, graphql_1.Args)('blogId')),
    __param(2, (0, graphql_1.Args)('comments')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], CommentResolver.prototype, "createComment", null);
__decorate([
    (0, graphql_1.Query)((returns) => [comments_type_1.Comment]),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CommentResolver.prototype, "getAllComments", null);
CommentResolver = __decorate([
    (0, graphql_1.Resolver)((forType) => comments_type_1.Comment),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentResolver);
exports.CommentResolver = CommentResolver;
//# sourceMappingURL=comments.resolver.js.map