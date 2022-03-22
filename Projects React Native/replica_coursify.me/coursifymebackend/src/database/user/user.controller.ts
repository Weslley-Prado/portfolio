import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UserCreateDto } from './dto/user.create.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Get('listar')
  async findAll(): Promise<User[]>{
      return this.userService.findAll();
  }

  @Post('cadastrar')
  async cadastrar(@Body() data:UserCreateDto):Promise<ResultadoDto>{
    
    return this.userService.cadastrar(data)
    
    }
  }
