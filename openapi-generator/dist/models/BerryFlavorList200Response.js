"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerryFlavorList200Response = void 0;
var BerryFlavorList200Response = (function () {
    function BerryFlavorList200Response() {
    }
    BerryFlavorList200Response.getAttributeTypeMap = function () {
        return BerryFlavorList200Response.attributeTypeMap;
    };
    BerryFlavorList200Response.discriminator = undefined;
    BerryFlavorList200Response.attributeTypeMap = [
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
            "type": "Array<BerryFlavor>",
            "format": ""
        }
    ];
    return BerryFlavorList200Response;
}());
exports.BerryFlavorList200Response = BerryFlavorList200Response;
//# sourceMappingURL=BerryFlavorList200Response.js.map