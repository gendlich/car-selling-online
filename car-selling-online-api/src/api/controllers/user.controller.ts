import { IUserService } from "./../../api/interfaces";
import { UserService } from "./../../api/services";
import { Response ,Request, Router } from "express";

export class UserController {
    private userService: IUserService

    constructor(){
        this.userService = new UserService();
    }
    public index = async(req: Request, res: Response) => {
        await this.userService.findAll()
            .then(users => res.send(users).status(200))
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }

    public read = async(req: Request, res: Response) => {
        await this.userService.findById(req.params.id)
            .then(user => res.send(user).status(200))
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }

    public create = async(req: Request, res: Response) => {
        await this.userService.create(req.body)
            .then(user => res.send(user).status(200))
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }

    public update = async(req: Request, res: Response) => {
        await this.userService.update(req.params.id, req.body)
            .then(user => res.send(user).status(200))
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }

    public delete = async(req: Request, res: Response) => {
        await this.userService.delete(req.params.id)
            .then(user => res.send(user).status(200))
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }

    public login = async(req: Request, res: Response) => {
        await this.userService.login(req.body)
        .then(token => res.send(token).status(200))
        .catch(error => {
            console.log(error)
            res.status(403).send(error)
        })
    }
}