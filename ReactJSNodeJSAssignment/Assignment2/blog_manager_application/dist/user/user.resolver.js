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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("./user.entity");
const user_service_1 = require("./user.service");
const user_type_1 = require("./user.type");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    signup(firstName, lastName, email, password) {
        return this.userService.signup(firstName, lastName, email, password);
    }
    signin(email, password) {
        return this.userService.signin(email, password);
    }
    findUser(id) {
        return this.userService.findUser(id);
    }
    getAllUsers() {
        return this.userService.getAllUsers();
    }
    updateProfile(id, firstName, lastName, city, gender, country, state, postalCode, birthDate) {
        return this.userService.updateProfile(id, firstName, lastName, city, gender, country, state, postalCode, birthDate);
    }
};
__decorate([
    (0, graphql_1.Mutation)((returns) => user_type_1.User),
    __param(0, (0, graphql_1.Args)('firstName')),
    __param(1, (0, graphql_1.Args)('lastName')),
    __param(2, (0, graphql_1.Args)('email')),
    __param(3, (0, graphql_1.Args)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "signup", null);
__decorate([
    (0, graphql_1.Query)((returns) => user_type_1.User),
    __param(0, (0, graphql_1.Args)('email')),
    __param(1, (0, graphql_1.Args)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "signin", null);
__decorate([
    (0, graphql_1.Query)((returns) => user_type_1.User),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "findUser", null);
__decorate([
    (0, graphql_1.Query)((returns) => [user_type_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => user_type_1.User),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('firstName')),
    __param(2, (0, graphql_1.Args)('lastName')),
    __param(3, (0, graphql_1.Args)('city')),
    __param(4, (0, graphql_1.Args)('gender')),
    __param(5, (0, graphql_1.Args)('country')),
    __param(6, (0, graphql_1.Args)('state')),
    __param(7, (0, graphql_1.Args)('postalCode')),
    __param(8, (0, graphql_1.Args)('birthDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, Date]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateProfile", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)((forType) => user_type_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map