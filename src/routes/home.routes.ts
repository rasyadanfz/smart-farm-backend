import { Router } from 'express';
import { home } from '../controllers/home.controller';
import {
  getSeeds,
  getSeedById,
  createSeed,
  updateSeed,
  deleteSeed
} from '../controllers/seed.controller.ts';

class HomeRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get('/', home);
    this.router.get('/seeds', getSeeds);
    this.router.get('/seeds/:id', getSeedById);
    this.router.post('/seeds', createSeed);
    this.router.put('/seeds/:id', updateSeed);
    this.router.delete('/seeds/:id', deleteSeed);
  }
}

export default new HomeRoutes().router;
