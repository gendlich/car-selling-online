import { ICreateUserDto, IUpdateUserDto } from "@api/dto";
import { IUserService } from "./../interfaces";
import AppDataSource from "./../../config/database";
import { User } from "./../../core/entities/User.model";
import { IUser } from "./../../core/interfaces";
import jwt from 'jsonwebtoken';
import { ILoginDto } from "@api/dto/request-login.dto";
import bcrypt from 'bcrypt';
import 'dotenv/config'

export class UserService implements IUserService {
    userRepository = AppDataSource.getRepository(User)
    BCRYPT_HASH_ROUNDS = 10

    findAll(): Promise<IUser[]> {
        return this.userRepository.find();
    }

    findById(id: string): Promise<IUser> {
        return this.userRepository.findOneByOrFail({id});
    }

    async create(data: ICreateUserDto): Promise<IUser> {
        const senhaCriptografada = await bcrypt.hash(data.senha, this.BCRYPT_HASH_ROUNDS)
        const user = this.userRepository.create({...data, senha: senhaCriptografada});
        return this.userRepository.save(user);
    }

    async update(id: string, data: IUpdateUserDto): Promise<IUser>{
        const userAntigo = await this.userRepository.findOneByOrFail({id});

        const userNovo = new User();
        userNovo.id = userAntigo.id;
        userNovo.email = data.email ? data.email : userAntigo.email;
        userNovo.senha = data.senha ? data.senha : userAntigo.senha;
        userNovo.nome = data.nome ? data.nome : userAntigo.nome;

        return this.userRepository.save(userNovo);
    }


    delete(id: string): Promise<object>{
        return this.userRepository.delete(id);
    }

    
    async login(data: ILoginDto): Promise<string> {
        const user = await this.userRepository.findOneByOrFail({email: data.email});
        const verificarSenha = await bcrypt.compare(data.senha, user.senha)
        if(verificarSenha) {
            const jwtPayload = {
                nome: user.nome,
                id: user.id
            }
            const jwtSecretKey = `${process.env.JWT_SECRET_KEY}`
            const token = jwt.sign(jwtPayload, jwtSecretKey)
            console.log(token)
            return token
        }
        else {
            return 'dados invalidos'
        }
    }
}