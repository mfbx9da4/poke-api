"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonHabitatList200Response = void 0;
var PokemonHabitatList200Response = (function () {
    function PokemonHabitatList200Response() {
    }
    PokemonHabitatList200Response.getAttributeTypeMap = function () {
        return PokemonHabitatList200Response.attributeTypeMap;
    };
    PokemonHabitatList200Response.discriminator = undefined;
    PokemonHabitatList200Response.attributeTypeMap = [
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
            "type": "Array<PokemonHabitat>",
            "format": ""
        }
    ];
    return PokemonHabitatList200Response;
}());
exports.PokemonHabitatList200Response = PokemonHabitatList200Response;
//# sourceMappingURL=PokemonHabitatList200Response.js.map