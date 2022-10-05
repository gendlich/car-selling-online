import { CarController } from '../api/controllers/cars.controller';
import { Router } from 'express';
import { UserController } from '../api/controllers/user.controller';
import { validarJwt } from './middlewares/validarJwt';

const router = Router();
const userController = new UserController()
const carController = new CarController()

router.post('/login/', userController.login)
router.post('/registro/', userController.create)

// router.get('/users/', userController.index)
// router.get('/users/:id', userController.read)
// router.put('/users/:id', userController.update)
// router.delete('/users/:id', userController.delete)

router.get('/cars/', carController.index)
router.get('/cars/:id', carController.read)
router.post('/cars/', validarJwt, carController.create)
router.put('/cars/:id', validarJwt, carController.update)
router.delete('/cars/:id', validarJwt, carController.delete)

export default router;