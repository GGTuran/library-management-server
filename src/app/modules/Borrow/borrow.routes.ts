import express from 'express';
import { borrowControllers } from './borrow.controller';
import validate from '../../middlewares/validate';
import { borrowValidations } from './borrow.validation';

const router = express.Router();

router.post(
    '/borrow',
    validate(borrowValidations.createBorrowRecordZod),
    borrowControllers.borrowBook)

router.post(
    '/return',
    validate(borrowValidations.returnBorrowRecordZod),
    borrowControllers.returnBook);

router.get('/borrow/overdue', borrowControllers.getOverDueBooks);

export const borrowRoutes = router;