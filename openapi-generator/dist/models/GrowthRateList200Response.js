"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrowthRateList200Response = void 0;
var GrowthRateList200Response = (function () {
    function GrowthRateList200Response() {
    }
    GrowthRateList200Response.getAttributeTypeMap = function () {
        return GrowthRateList200Response.attributeTypeMap;
    };
    GrowthRateList200Response.discriminator = undefined;
    GrowthRateList200Response.attributeTypeMap = [
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
            "type": "Array<GrowthRate>",
            "format": ""
        }
    ];
    return GrowthRateList200Response;
}());
exports.GrowthRateList200Response = GrowthRateList200Response;
//# sourceMappingURL=GrowthRateList200Response.js.map