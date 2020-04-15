// Modules
import express from 'express';

// Define application
const app = express();

// Main route
app.get('/', (req, res) => {
  return res.send('Hello World!');
});

// Start application
app.listen(3333);