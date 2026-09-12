import mongoose from "mongoose";
import Food, { type Food as FoodType } from "../models/Food.js";
import AppError from "../errors/AppError.js";

export const findFoods = (filter: string) => {
    if (!filter) {
        return Food.find();
    }

    return Food.find({ name: { $regex: filter, $options: "i" } });
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

const categories = [
        "appetizer",
        "main course",
        "side dish",
        "dessert",
        "salad",
        "soup",
        "snack",
        "breakfast",
        "beverage",
        "fast food"
    ];

export const createFood = async (data: FoodType) => {
    const requiredFields: (keyof FoodType)[] = ["name", "category"];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
        throw new AppError(`Missing requiered fields: ${missingFields.join(", ")}`, 400);
    }

    const validCategory = categories.includes(data.category);

    if (!validCategory) {
        throw new AppError(`Invalid category. Allowed categories: ${categories.join(", ")}`, 400);
    }

    const food = await Food.create(data);

    return food;
}

export const deleteFood = async (id: string) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError("Invalid ID format", 400);
    }

    const food = await Food.findById(id);

    if (!food) {
        throw new AppError(`Food with ID ${id} not found`, 404);
    }

    await Food.deleteOne({ _id: id });

    return food;
}

export const updateFood = async (id: string, data: Partial<FoodType>) => {
    if (!data.name && !data.description && !data.category) {
        throw new AppError("At least one field is required", 400);
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError("Invalid ID format", 400);
    }

    const food = await Food.findById(id);

    if (!food) {
        throw new AppError(`Food with ID ${id} not found`, 404);
    }

    if (data.category) {
        const validCategory = categories.includes(data.category);

        if (!validCategory) {
            throw new AppError(`Invalid category. Allowed categories: ${categories.join(", ")}`, 400);
        }
    }

    return Food.findByIdAndUpdate(id, data, { new: true });
}