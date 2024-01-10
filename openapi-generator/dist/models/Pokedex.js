"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
var Pokedex = (function () {
    function Pokedex() {
    }
    Pokedex.getAttributeTypeMap = function () {
        return Pokedex.attributeTypeMap;
    };
    Pokedex.discriminator = undefined;
    Pokedex.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isMainSeries",
            "baseName": "is_main_series",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "descriptions",
            "baseName": "descriptions",
            "type": "Array<Description>",
            "format": ""
        },
        {
            "name": "pokemonEntries",
            "baseName": "pokemon_entries",
            "type": "Array<PokemonEntry>",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return Pokedex;
}());
exports.Pokedex = Pokedex;
//# sourceMappingURL=Pokedex.js.map