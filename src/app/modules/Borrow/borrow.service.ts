import prisma from "../../utils/prisma";
import { TBorrow, TReturn } from "./borrow.type";

const borrowBookFromDB = async (payload: TBorrow) => {
    const result = await prisma.borrowRecord.create({
        data: {
            ...payload,
            borrowDate: payload.borrowDate ?? new Date()
        }
    });

    return result;
};

const returnBookIntoDB = async (payload: TReturn) => {
    const result = await prisma.borrowRecord.update({
        where: {
            borrowId: payload.borrowId
        },
        data: {
            returnDate: new Date()
        }
    });
    return result;
}

export const borrowServices = {
    borrowBookFromDB,
    returnBookIntoDB,
}