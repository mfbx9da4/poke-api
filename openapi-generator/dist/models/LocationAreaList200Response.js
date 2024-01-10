"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationAreaList200Response = void 0;
var LocationAreaList200Response = (function () {
    function LocationAreaList200Response() {
    }
    LocationAreaList200Response.getAttributeTypeMap = function () {
        return LocationAreaList200Response.attributeTypeMap;
    };
    LocationAreaList200Response.discriminator = undefined;
    LocationAreaList200Response.attributeTypeMap = [
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
            "type": "Array<LocationArea>",
            "format": ""
        }
    ];
    return LocationAreaList200Response;
}());
exports.LocationAreaList200Response = LocationAreaList200Response;
//# sourceMappingURL=LocationAreaList200Response.js.map