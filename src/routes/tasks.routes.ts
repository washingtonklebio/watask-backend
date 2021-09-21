import { Router } from 'express'; 
import { verifyAuthenticated } from '../middleware/verifyAuthenticated';

// Controllers
import { CreateTaskController } from '../modules/tasks/useCases/createTask/CreateTaskController';
import { ListTaskController } from '../modules/tasks/useCases/listTasks/ListTaskController';
import { UpdateTaskController } from '../modules/tasks/useCases/updateTask/UpdateTaskController';

const tasksRouters = Router();

const createTaskController = new CreateTaskController();
const listTaskController = new ListTaskController();
const updateTaskController = new UpdateTaskController();

tasksRouters.post('/', verifyAuthenticated, createTaskController.handle);

tasksRouters.get('/', verifyAuthenticated, listTaskController.handle);

tasksRouters.put('/', verifyAuthenticated, updateTaskController.handle);

export { tasksRouters }