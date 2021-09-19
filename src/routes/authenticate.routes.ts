import { Router } from 'express'; 
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authenticateRouters = Router();

const authenticateUserController = new AuthenticateUserController()

authenticateRouters.post('/sessions', authenticateUserController.handle);

export { authenticateRouters }