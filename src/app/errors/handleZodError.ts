import { ZodError, ZodIssue } from "zod";
import { TErrorMessages, TGenericErrorResponse } from "../interface/error";

const handleZodError = (err: ZodError): TGenericErrorResponse => {
    const errorMessages: TErrorMessages = err.issues.map((issue: ZodIssue) => {
        return {
            path: issue?.path[issue.path.length - 1],
            message: issue.message,
        };
    });

    const status = 400;
    return {
        status,
        message: "Validation Error",
        errorMessages,
        success: false,
    };
};

export default handleZodError;
