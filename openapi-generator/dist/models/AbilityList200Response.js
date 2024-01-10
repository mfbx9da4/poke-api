"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityList200Response = void 0;
var AbilityList200Response = (function () {
    function AbilityList200Response() {
    }
    AbilityList200Response.getAttributeTypeMap = function () {
        return AbilityList200Response.attributeTypeMap;
    };
    AbilityList200Response.discriminator = undefined;
    AbilityList200Response.attributeTypeMap = [
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
            "type": "Array<Ability>",
            "format": ""
        }
    ];
    return AbilityList200Response;
}());
exports.AbilityList200Response = AbilityList200Response;
//# sourceMappingURL=AbilityList200Response.js.map