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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const Crypto = require("crypto-js");
const blog_entity_1 = require("../blog/blog.entity");
let UserService = class UserService {
    constructor(userRepository, blogRepository) {
        this.userRepository = userRepository;
        this.blogRepository = blogRepository;
    }
    async signup(firstName, lastName, email, password) {
        const user = this.userRepository.create();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = String(Crypto.MD5(password));
        await user.save();
        return user;
    }
    async signin(email, password) {
        const condition = {
            email: email,
            password: String(Crypto.MD5(password)),
        };
        const user = await this.userRepository
            .createQueryBuilder('Users')
            .where('Users.email = :email and Users.password = :password', condition).getOne();
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        delete user.password;
        return user;
    }
    async getAllUsers() {
        return await this.blogRepository.find({ relations: ['users'] });
    }
    async findUser(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async updateProfile(id, firstName, lastName, city, gender, country, state, postalCode, birthDate) {
        const user = await this.findUser(id);
        const updateUser = await this.userRepository.createQueryBuilder().update(user).set({
            firstName, lastName, city, gender, country, state, postalCode,
            birthDate: new Date(birthDate),
        }).where("id = :id", { id }).execute();
        return this.findUser(id);
    }
    async findUsers() {
        return await this.blogRepository.find({ relations: ['blogs'] });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(blog_entity_1.BlogEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map