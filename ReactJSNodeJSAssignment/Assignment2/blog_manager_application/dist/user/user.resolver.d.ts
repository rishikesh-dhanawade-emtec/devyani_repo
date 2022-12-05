import { Gender } from "./user.entity";
import { UserService } from "./user.service";
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    signup(firstName: string, lastName: string, email: string, password: string): Promise<import("./user.entity").UserEntity>;
    signin(email: string, password: string): Promise<import("./user.entity").UserEntity>;
    findUser(id: number): Promise<import("./user.entity").UserEntity>;
    getAllUsers(): Promise<import("../blog/blog.entity").BlogEntity[]>;
    updateProfile(id: number, firstName: string, lastName: string, city: string, gender: Gender, country: string, state: string, postalCode: string, birthDate: Date): Promise<import("./user.entity").UserEntity>;
}
