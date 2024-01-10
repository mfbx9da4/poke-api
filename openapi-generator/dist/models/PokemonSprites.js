"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSprites = void 0;
var PokemonSprites = (function () {
    function PokemonSprites() {
    }
    PokemonSprites.getAttributeTypeMap = function () {
        return PokemonSprites.attributeTypeMap;
    };
    PokemonSprites.discriminator = undefined;
    PokemonSprites.attributeTypeMap = [
        {
            "name": "frontDefault",
            "baseName": "front_default",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "frontFemale",
            "baseName": "front_female",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "frontShiny",
            "baseName": "front_shiny",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "frontShinyFemale",
            "baseName": "front_shiny_female",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "backDefault",
            "baseName": "back_default",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "backFemale",
            "baseName": "back_female",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "backShiny",
            "baseName": "back_shiny",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "backShinyFemale",
            "baseName": "back_shiny_female",
            "type": "string",
            "format": "uri"
        }
    ];
    return PokemonSprites;
}());
exports.PokemonSprites = PokemonSprites;
//# sourceMappingURL=PokemonSprites.js.map