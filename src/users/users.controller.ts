import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUser } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(':register')
  register(@Param('username') username: string, @Param('password')password: string) {
    if(username===''||password===''){
      return 'User name and password can not be emptty';
    }
    const registerUserDto: RegisterUser = {username: username, password: password};
    if(this.usersService.register(registerUserDto)){
      return 'User regis succedded!';
    }
    return 'User regis failed!';
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
