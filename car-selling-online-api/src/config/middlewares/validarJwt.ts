import jwt from 'jsonwebtoken';
import 'dotenv/config'
import {Request, Response, NextFunction} from 'express';

export const validarJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const headers = req.headers.authorization
        const token = headers!.split(' ')[1];
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`)
        next();
    } catch (error) {
        res.status(401)
        throw 'Error: ' + error;
    }
}