import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import Routes from './routes';
import db from '../config/db';

export default class App {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: 'http://localhost:8000'
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    db();
  }
}
