import { Router } from 'express';

// Routes
import { usersRouters } from './users.routes';
import { tasksRouters  } from './tasks.routes';
import { authenticateRouters } from './authenticate.routes';

const router = Router();

router.use('/users', usersRouters);
router.use('/tasks', tasksRouters);
router.use(authenticateRouters);


export { router }