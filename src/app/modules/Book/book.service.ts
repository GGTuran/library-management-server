import prisma from "../../utils/prisma";
import { TBook } from "./book.types";


const createBookIntoDb = async (payload: TBook) => {
    const bookData = {
        title: payload.title,
        genre: payload.genre,
        publishedYear: payload.publishedYear,
        totalCopies: payload.totalCopies,
        availableCopies: payload.availableCopies
    };

    const result = await prisma.book.create({
        data: bookData
    });

    return result;
}

export const bookServices = {
    createBookIntoDb,
}