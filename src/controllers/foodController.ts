import type { Request, Response } from "express";
import { findFoods, findFoodById, createFood } from "../services/foodService.js";

export const getFoods = async (req: Request, res: Response) => {
    const { name } = req.query;

    const foods = await findFoods(name ? String(name) : "");

    res.status(200).json({
        total: foods.length,
        data: foods,
    });
}

export const getFoodById = async (req: Request, res: Response) => {
    const food = await findFoodById(String(req.params.id));

    res.status(200).json({
        data: food
    });
}

export const postFood = async (req: Request, res: Response) => {
    const { name, description, category } = req.body;
    
    await createFood({ name, description, category });

    res.status(201).json({
        message: `${name} created`
    });
}