import { Router } from 'express';
import { createField, deleteField, getFieldById, getFields, updateField } from '../controllers/field.controller';
import { authorization } from '../middleware/authorization';

class FieldRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get('/', getFields);
    this.router.get('/:id', getFieldById);
    this.router.post('/', authorization, createField);
    this.router.put('/:id', authorization, updateField);
    this.router.delete('/:id', authorization, deleteField);
  }
}

export default new FieldRoutes().router;
