import { AxiosResponse } from "axios";
import { ErrorCode, Response } from "../models";
import { z } from "zod";

export function _handleResponse<T>(
  schema: z.ZodType<T>,
  response: AxiosResponse
): Response<T> {
  let errorCode = ErrorCode.Unknown;

  if (response.status === 404) {
    errorCode = ErrorCode.NotFound;
  }

  if (response.status >= 400) {
    return {
      ok: false,
      status: response.status,
      data: response.data,
      error: String(response.data),
      errorCode,
    };
  }

  const parseResult = schema.safeParse(response.data);
  errorCode = ErrorCode.ParseResponse;
  if (parseResult.success === false) {
    return {
      ok: false,
      status: 500,
      data: response.data,
      error: parseResult.error.toString(),
      errorCode,
    };
  }

  return {
    ok: true,
    status: response.status,
    data: parseResult.data,
  };
}
