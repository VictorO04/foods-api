import express from "express";
import "dotenv/config";

import { connectDatabase } from "./config/database.js";

import foodRoutes from "./routes/foodRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();
app.use(express.json());

await connectDatabase();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Foods API online");
});

app.use("/api/foods", foodRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`🚀 http://localhost:${port}`);
})