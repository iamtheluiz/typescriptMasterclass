// Modules
import express from 'express';
import routes from './routes';
import cors from 'cors';

// Define application
const app = express();

// Cross origin
app.use(cors());

// Import application routes
app.use(routes);

// Start application
app.listen(3333);