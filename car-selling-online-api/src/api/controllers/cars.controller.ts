import { ICarService } from "./../../api/interfaces";
import { CarService } from "./../../api/services";
import { Response ,Request } from "express";

export class CarController {
    private carService: ICarService

    constructor(){
        this.carService = new CarService();
    }
    public index = async(req: Request, res: Response) => {
        await this.carService.findAll()
            .then(cars => res.send(cars).status(200))
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }

    public read = async(req: Request, res: Response) => {
        await this.carService.findById(req.params.id)
            .then(car => res.send(car).status(200))
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }

    public create = async(req: Request, res: Response) => {
        await this.carService.create(req.body)
            .then(car => res.send(car).status(200))
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }

    public update = async(req: Request, res: Response) => {
        await this.carService.update(req.params.id, req.body)
            .then(car => res.send(car).status(200))
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }

    public delete = async(req: Request, res: Response) => {
        await this.carService.delete(req.params.id)
            .then(car => res.send(car).status(200))
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }
}