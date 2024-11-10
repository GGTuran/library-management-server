import prisma from "../../utils/prisma";
import { TBook } from "./book.types";


const createBookIntoDb = async (payload: TBook) => {

    const result = await prisma.book.create({
        data: payload
    });

    return result;
};

const getAllBooksFromDB = async () => {
    const result = await prisma.book.findMany();
    return result;
};

const getSingleBookFromDB = async (bookId: string) => {
    const result = await prisma.book.findUnique({
        where: {
            bookId: bookId
        }
    });
    return result;
};

const updateBookIntoDB = async (bookId: string, payload: Partial<TBook>) => {
    const result = await prisma.book.update({
        where: {
            bookId: bookId
        },
        data: payload
    });
    return result;
}

export const bookServices = {
    createBookIntoDb,
    getAllBooksFromDB,
    getSingleBookFromDB,
    updateBookIntoDB,
}