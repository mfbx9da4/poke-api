"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatureList200Response = void 0;
var NatureList200Response = (function () {
    function NatureList200Response() {
    }
    NatureList200Response.getAttributeTypeMap = function () {
        return NatureList200Response.attributeTypeMap;
    };
    NatureList200Response.discriminator = undefined;
    NatureList200Response.attributeTypeMap = [
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
            "type": "Array<Nature>",
            "format": ""
        }
    ];
    return NatureList200Response;
}());
exports.NatureList200Response = NatureList200Response;
//# sourceMappingURL=NatureList200Response.js.map