import { Application } from 'express';
import HomeRoutes from './home.routes';
import FieldRoutes from './field.routes';
import MonitorRoutes from './monitor.routes';
import SeedRoutes from './seed.routes';

export default class Routes {
  constructor(app: Application) {
    app.use('/api', HomeRoutes);
    app.use('/api/seed', SeedRoutes);
    app.use('/api/field', FieldRoutes);
    app.use('/api/monitor', MonitorRoutes);
  }
}
