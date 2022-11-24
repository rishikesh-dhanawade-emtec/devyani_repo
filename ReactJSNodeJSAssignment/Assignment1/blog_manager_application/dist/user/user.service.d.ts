import { Repository } from 'typeorm';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UserEntity } from './user.entity';
import { BlogEntity } from 'src/blog/blog.entity';
import { UpdateProfileDto } from './dto/update.profile.dto';
export declare class UserService {
    private userRepository;
    private blogRepository;
    constructor(userRepository: Repository<UserEntity>, blogRepository: Repository<BlogEntity>);
    signup(signupDto: SignupDto): Promise<UserEntity>;
    signin(signinDto: SigninDto): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    findUser(id: number): Promise<UserEntity>;
    updateProfile(id: number, updateProfileDto: UpdateProfileDto): Promise<import("typeorm").UpdateResult>;
    findUsers(): Promise<BlogEntity[]>;
}
