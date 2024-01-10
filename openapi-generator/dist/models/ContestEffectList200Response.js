"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestEffectList200Response = void 0;
var ContestEffectList200Response = (function () {
    function ContestEffectList200Response() {
    }
    ContestEffectList200Response.getAttributeTypeMap = function () {
        return ContestEffectList200Response.attributeTypeMap;
    };
    ContestEffectList200Response.discriminator = undefined;
    ContestEffectList200Response.attributeTypeMap = [
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
            "type": "Array<ContestEffect>",
            "format": ""
        }
    ];
    return ContestEffectList200Response;
}());
exports.ContestEffectList200Response = ContestEffectList200Response;
//# sourceMappingURL=ContestEffectList200Response.js.map