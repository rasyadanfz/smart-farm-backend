import { Request, Response } from 'express';

export function home(req: Request, res: Response): Response {
  return res.status(200).json({
    message: 'This is backend for a smart farming prototype.'
  });
}
