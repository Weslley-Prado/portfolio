import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user.create.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async cadastrar(data: UserCreateDto): Promise<ResultadoDto>{
    let user = new User()
    user.email = data.email
    user.name = data.name
    user.password = data.password
    return this.userRepository.save(user)
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem:"Usuario cadastro com sucesso"
      }
    })
    .catch((error)=>{
      return <ResultadoDto>{
        status: false,
        mensagem:"Houve um erro ao cadastrar o usuario"
      }

    })
   }
  }

