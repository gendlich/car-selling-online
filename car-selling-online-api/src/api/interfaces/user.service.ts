import { ILoginDto } from "@api/dto/request-login.dto";
import { IUser } from "../../core/interfaces";
import { ICreateUserDto, IUpdateUserDto } from "./../dto";

export interface IUserService {
    findAll(): Promise<IUser[]>
    findById(id: string): Promise<IUser>
    create(data: ICreateUserDto): Promise<IUser>
    update(id: string, data: IUpdateUserDto): Promise<IUser>
    delete(id: string): Promise<object>
    login(data: ILoginDto): Promise<string> 
}