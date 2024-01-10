"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionList200Response = void 0;
var RegionList200Response = (function () {
    function RegionList200Response() {
    }
    RegionList200Response.getAttributeTypeMap = function () {
        return RegionList200Response.attributeTypeMap;
    };
    RegionList200Response.discriminator = undefined;
    RegionList200Response.attributeTypeMap = [
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
            "type": "Array<Region>",
            "format": ""
        }
    ];
    return RegionList200Response;
}());
exports.RegionList200Response = RegionList200Response;
//# sourceMappingURL=RegionList200Response.js.map