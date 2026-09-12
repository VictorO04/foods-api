import type { Request, Response } from "express";
import { findFoods, findFoodById } from "../services/foodService.js";

export const getFoods = async (req: Request, res: Response) => {
    const foods = await findFoods();

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