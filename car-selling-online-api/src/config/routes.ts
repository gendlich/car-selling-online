import express, { Router, Request, Response } from 'express';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
    res.send("Funciona!");
});

export default routes;