import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { AppError } from "../errors/AppError";
interface IPayload {
    sub: string;
}

export async function verifyAuthenticated(request: Request, response: Response, next: NextFunction) {
    const autHeader = request.headers.authorization;

    if (!autHeader) {
        throw new AppError('Token não existe', 401);
    }

    const [, token] = autHeader.split(' ');

    try {
        const { sub: user_id } = verify(token, '615848992fe3067630420fd0cc12e4e4') as IPayload;

        request.user = {
            id: user_id,
        };
      
        next();
    } catch (error) {
        throw new AppError('Token ínválido', 401);
    }
}