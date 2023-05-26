import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserDto } from 'src/dto/user-dto';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../shemas/user';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id): Promise<User> {
    return this.userService.getUserById(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  sendUser(@Body() data: UserDto): Promise<User> {
    return this.userService.checkRegUser(data.login).then((queryRes) => {
      console.log('data reg', queryRes);
      if (queryRes.length === 0) {
        return this.userService.sendUser(data);
      } else {
        console.log('err - user is exists');
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            errorText: 'Пользователь уже зарегистрирован',
          },
          HttpStatus.CONFLICT,
        );
      }
    });
  }

  @UseGuards(AuthGuard('local'))
  @Post(':login')
  authUser(@Body() data: UserDto, @Param('login') login) {
    // return this.userService.checkAuthUser(data.login, data.psw).then((queryRes) => {
    //     if (queryRes.length !== 0) {
    //       return Promise.resolve(true);
    //     } else {
    //       console.log('err - user is exists');
    //       throw new HttpException(
    //         {
    //           status: HttpStatus.CONFLICT,
    //           errorText: 'Пользователь не найден в базе',
    //         },
    //         HttpStatus.CONFLICT,
    //       );
    //     }
    //   });
    return this.userService.login(data);
  }

  @Put(':id')
  updateUsers(@Param('id') id, @Body() data): Promise<User> {
    return this.userService.updateUsers(id, data);
  }

  @Delete()
  deleteUsers(): Promise<User> {
    return this.userService.deleteUsers();
  }

  @Delete(':id')
  deleteUserById(@Param('id') id): Promise<User> {
    return this.userService.deleteUserById(id);
  }
}
