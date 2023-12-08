import express, { Application } from 'express';
import App from './app';

const app: Application = express();
const server: App = new App(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;

app
  .listen(PORT, '0.0.0.0', function () {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('Error: address already in use');
    } else {
      console.log(err);
    }
  });
