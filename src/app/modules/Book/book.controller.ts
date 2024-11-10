import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
    const result = await bookServices.createBookIntoDb(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Book created successfully",
        data: result
    })
});


export const bookControllers = {
    createBook,
}