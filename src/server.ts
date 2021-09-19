import "reflect-metadata";
import './database';

import cors from "cors";

import express from 'express';
import "express-async-errors";
const app = express();

import { container } from 'tsyringe';

import { UsersRepository } from './modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from './modules/accounts/repositories/IUsersRepository';
import { router } from "./routes";

app.use(express.json());
app.use(cors());
app.use(router)

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)

app.listen(3333, () => console.log('Server is running!'));