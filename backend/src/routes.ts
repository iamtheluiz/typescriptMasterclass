import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

// Main route
routes.get('/users', UserController.index);

export default routes;