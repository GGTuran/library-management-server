import express from 'express';
import { borrowControllers } from './borrow.controller';

const router = express.Router();

router.post('/borrow', borrowControllers.borrowBook)

router.post('/return', borrowControllers.returnBook);

export const borrowRoutes = router;