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
exports.BlogEntity = void 0;
const class_validator_1 = require("class-validator");
const comments_entity_1 = require("../comments/comments.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
let BlogEntity = class BlogEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], BlogEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '1000' }),
    __metadata("design:type", String)
], BlogEntity.prototype, "contents", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], BlogEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "dislikes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], BlogEntity.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.blogs),
    __metadata("design:type", user_entity_1.UserEntity)
], BlogEntity.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.CommentEntity, (comment) => comment.blogs),
    __metadata("design:type", Array)
], BlogEntity.prototype, "comments", void 0);
BlogEntity = __decorate([
    (0, typeorm_1.Entity)('Blogs')
], BlogEntity);
exports.BlogEntity = BlogEntity;
//# sourceMappingURL=blog.entity.js.map