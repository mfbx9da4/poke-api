"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterMethodList200Response = void 0;
var EncounterMethodList200Response = (function () {
    function EncounterMethodList200Response() {
    }
    EncounterMethodList200Response.getAttributeTypeMap = function () {
        return EncounterMethodList200Response.attributeTypeMap;
    };
    EncounterMethodList200Response.discriminator = undefined;
    EncounterMethodList200Response.attributeTypeMap = [
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
            "type": "Array<EncounterMethod>",
            "format": ""
        }
    ];
    return EncounterMethodList200Response;
}());
exports.EncounterMethodList200Response = EncounterMethodList200Response;
//# sourceMappingURL=EncounterMethodList200Response.js.map