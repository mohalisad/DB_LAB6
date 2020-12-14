import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import UserEntity from 'src/db/entity/user.entity';
import BoolResponse from 'src/lib/bool.response';
import JwtAuthGuard from 'src/auth/jwt-auth.guard';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserService) {}

//'postUser()' will handle the creating of new User
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({status: 200, type: UserEntity})
  @Post('post')
  postUser( @Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({status: 200, type: [UserEntity]})
  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({status: 200, type: UserEntity})
  @Put(':id')
  updateUser(@Param('id') userID: number, @Body() user: CreateUserDto) {
    return this.usersServices.update(userID, user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({status: 200, type: BoolResponse})
  @Delete(':id')
  removeUser(@Param('id') userID: number) {
    return this.usersServices.remove(userID);
  }
}