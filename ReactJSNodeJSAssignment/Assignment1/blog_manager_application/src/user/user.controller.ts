import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UpdateProfileDto } from './dto/update.profile.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post('signup')
  @UsePipes(new ValidationPipe({ transform: true }))
  async signup(@Body() signupDto: SignupDto) {
    return this.userService.signup(signupDto);
  }

  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    return this.userService.signin(signinDto);
  }

  // @Post(':id')
  // updateCity(@Param('id') id:number) {
  //   return this.userService.updateCity(id);
  // }

  @Put('/:id')
  updateProfile(@Param('id') id: number, @Body() updateProfileDto: UpdateProfileDto) {
    return this.userService.updateProfile(id, updateProfileDto);
  }

  @Get('/')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  findUser(@Param('id') id:number) {
    return this.userService.findUser(id);
  }

  @Get()
  findUsers() {
    return this.userService.findUsers();
  }
}
