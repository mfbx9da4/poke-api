"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSpeciesVariety = void 0;
var PokemonSpeciesVariety = (function () {
    function PokemonSpeciesVariety() {
    }
    PokemonSpeciesVariety.getAttributeTypeMap = function () {
        return PokemonSpeciesVariety.attributeTypeMap;
    };
    PokemonSpeciesVariety.discriminator = undefined;
    PokemonSpeciesVariety.attributeTypeMap = [
        {
            "name": "isDefault",
            "baseName": "is_default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pokemon",
            "baseName": "pokemon",
            "type": "Pokemon",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return PokemonSpeciesVariety;
}());
exports.PokemonSpeciesVariety = PokemonSpeciesVariety;
//# sourceMappingURL=PokemonSpeciesVariety.js.map