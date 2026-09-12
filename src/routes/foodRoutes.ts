import { Router } from "express";
import { getFoods, getFoodById, postFood } from "../controllers/foodController.js";

const router = Router();

router.get("/", getFoods);
router.get("/:id", getFoodById);
router.post("/", postFood);

export default router;