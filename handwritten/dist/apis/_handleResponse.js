"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._handleResponse = void 0;
const Response_1 = require("../models/Response");
function _handleResponse(schema, response) {
    let errorCode = Response_1.ErrorCode.Unknown;
    if (response.status === 404) {
        errorCode = Response_1.ErrorCode.NotFound;
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
    errorCode = Response_1.ErrorCode.ParseResponse;
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
exports._handleResponse = _handleResponse;
//# sourceMappingURL=_handleResponse.js.map