"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeathlonStatList200Response = void 0;
var PokeathlonStatList200Response = (function () {
    function PokeathlonStatList200Response() {
    }
    PokeathlonStatList200Response.getAttributeTypeMap = function () {
        return PokeathlonStatList200Response.attributeTypeMap;
    };
    PokeathlonStatList200Response.discriminator = undefined;
    PokeathlonStatList200Response.attributeTypeMap = [
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
            "type": "Array<PokeathlonStat>",
            "format": ""
        }
    ];
    return PokeathlonStatList200Response;
}());
exports.PokeathlonStatList200Response = PokeathlonStatList200Response;
//# sourceMappingURL=PokeathlonStatList200Response.js.map