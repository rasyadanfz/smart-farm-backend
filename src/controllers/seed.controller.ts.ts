import { Request, Response } from "express";
import prisma from "../../prismaSingleton/prismaSingleClient";

export async function getSeeds(req: Request, res: Response): Promise<Response> {
    try {
        const response = await prisma.seed.findMany();
        return res.status(200).json({
            status: "success",
            data: response,
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            data: "An error occured",
        });
    }
}

export async function getSeedById(req: Request, res: Response): Promise<Response> {
    try {
        const response = await prisma.seed.findUnique({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({
            status: "success",
            data: response,
        });
    }
    catch (error) {
        return res.status(404).json({
            status: "error",
            data: "An error occured",
        });
    }
}

export async function createSeed(req: Request, res: Response): Promise<Response> {
    try {
        const seed = await prisma.seed.findFirst({
            where: {
                name: req.body.name,
            },
        });

        if (seed) {
            return res.status(400).json({
                status: "error",
                data: "Seed already exists",
            });
        }

        const response = await prisma.seed.create({
            data: {
                name: req.body.name,
                stock: req.body.stock,
                soil_moisture: req.body.soil_moisture,
                air_temperature: req.body.air_temperature,
                air_humidity: req.body.air_humidity,
                air_pressure: req.body.air_pressure,
                pH: req.body.pH,
            },
        });
        return res.status(200).json({
            status: "success",
            data: response,
        });
    }
    catch (error) {
        return res.status(400).json({
            status: "error",
            data: "An error occured",
        });
    }
}

export async function updateSeed(req: Request, res: Response): Promise<Response> {
    try {
        const response = await prisma.seed.update({
            where: {
                id: req.params.id,
            },
            data: {
                stock: req.body.stock,
            },
        });
        return res.status(200).json({
            status: "success",
            data: response,
        });
    }
    catch (error) {
        return res.status(400).json({
            status: "error",
            data: "An error occured",
        });
    }
}

export async function deleteSeed(req: Request, res: Response): Promise<Response> {
    try {
        const response = await prisma.seed.delete({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({
            status: "success",
            data: response,
        });
    }
    catch (error) {
        return res.status(400).json({
            status: "error",
            data: "An error occured",
        });
    }
}
