import { Repository } from 'typeorm';
import { Gender, UserEntity } from './user.entity';
import { BlogEntity } from 'src/blog/blog.entity';
export declare class UserService {
    private userRepository;
    private blogRepository;
    constructor(userRepository: Repository<UserEntity>, blogRepository: Repository<BlogEntity>);
    signup(firstName: string, lastName: string, email: string, password: string): Promise<UserEntity>;
    signin(email: string, password: string): Promise<UserEntity>;
    getAllUsers(): Promise<BlogEntity[]>;
    findUser(id: number): Promise<UserEntity>;
    updateProfile(id: number, firstName: string, lastName: string, city: string, gender: Gender, country: string, state: string, postalCode: string, birthDate: Date): Promise<UserEntity>;
    findUsers(): Promise<BlogEntity[]>;
}
