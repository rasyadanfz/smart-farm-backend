import { Request, Response } from 'express';
import prisma from '../../prismaSingleton/prismaSingleClient';

export async function getFields(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const response = await prisma.field.findMany();
    return res.status(200).json({
      status: 'success',
      data: response
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      data: 'An error occured'
    });
  }
}

export async function getFieldById(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const response = await prisma.field.findUnique({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({
      status: 'success',
      data: response
    });
  } catch (error) {
    return res.status(404).json({
      status: 'error',
      data: 'An error occured'
    });
  }
}

export async function createField(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const latestField = await prisma.field.findMany({
      orderBy: {
        numberId: 'desc'
      },
      take: 1
    });

    const newNumberId = latestField[0].numberId + 1;

    const response = await prisma.field.create({
      data: {
        numberId: newNumberId,
        name: req.body.name,
        isPlanted: false
      }
    });

    return res.status(200).json({
      status: 'success',
      data: response
    });
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      data: 'An error occured'
    });
  }
}

export async function updateField(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const currentSeedId = req.body.currentSeedId;
    const isPlanted = currentSeedId !== undefined;

    const response = await prisma.field.update({
      where: {
        id: req.params.id
      },
      data: {
        name: req.body.name,
        currentSeedId,
        isPlanted
      }
    });
    return res.status(200).json({
      status: 'success',
      data: response
    });
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      data: 'An error occured'
    });
  }
}

export async function deleteField(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const response = await prisma.field.delete({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({
      status: 'success',
      data: response
    });
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      data: 'An error occured'
    });
  }
}
