import { ICreateUserDto, IUpdateUserDto } from "@api/dto";
import { IUserService } from "./../interfaces";
import AppDataSource from "./../../config/database";
import { User } from "./../../core/entities/User.model";
import { IUser } from "./../../core/interfaces";

export class UserService implements IUserService {
    userRepository = AppDataSource.getRepository(User)

    findAll(): Promise<IUser[]> {
        return this.userRepository.find();
    }

    findById(id: string): Promise<IUser> {
        return this.userRepository.findOneByOrFail({id});
    }

    create(data: ICreateUserDto): Promise<IUser> {
        return this.userRepository.save(data);
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
}