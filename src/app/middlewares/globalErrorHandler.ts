import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";
import handleDuplicateError from "../errors/handleDuplicateError";
import AppError from "../errors/AppError";


const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500;
    let message = "Something went wrong!";
    let stack = err.stack;

    // Handle Zod validation errors
    if (err instanceof ZodError) {
        const zodError = handleZodError(err);
        statusCode = zodError.status;
        message = zodError.message;
        stack = zodError.stack;
    }
    // Handle duplicate errors (assuming MongoDB or similar database with unique constraints)
    else if (err.code === 11000) { // MongoDB duplicate key error code
        const duplicateError = handleDuplicateError(err);
        statusCode = duplicateError.status;
        message = duplicateError.message;
        stack = duplicateError.stack;
    }
    // Handle custom AppError
    else if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }
    // Default to generic error if type is not specifically handled
    else {
        message = err.message || message;
    }

    // Return response in standardized format
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message,
        stack: process.env.NODE_ENV === 'development' ? stack : undefined, // Include stack trace only in development
    });
};

export default globalErrorHandler;
