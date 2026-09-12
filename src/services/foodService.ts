import mongoose from "mongoose";
import Food from "../models/Food.js";
import AppError from "../errors/AppError.js";

export const findFoods = () => {
    return Food.find();
}

export const findFoodById = async (id: string) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError("Invalid ID format", 400);
    }

    const food = await Food.findById(id);

    if (!food) {
        throw new AppError(`Food with ID ${id} not found`, 404);
    }

    return food;
}