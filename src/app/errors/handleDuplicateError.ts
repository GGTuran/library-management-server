import { TErrorMessages, TGenericErrorResponse } from "../interface/error";

const handleDuplicateError = (err: any): TGenericErrorResponse => {
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];

    const errorMessages: TErrorMessages = [
        {
            path: '',
            message: `${extractedMessage} already exists`,
        },
    ];

    const status = 400;
    return {
        status,
        message: `${extractedMessage} already exists`,
        errorMessages,
        success: false,
    };
};

export default handleDuplicateError;
