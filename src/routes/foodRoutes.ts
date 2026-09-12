import { Router } from "express";
import { getFoods, getFoodById, postFood, deleteFoodController, patchFood } from "../controllers/foodController.js";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware.js";

const router = Router();

router.get("/", getFoods);
router.get("/:id", getFoodById);
router.post("/", apiKeyMiddleware, postFood);
router.delete("/:id", apiKeyMiddleware, deleteFoodController);
router.patch("/:id", apiKeyMiddleware, patchFood);

export default router;