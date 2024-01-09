import { z } from "zod";
import { JsonHttpResponse } from "../http";
import { Response } from "../models";
export declare function _handleResponse<T>(schema: z.ZodType<T>, response: JsonHttpResponse): Response<T>;
//# sourceMappingURL=_handleResponse.d.ts.map