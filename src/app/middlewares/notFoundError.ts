import { NextFunction, Request, Response } from 'express';

const notFoundError = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    })
}

export default notFoundError;