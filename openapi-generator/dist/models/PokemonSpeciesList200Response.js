"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSpeciesList200Response = void 0;
var PokemonSpeciesList200Response = (function () {
    function PokemonSpeciesList200Response() {
    }
    PokemonSpeciesList200Response.getAttributeTypeMap = function () {
        return PokemonSpeciesList200Response.attributeTypeMap;
    };
    PokemonSpeciesList200Response.discriminator = undefined;
    PokemonSpeciesList200Response.attributeTypeMap = [
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
            "type": "Array<PokemonSpecies>",
            "format": ""
        }
    ];
    return PokemonSpeciesList200Response;
}());
exports.PokemonSpeciesList200Response = PokemonSpeciesList200Response;
//# sourceMappingURL=PokemonSpeciesList200Response.js.map