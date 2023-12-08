import { Router } from 'express';
import {
  createMonitorLog,
  deleteMonitorLog,
  getMonitorLogs,
  getMonitorLogsByFieldId,
  updateMonitorLog
} from '../controllers/monitor.controller';
import { authorization } from '../middleware/authorization';

class MonitorRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get('/', getMonitorLogs);
    this.router.get('/:fieldId', getMonitorLogsByFieldId);
    this.router.post('/', authorization, createMonitorLog);
    this.router.put('/:id', authorization, updateMonitorLog);
    this.router.delete('/:id', authorization, deleteMonitorLog);
  }
}

export default new MonitorRoutes().router;
