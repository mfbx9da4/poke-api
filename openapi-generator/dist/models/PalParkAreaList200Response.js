"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalParkAreaList200Response = void 0;
var PalParkAreaList200Response = (function () {
    function PalParkAreaList200Response() {
    }
    PalParkAreaList200Response.getAttributeTypeMap = function () {
        return PalParkAreaList200Response.attributeTypeMap;
    };
    PalParkAreaList200Response.discriminator = undefined;
    PalParkAreaList200Response.attributeTypeMap = [
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
            "type": "Array<PalParkArea>",
            "format": ""
        }
    ];
    return PalParkAreaList200Response;
}());
exports.PalParkAreaList200Response = PalParkAreaList200Response;
//# sourceMappingURL=PalParkAreaList200Response.js.map