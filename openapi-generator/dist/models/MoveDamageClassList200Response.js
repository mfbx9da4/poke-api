"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveDamageClassList200Response = void 0;
var MoveDamageClassList200Response = (function () {
    function MoveDamageClassList200Response() {
    }
    MoveDamageClassList200Response.getAttributeTypeMap = function () {
        return MoveDamageClassList200Response.attributeTypeMap;
    };
    MoveDamageClassList200Response.discriminator = undefined;
    MoveDamageClassList200Response.attributeTypeMap = [
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
            "type": "Array<MoveDamageClass>",
            "format": ""
        }
    ];
    return MoveDamageClassList200Response;
}());
exports.MoveDamageClassList200Response = MoveDamageClassList200Response;
//# sourceMappingURL=MoveDamageClassList200Response.js.map