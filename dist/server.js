"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
require("./database");
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var app = (0, express_1.default)();
var tsyringe_1 = require("tsyringe");
var UsersRepository_1 = require("./modules/accounts/repositories/implementations/UsersRepository");
var routes_1 = require("./routes");
var AppError_1 = require("./errors/AppError");
var TasksRepository_1 = require("./modules/tasks/repositories/implementations/TasksRepository");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.router);
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.UsersRepository);
tsyringe_1.container.registerSingleton('TasksRepository', TasksRepository_1.TasksRepository);
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: 'error',
        message: "Ocorreu um erro no servidor - " + err.message
    });
});
app.listen(3333, function () { return console.log('Server is running!'); });
