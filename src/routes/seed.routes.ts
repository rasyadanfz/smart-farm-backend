import { Router } from 'express';
import {
  getSeeds,
  getSeedById,
  createSeed,
  updateSeed,
  deleteSeed
} from '../controllers/seed.controller.ts';

class SeedRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get('/', getSeeds);
    this.router.get('/:id', getSeedById);
    this.router.post('/', createSeed);
    this.router.put('/:id', updateSeed);
    this.router.delete('/:id', deleteSeed);
  }
}

export default new SeedRoutes().router;
