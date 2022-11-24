import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UpdateProfileDto } from './dto/update.profile.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    signup(signupDto: SignupDto): Promise<import("./user.entity").UserEntity>;
    signin(signinDto: SigninDto): Promise<import("./user.entity").UserEntity>;
    updateProfile(id: number, updateProfileDto: UpdateProfileDto): Promise<import("typeorm").UpdateResult>;
    getAllUsers(): Promise<import("./user.entity").UserEntity[]>;
    findUser(id: number): Promise<import("./user.entity").UserEntity>;
    findUsers(): Promise<import("../blog/blog.entity").BlogEntity[]>;
}
