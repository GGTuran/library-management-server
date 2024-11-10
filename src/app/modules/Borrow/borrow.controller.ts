import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { borrowServices } from "./borrow.service";

const borrowBook = catchAsync(async (req, res) => {
    const result = await borrowServices.borrowBookFromDB(req.body);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book borrowed successfully",
        data: result
    });
});


const returnBook = catchAsync(async (req, res) => {
    const result = await borrowServices.returnBookIntoDB(req.body);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book returned successfully"
    })
})


export const borrowControllers = {
    borrowBook,
    returnBook,
}