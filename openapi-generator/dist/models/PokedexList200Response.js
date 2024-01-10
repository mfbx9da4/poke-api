"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokedexList200Response = void 0;
var PokedexList200Response = (function () {
    function PokedexList200Response() {
    }
    PokedexList200Response.getAttributeTypeMap = function () {
        return PokedexList200Response.attributeTypeMap;
    };
    PokedexList200Response.discriminator = undefined;
    PokedexList200Response.attributeTypeMap = [
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
            "type": "Array<Pokedex>",
            "format": ""
        }
    ];
    return PokedexList200Response;
}());
exports.PokedexList200Response = PokedexList200Response;
//# sourceMappingURL=PokedexList200Response.js.map