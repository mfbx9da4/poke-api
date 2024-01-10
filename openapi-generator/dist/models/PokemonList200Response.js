"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonList200Response = void 0;
var PokemonList200Response = (function () {
    function PokemonList200Response() {
    }
    PokemonList200Response.getAttributeTypeMap = function () {
        return PokemonList200Response.attributeTypeMap;
    };
    PokemonList200Response.discriminator = undefined;
    PokemonList200Response.attributeTypeMap = [
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
            "type": "Array<Pokemon>",
            "format": ""
        }
    ];
    return PokemonList200Response;
}());
exports.PokemonList200Response = PokemonList200Response;
//# sourceMappingURL=PokemonList200Response.js.map