import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

// Main route
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

export default routes;