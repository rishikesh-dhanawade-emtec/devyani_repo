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
exports.CommentEntity = void 0;
const class_validator_1 = require("class-validator");
const blog_entity_1 = require("../blog/blog.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
let CommentEntity = class CommentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '1000' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "blogId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => blog_entity_1.BlogEntity, (blog) => blog.comments),
    __metadata("design:type", blog_entity_1.BlogEntity)
], CommentEntity.prototype, "blogs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.comments),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentEntity.prototype, "users", void 0);
CommentEntity = __decorate([
    (0, typeorm_1.Entity)('Comments')
], CommentEntity);
exports.CommentEntity = CommentEntity;
//# sourceMappingURL=comments.entity.js.map