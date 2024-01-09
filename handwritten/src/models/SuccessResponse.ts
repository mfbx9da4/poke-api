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

export enum ErrorCode {
  NotFound = "NotFound",
  ParseResponse = "ParseResponse",
  Unknown = "Unknown",
}

export type Response<T> = SuccessResponse<T> | ErrorResponse;
export type PromiseResponse<T> = Promise<Response<T>>;
