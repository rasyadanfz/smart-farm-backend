import { Request, Response } from 'express';
import prisma from '../../prismaSingleton/prismaSingleClient';

export async function getMonitorLogs(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const response = await prisma.monitor.findMany();
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

export async function getMonitorLogsByFieldId(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const response = await prisma.monitor.findMany({
      where: {
        monitoredFieldId: req.params.fieldId
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

export async function createMonitorLog(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const response = await prisma.monitor.create({
      data: {
        monitoredFieldId: req.body.monitoredFieldId,
        soil_moisture: req.body.soil_moisture,
        air_temperature: req.body.air_temperature,
        air_humidity: req.body.air_humidity,
        air_pressure: req.body.air_pressure,
        pH: req.body.pH
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

export async function updateMonitorLog(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const response = await prisma.monitor.update({
      where: {
        id: req.params.id
      },
      data: {
        monitoredFieldId: req.body.monitoredFieldId,
        soil_moisture: req.body.soil_moisture,
        air_temperature: req.body.air_temperature,
        air_humidity: req.body.air_humidity,
        air_pressure: req.body.air_pressure,
        pH: req.body.pH
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

export async function deleteMonitorLog(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const response = await prisma.monitor.delete({
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
