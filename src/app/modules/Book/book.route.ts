import express from 'express';
import { bookControllers } from './book.controller';
import validate from '../../middlewares/validate';
import { bookValidations } from './book.validation';

const router = express.Router();

router.post(
    '/',
    validate(bookValidations.createBookZod),
    bookControllers.createBook);

router.get('/', bookControllers.getAllBooks);

router.get('/:bookId', bookControllers.getSingleBook);

router.put(
    '/:bookId',
    validate(bookValidations.updateBookZod),
    bookControllers.UpdateBook);

router.delete('/:bookId', bookControllers.deleteBook);

export const bookRoutes = router;