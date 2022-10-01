import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./../interfaces";

@Entity('users')
export class User implements IUser {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({name: 'nome'})
    nome: string;

    @Column({name: 'email', unique: true})
    email: string;

    @Column({name: 'senha'})
    senha: string;
}