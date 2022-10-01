import { ICar } from "../interfaces";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cars')
export class Car implements ICar {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({name: 'nome'})
    nome: string;

    @Column({name: 'modelo'})
    modelo: string;

    @Column({name: 'marca'})
    marca: string;

    @Column({name: 'imgurl'})
    imgurl: string;
}