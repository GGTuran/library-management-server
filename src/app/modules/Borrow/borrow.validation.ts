import { z } from "zod";

const createBorrowRecordZod = z.object({
    body: z.object({
        borrowDate: z.string({ required_error: 'Borrow date is required' }),
        returnDate: z.string().optional(),
        bookId: z.string({ required_error: 'Book ID is required' }),
        memberId: z.string({ required_error: 'Member ID is required' }),
    }),
});

const returnBorrowRecordZod = z.object({
    body: z.object({
        borrowDate: z.string().optional(),
        returnDate: z.string().optional(),
        bookId: z.string().optional(),
        memberId: z.string().optional(),
    }),
});

export const borrowValidations = {
    createBorrowRecordZod,
    returnBorrowRecordZod
}