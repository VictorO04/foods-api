import type { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError.js";

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    let message = error.message;
    let statusCode = error instanceof AppError ? error.statusCode : 500;

    if (statusCode === 500) {
        message = "Internal server error";
        
        console.log(error);
    }

    res.status(statusCode).json({ message });
}

export default errorMiddleware;