import type { Request, Response, NextFunction } from "express";

const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.header("x-api-key");

    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            message: "Invalid API key"
        });
    }

    next();
}

export default apiKeyMiddleware;