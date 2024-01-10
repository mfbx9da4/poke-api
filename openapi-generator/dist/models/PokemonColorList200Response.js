"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonColorList200Response = void 0;
var PokemonColorList200Response = (function () {
    function PokemonColorList200Response() {
    }
    PokemonColorList200Response.getAttributeTypeMap = function () {
        return PokemonColorList200Response.attributeTypeMap;
    };
    PokemonColorList200Response.discriminator = undefined;
    PokemonColorList200Response.attributeTypeMap = [
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
            "type": "Array<PokemonColor>",
            "format": ""
        }
    ];
    return PokemonColorList200Response;
}());
exports.PokemonColorList200Response = PokemonColorList200Response;
//# sourceMappingURL=PokemonColorList200Response.js.map