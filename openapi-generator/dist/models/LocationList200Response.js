"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationList200Response = void 0;
var LocationList200Response = (function () {
    function LocationList200Response() {
    }
    LocationList200Response.getAttributeTypeMap = function () {
        return LocationList200Response.attributeTypeMap;
    };
    LocationList200Response.discriminator = undefined;
    LocationList200Response.attributeTypeMap = [
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
            "type": "Array<Location>",
            "format": ""
        }
    ];
    return LocationList200Response;
}());
exports.LocationList200Response = LocationList200Response;
//# sourceMappingURL=LocationList200Response.js.map