"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestTypeList200Response = void 0;
var ContestTypeList200Response = (function () {
    function ContestTypeList200Response() {
    }
    ContestTypeList200Response.getAttributeTypeMap = function () {
        return ContestTypeList200Response.attributeTypeMap;
    };
    ContestTypeList200Response.discriminator = undefined;
    ContestTypeList200Response.attributeTypeMap = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<ContestType>",
            "format": ""
        }
    ];
    return ContestTypeList200Response;
}());
exports.ContestTypeList200Response = ContestTypeList200Response;
//# sourceMappingURL=ContestTypeList200Response.js.map