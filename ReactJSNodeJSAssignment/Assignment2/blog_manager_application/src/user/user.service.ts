import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gender, UserEntity } from './user.entity';
import * as Crypto from 'crypto-js';
import { BlogEntity } from 'src/blog/blog.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @InjectRepository(BlogEntity) private blogRepository: Repository<BlogEntity>) { }

  //signup
  async signup(firstName: string, lastName: string, email: string, password: string) {
    const user = this.userRepository.create();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = String(Crypto.MD5(password));

    await user.save();

    return user;
  }

  //signin
  async signin(email: string, password: string) {
    const condition = {
      email: email,
      password: String(Crypto.MD5(password)),
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
    return await this.blogRepository.find({ relations: ['users'] });
  }

  //get user by id
  async findUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException()
    }
    return user;

  }

  //update user profile
  async updateProfile(id: number, firstName: string, lastName: string, city: string, gender: Gender, country: string, state: string, postalCode: string, birthDate: Date) {

    const user = await this.findUser(id);
    const updateUser = await this.userRepository.createQueryBuilder().update(user).set({
      firstName, lastName, city, gender, country, state, postalCode,
      birthDate: new Date(birthDate),
    }).where("id = :id", { id }).execute();

    return this.findUser(id);
  }

  async findUsers() {
    return await this.blogRepository.find({ relations: ['blogs'] })
  }

}
