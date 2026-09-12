import { Router } from "express";
import { getFoods, getFoodById, postFood, deleteFoodController, patchFood } from "../controllers/foodController.js";

const router = Router();

router.get("/", getFoods);
router.get("/:id", getFoodById);
router.post("/", postFood);
router.delete("/:id", deleteFoodController);
router.patch("/:id", patchFood);

export default router;