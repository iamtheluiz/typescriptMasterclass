// Modules
import express from 'express';
import routes from './routes';

// Define application
const app = express();

// Import application routes
app.use(routes);

// Start application
app.listen(3333);