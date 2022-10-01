import { ICar } from "../../core/interfaces";
import { ICreateCarDto, IUpdateCarDto } from "../dto";

export interface ICarService {
    findAll(): Promise<ICar[]>
    findById(id: string): Promise<ICar>
    create(data: ICreateCarDto): Promise<ICar>
    update(id: string, data: IUpdateCarDto): Promise<ICar>
    delete(id: string): Promise<object>
}