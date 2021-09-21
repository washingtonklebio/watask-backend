import dotenv from 'dotenv';
import 'reflect-metadata';
import './database';

import cors from 'cors';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
const app = express();

import { container } from 'tsyringe';

import { UsersRepository } from './modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from './modules/accounts/repositories/IUsersRepository';
import { router } from "./routes";
import { AppError } from "./errors/AppError";
import { ITaskRepository } from "./modules/tasks/repositories/ITasksRepository";
import { TasksRepository } from "./modules/tasks/repositories/implementations/TasksRepository";

app.use(express.json());
app.use(cors());
app.use(router)


container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)

container.registerSingleton<ITaskRepository>(
    'TasksRepository',
    TasksRepository
)

app.use((err: Error, request: Request, response: Response, next: NextFunction)=> {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: 'error',
        message: `Ocorreu um erro no servidor - ${err.message}`
    })
});
    
app.listen(process.env.PORT , () => console.log('Server is running!'));