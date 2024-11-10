export type TErrorMessages = {
    path: string | number;
    message: string;
}[];

export type TGenericErrorResponse = {
    success: boolean;
    status: number;
    message: string;
    errorMessages?: TErrorMessages;
    stack?: string;
};