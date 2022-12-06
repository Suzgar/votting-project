import { PartialType } from '@nestjs/mapped-types';
import { RegisterUser } from './register-user.dto';

export class UpdateUserDto extends PartialType(RegisterUser) {}
