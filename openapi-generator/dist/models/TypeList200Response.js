"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeList200Response = void 0;
var TypeList200Response = (function () {
    function TypeList200Response() {
    }
    TypeList200Response.getAttributeTypeMap = function () {
        return TypeList200Response.attributeTypeMap;
    };
    TypeList200Response.discriminator = undefined;
    TypeList200Response.attributeTypeMap = [
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
            "type": "Array<Type>",
            "format": ""
        }
    ];
    return TypeList200Response;
}());
exports.TypeList200Response = TypeList200Response;
//# sourceMappingURL=TypeList200Response.js.map