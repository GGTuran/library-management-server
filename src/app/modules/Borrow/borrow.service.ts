import AppError from "../../errors/AppError";
import prisma from "../../utils/prisma";
import { TBorrow, TReturn } from "./borrow.type";

const borrowBookFromDB = async (payload: TBorrow) => {

    //first find the book
    const book = await prisma.book.findUnique({
        where: {
            bookId: payload.bookId
        }
    });

    //throw error if book not found
    if (!book) {
        throw new AppError(404, "book not found")
    }

    const result = await prisma.borrowRecord.create({
        data: {
            ...payload,
            borrowDate: payload.borrowDate ?? new Date()
        }
    });

    return {
        borrowId: result.borrowId,
        bookId: result.bookId,
        memberId: result.memberId,
        borrowDate: result.borrowDate
    };
};

const returnBookIntoDB = async (payload: TReturn) => {

    //first check if it's borrowed data exist in the database
    const data = await prisma.borrowRecord.findUnique({
        where: {
            borrowId: payload.borrowId
        }
    });

    //if the data is not in the database then throw error
    if (!data) {
        throw new AppError(404, "Borrowed data not found")
    }

    const result = await prisma.borrowRecord.update({
        where: {
            borrowId: payload.borrowId
        },
        data: {
            returnDate: new Date()
        }
    });
    return result;
};

const getOverDueBooksFromDB = async () => {
    const today = new Date();                                                               //extracting today's date

    const overDueBooks = await prisma.borrowRecord.findMany({
        where: {
            returnDate: null,                                                               //query for the borrowed books with null return date
            borrowDate: {
                lt: new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000)                    //filtering if borrowedDate is less than 14 days from today
            }
        },
        select: {
            borrowId: true,
            borrowDate: true,
            Book: {
                select: { title: true }                                                      //query for the name of the book
            },
            Member: {
                select: { name: true }                                                       //query for the name of the member
            }
        }
    });

    const overDue = overDueBooks.map(borrowRecord => {                                        //mapping the array of overdue books

        //calculation for the number of overDue days
        const overdueDays = Math.floor(
            (today.getTime() - borrowRecord.borrowDate.getTime()                               //total days since  borrowedDate
                - 14 * 24 * 60 * 60 * 1000)                                                      //subtracting 14 days since borrowedDate
            / (1000 * 60 * 60 * 24));                                                        //converting it into days        

        return {
            borrowId: borrowRecord.borrowId,
            bookTitle: borrowRecord.Book.title,
            borrowerName: borrowRecord.Member.name,
            overdueDays
        };
    });
    return overDue;
}

export const borrowServices = {
    borrowBookFromDB,
    returnBookIntoDB,
    getOverDueBooksFromDB
}