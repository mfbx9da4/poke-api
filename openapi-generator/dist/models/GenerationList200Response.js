"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationList200Response = void 0;
var GenerationList200Response = (function () {
    function GenerationList200Response() {
    }
    GenerationList200Response.getAttributeTypeMap = function () {
        return GenerationList200Response.attributeTypeMap;
    };
    GenerationList200Response.discriminator = undefined;
    GenerationList200Response.attributeTypeMap = [
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
            "type": "Array<Generation>",
            "format": ""
        }
    ];
    return GenerationList200Response;
}());
exports.GenerationList200Response = GenerationList200Response;
//# sourceMappingURL=GenerationList200Response.js.map