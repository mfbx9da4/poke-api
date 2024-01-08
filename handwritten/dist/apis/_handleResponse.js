"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._handleResponse = void 0;
const models_1 = require("../models");
function _handleResponse(schema, response) {
    let errorCode = models_1.ErrorCode.Unknown;
    if (response.status === 404) {
        errorCode = models_1.ErrorCode.NotFound;
    }
    if (response.status >= 400) {
        return {
            status: response.status,
            data: response.data,
            error: String(response.data),
            errorCode,
        };
    }
    const parseResult = schema.safeParse(response.data);
    errorCode = models_1.ErrorCode.ParseResponseError;
    if (parseResult.success === false) {
        return {
            status: 500,
            data: response.data,
            error: parseResult.error.toString(),
            errorCode,
        };
    }
    return {
        status: response.status,
        data: parseResult.data,
    };
}
exports._handleResponse = _handleResponse;
//# sourceMappingURL=_handleResponse.js.map