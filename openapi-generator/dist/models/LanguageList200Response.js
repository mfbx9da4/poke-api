"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageList200Response = void 0;
var LanguageList200Response = (function () {
    function LanguageList200Response() {
    }
    LanguageList200Response.getAttributeTypeMap = function () {
        return LanguageList200Response.attributeTypeMap;
    };
    LanguageList200Response.discriminator = undefined;
    LanguageList200Response.attributeTypeMap = [
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
            "type": "Array<Language>",
            "format": ""
        }
    ];
    return LanguageList200Response;
}());
exports.LanguageList200Response = LanguageList200Response;
//# sourceMappingURL=LanguageList200Response.js.map