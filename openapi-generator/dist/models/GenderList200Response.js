"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderList200Response = void 0;
var GenderList200Response = (function () {
    function GenderList200Response() {
    }
    GenderList200Response.getAttributeTypeMap = function () {
        return GenderList200Response.attributeTypeMap;
    };
    GenderList200Response.discriminator = undefined;
    GenderList200Response.attributeTypeMap = [
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
            "type": "Array<Gender>",
            "format": ""
        }
    ];
    return GenderList200Response;
}());
exports.GenderList200Response = GenderList200Response;
//# sourceMappingURL=GenderList200Response.js.map