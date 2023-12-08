import { Router } from 'express';
import { createField, deleteField, getFieldById, getFields, updateField } from '../controllers/field.controller';

class FieldRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get('/', getFields);
    this.router.get('/:id', getFieldById);
    this.router.post('/', createField);
    this.router.put('/:id', updateField);
    this.router.delete('/:id', deleteField);
  }
}

export default new FieldRoutes().router;
