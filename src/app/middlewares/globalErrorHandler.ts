import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";
import AppError from "../errors/AppError";


const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500;
    let message = "Something went wrong!";
    let stack = err.stack;

    // handle Zod validation errors
    if (err instanceof ZodError) {
        const zodError = handleZodError(err);
        statusCode = zodError.status;
        message = zodError.message;
        stack = zodError.stack;
    }
    //handle prisma error for unique constraint
    else if (err.code === 'P2002') {
        statusCode = 400;
        const field = err.meta?.target || 'field';
        message = `Unique constraint failed on the field: (${field})`;
    }


    // handle custom AppError
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
        stack: process.env.NODE_ENV === 'development' ? stack : undefined,
    });
};

export default globalErrorHandler;
