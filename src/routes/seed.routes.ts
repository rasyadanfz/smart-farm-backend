import { Router } from 'express';
import {
  getSeeds,
  getSeedById,
  createSeed,
  updateSeed,
  deleteSeed
} from '../controllers/seed.controller.ts';
import { authorization } from '../middleware/authorization';

class SeedRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get('/', getSeeds);
    this.router.get('/:id', getSeedById);
    this.router.post('/', authorization, createSeed);
    this.router.put('/:id', authorization, updateSeed);
    this.router.delete('/:id', authorization, deleteSeed);
  }
}

export default new SeedRoutes().router;
