import { Router } from "express";
import { getFoods, getFoodById, postFood, deleteFoodController } from "../controllers/foodController.js";

const router = Router();

router.get("/", getFoods);
router.get("/:id", getFoodById);
router.post("/", postFood);
router.delete("/:id", deleteFoodController);

export default router;