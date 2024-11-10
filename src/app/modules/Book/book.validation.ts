import { z } from "zod";


const createBookZod = z.object({
    body: z.object({
        title: z.string({ required_error: 'Title is required' }),
        genre: z.string({ required_error: 'Genre is required' }),
        publishedYear: z.number({ required_error: 'Published Year is required' }).int().positive({ message: 'Published year must be a positive integer' }),
        totalCopies: z.number({ required_error: 'Total copies are required' }).int().positive({ message: 'Total copies must be a positive integer' }),
        availableCopies: z.number({ required_error: 'Available copies are required' }).int(),
    }),
});

const updateBookZod = z.object({
    body: z.object({
        title: z.string().optional(),
        genre: z.string().optional(),
        publishedYear: z.number().int().positive({ message: 'Published year must be a positive integer' }).optional(),
        totalCopies: z.number().int().positive({ message: 'Total copies must be a positive integer' }).optional(),
        availableCopies: z.number().int().optional(),
    }),
});

export const bookValidations = {
    createBookZod,
    updateBookZod,
}