import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFoundError from './app/middlewares/notFoundError';

const app: Application = express();

app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "Library Management server"
    })
});

app.use('/api', router);

app.use(globalErrorHandler);
app.use(notFoundError)


export default app;