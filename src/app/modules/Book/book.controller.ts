import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
    const result = await bookServices.createBookIntoDb(req.body);
    sendResponse(res, {
        success: true,
        status: 201,
        message: "Book created successfully",
        data: result
    })
});


const getAllBooks = catchAsync(async (req, res) => {
    const result = await bookServices.getAllBooksFromDB()
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Books retrieved successfully",
        data: result
    })
});


const getSingleBook = catchAsync(async (req, res) => {
    const { bookId } = req.params;
    const result = await bookServices.getSingleBookFromDB(bookId);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book retrieved successfully",
        data: result
    })
});


const UpdateBook = catchAsync(async (req, res) => {
    const { bookId } = req.params;
    const result = await bookServices.updateBookIntoDB(bookId, req.body);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book updated successfully",
        data: result
    })
});


const deleteBook = catchAsync(async (req, res) => {
    const { bookId } = req.params;
    const result = await bookServices.deleteBookFromDB(bookId);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book successfully deleted"
    })
});

export const bookControllers = {
    createBook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteBook
}