import { CarController } from '../api/controllers/cars.controller';
import { Router, Request, Response } from 'express';
import { UserController } from '../api/controllers/user.controller';

const router = Router();
const userController = new UserController()
const carController = new CarController()

router.get('/', (req: Request, res: Response) => {
    res.send("Funciona!");
});

router.get('/users/', userController.index)
router.get('/users/:id', userController.read)
router.post('/users/', userController.create)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)

router.get('/cars/', carController.index)
router.get('/cars/:id', carController.read)
router.post('/cars/', carController.create)
router.put('/cars/:id', carController.update)
router.delete('/cars/:id', carController.delete)

export default router;