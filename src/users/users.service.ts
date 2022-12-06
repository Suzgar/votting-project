import { Injectable } from '@nestjs/common';
import { RegisterUser } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{username: 'admin', password: '123'}];

  register(registerUser: RegisterUser) {
    if(this.findOne(registerUser.username)){
      return false;
    }
    this.users.push(registerUser);
    return true;
  }

  findAll() {
    return this.users;
  }

  findOne(name: string) {
    return this.users.find(user => user.username === name);
  }
}
