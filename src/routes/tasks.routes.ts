import { Router } from 'express'; 
import { verifyAuthenticated } from '../middleware/verifyAuthenticated';
import { CreateTaskController } from '../modules/tasks/useCases/createTask/CreateTaskController';

const tasksRouters = Router();

const createTaskController = new CreateTaskController();

tasksRouters.post('/', verifyAuthenticated, createTaskController.handle);

export { tasksRouters }