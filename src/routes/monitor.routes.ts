import { Router } from 'express';
import {
  createMonitorLog,
  deleteMonitorLog,
  getMonitorLogs,
  getMonitorLogsByFieldId,
  updateMonitorLog
} from '../controllers/monitor.controller';

class MonitorRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get('/', getMonitorLogs);
    this.router.get('/:fieldId', getMonitorLogsByFieldId);
    this.router.post('/', createMonitorLog);
    this.router.put('/:id', updateMonitorLog);
    this.router.delete('/:id', deleteMonitorLog);
  }
}

export default new MonitorRoutes().router;
