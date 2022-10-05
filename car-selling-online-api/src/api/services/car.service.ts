import { ICreateCarDto, IUpdateCarDto } from "@api/dto";
import { ICarService } from "../interfaces";
import AppDataSource from "../../config/database";
import { Car } from "../../core/entities/Car.model";
import { ICar } from "../../core/interfaces";

export class CarService implements ICarService {
    carRepository = AppDataSource.getRepository(Car)

    findAll(): Promise<ICar[]> {
        return this.carRepository.find({
            order: {
                preco: "ASC",
            },
        });
    }

    findById(id: string): Promise<ICar> {
        return this.carRepository.findOneByOrFail({id});
    }

    create(data: ICreateCarDto): Promise<ICar> {
        return this.carRepository.save(data);
    }

    async update(id: string, data: IUpdateCarDto): Promise<ICar>{
        const carAntigo = await this.carRepository.findOneByOrFail({id});

        const carNovo = new Car();
        carNovo.id = carAntigo.id;
        carNovo.nome = data.nome ? data.nome : carAntigo.nome;
        carNovo.modelo = data.modelo ? data.modelo : carAntigo.modelo;
        carNovo.marca = data.marca ? data.marca : carAntigo.marca;
        carNovo.preco = data.preco ? data.preco : carAntigo.preco;
        carNovo.imgurl = data.imgurl ? data.imgurl : carAntigo.imgurl;

        return this.carRepository.save(carNovo);
    }


    delete(id: string): Promise<object>{
        return this.carRepository.delete(id);
    }
}