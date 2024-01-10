"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerryFirmnessList200Response = void 0;
var BerryFirmnessList200Response = (function () {
    function BerryFirmnessList200Response() {
    }
    BerryFirmnessList200Response.getAttributeTypeMap = function () {
        return BerryFirmnessList200Response.attributeTypeMap;
    };
    BerryFirmnessList200Response.discriminator = undefined;
    BerryFirmnessList200Response.attributeTypeMap = [
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
            "type": "Array<BerryFirmness>",
            "format": ""
        }
    ];
    return BerryFirmnessList200Response;
}());
exports.BerryFirmnessList200Response = BerryFirmnessList200Response;
//# sourceMappingURL=BerryFirmnessList200Response.js.map