export declare enum ErrorCode {
    NotFound = "NotFound",
    ParseResponse = "ParseResponse",
    Unknown = "Unknown"
}
export type SuccessResponse<T> = {
    ok: true;
    status: number;
    data: T;
    error?: undefined;
    errorCode?: undefined;
};
export type ErrorResponse = {
    ok: false;
    status: number;
    data: any;
    error: string;
    errorCode?: ErrorCode;
};
export type Response<T> = SuccessResponse<T> | ErrorResponse;
export type PromiseResponse<T> = Promise<Response<T>>;
//# sourceMappingURL=Response.d.ts.map