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
exports.UserEntity = exports.Gender = void 0;
const class_validator_1 = require("class-validator");
const blog_entity_1 = require("../blog/blog.entity");
const comments_entity_1 = require("../comments/comments.entity");
const typeorm_1 = require("typeorm");
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", String)
], UserEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", String)
], UserEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", String)
], UserEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", String)
], UserEntity.prototype, "postalCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'date' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserEntity.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: Gender,
        nullable: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => blog_entity_1.BlogEntity, (blog) => blog.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "blogs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.CommentEntity, (comments) => comments.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "comments", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('Users')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map