import mongoose from "mongoose";

export interface Food {
    name: string,
    description: string | null,
    category: string
}

const foodSchema = new mongoose.Schema<Food>({
    name: { type: String, required: true },
    description: { type: String, default: null },
    category: { type: String, required: true },
});

const FoodModel = mongoose.model("Food", foodSchema);
export default FoodModel;