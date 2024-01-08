import { AxiosResponse } from "axios";
import { Response } from "../models";
import { z } from "zod";
export declare function _handleResponse<T>(schema: z.ZodType<T>, response: AxiosResponse): Response<T>;
//# sourceMappingURL=_handleResponse.d.ts.map