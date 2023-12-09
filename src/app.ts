import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import Routes from './routes';

export default class App {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Access-Control-Allow-Origin',
        'Origin'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      origin: [
        'https://intelligente-landwirtschaft-frontend.vercel.app',
        'http://localhost:8000',
        'http://localhost:5173'
      ]
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}
