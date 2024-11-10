import AppError from "../../errors/AppError";
import prisma from "../../utils/prisma";
import { TBook } from "./book.type";


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

    //if book not found
    if (!result) {
        throw new AppError(404, "book not found")
    }
    return result;
};

const updateBookIntoDB = async (bookId: string, payload: Partial<TBook>) => {

    //first find the book
    const book = await prisma.book.findUnique({
        where: {
            bookId: bookId
        }
    });

    //throw error if book not found
    if (!book) {
        throw new AppError(404, "book not found")
    }

    const result = await prisma.book.update({
        where: {
            bookId: bookId
        },
        data: payload
    });
    return result;
};

const deleteBookFromDB = async (bookId: string) => {

    //first find the book
    const book = await prisma.book.findUnique({
        where: {
            bookId: bookId
        }
    });

    //throw error if book not found
    if (!book) {
        throw new AppError(404, "book not found")
    }

    const result = await prisma.book.delete({
        where: {
            bookId: bookId
        }
    })
}

export const bookServices = {
    createBookIntoDb,
    getAllBooksFromDB,
    getSingleBookFromDB,
    updateBookIntoDB,
    deleteBookFromDB
}