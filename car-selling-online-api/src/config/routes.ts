import { Router, Request, Response } from 'express';
import { UserController } from '../api/controllers/user.controller';

const router = Router();
const userController = new UserController()

router.get('/', (req: Request, res: Response) => {
    res.send("Funciona!");
});

router.get('/users/', userController.index)
router.get('/users/:id', userController.read)
router.post('/users/', userController.create)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)

export default router;