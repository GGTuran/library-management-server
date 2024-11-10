import express from 'express';
import { bookControllers } from './book.controller';

const router = express.Router();

router.post('/', bookControllers.createBook);

router.get('/', bookControllers.getAllBooks);

router.get('/:bookId', bookControllers.getSingleBook);

router.put('/:bookId', bookControllers.UpdateBook);

export const bookRoutes = router;