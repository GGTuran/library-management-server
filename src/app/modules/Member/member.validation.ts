import { z } from "zod";

const createMemberZod = z.object({
    body: z.object({
        name: z.string({ required_error: 'Member name is required' }),
        email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid email format' }),
        phone: z.string({ required_error: 'Phone number is required' }),
        membershipDate: z.string({ required_error: 'Membership date is required' }),
    }),
});

const updateMemberZod = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().email({ message: 'Invalid email format' }).optional(),
        phone: z.string().optional(),
        membershipDate: z.string().optional(),
    }),
});

export const memberValidations = {
    createMemberZod,
    updateMemberZod,
}