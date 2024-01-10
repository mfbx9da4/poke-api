"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatList200Response = void 0;
var StatList200Response = (function () {
    function StatList200Response() {
    }
    StatList200Response.getAttributeTypeMap = function () {
        return StatList200Response.attributeTypeMap;
    };
    StatList200Response.discriminator = undefined;
    StatList200Response.attributeTypeMap = [
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
            "type": "Array<Stat>",
            "format": ""
        }
    ];
    return StatList200Response;
}());
exports.StatList200Response = StatList200Response;
//# sourceMappingURL=StatList200Response.js.map