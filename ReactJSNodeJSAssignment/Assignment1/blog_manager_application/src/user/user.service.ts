import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UserEntity } from './user.entity';
import * as Crypto from 'crypto-js';
import { BlogEntity } from 'src/blog/blog.entity';
import { UpdateProfileDto } from './dto/update.profile.dto';
import { FindUserEmail } from './dto/finduser.email.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @InjectRepository(BlogEntity) private blogRepository: Repository<BlogEntity>) { }

  async signup(signupDto: SignupDto) {
    const user = this.userRepository.create();

    user.firstName = signupDto.firstName;
    user.lastName = signupDto.lastName;
    user.email = signupDto.email;
    user.password = String(Crypto.MD5(signupDto.password));

    await user.save();

    return user;
  }

  async signin(signinDto: SigninDto) {
    const condition = {
      email: signinDto.email,
      password: String(Crypto.MD5(signinDto.password)),
    };

    const user = await this.userRepository
      .createQueryBuilder('Users')
      .where(
        'Users.email = :email and Users.password = :password',
        condition,
      ).getOne();

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // delete the password before sending the result
    delete user.password;

    return user;
  }

  //get all users
  async getAllUsers() {
    return await this.userRepository.find({ relations: ['user'] });
  }

  //get user by id
  async findUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    
    if (!user) {
      throw new NotFoundException()
    }
    return user;

  }

  async updateProfile(id: number, updateProfileDto: UpdateProfileDto) {

    // const user = await this.userRepository.findOneBy({id});
    const updateUser = await this.userRepository.createQueryBuilder().update(UserEntity).set({
      firstName: updateProfileDto.firstName,
      lastName: updateProfileDto.lastName,
      // password: updateProfileDto.password,
      city: updateProfileDto.city,
      gender: updateProfileDto.gender,
      state: updateProfileDto.state,
      country: updateProfileDto.country,
      postalCode: updateProfileDto.postalCode,
      birthDate: updateProfileDto.birthDate,
    }).where("id = :id", { id }).execute();

    return this.findUser(id);
  }

  async findUsers() {
    return await this.blogRepository.find({ relations: ['blogs'] })
  }

  async findUserByEmail(findUserEmail: FindUserEmail) {
    const condition = {
      email: findUserEmail.email,
    };

    const user = await this.userRepository
      .createQueryBuilder()
      .where("email = :email", condition)
      .getOne();

    if (!user) {
      throw new NotFoundException('User Not Found!');
    }

    return user;
  }

}
