import { Response } from 'express';

type TResponse<T> = {
    status: number;
    success: boolean;
    message?: string;
    token?: string;
    data?: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.status(data?.status).json({
        success: data.success,
        status: data.status,
        message: data.message,
        token: data.token,
        data: data.data,
    });
};

export default sendResponse;