"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonEntry = void 0;
var PokemonEntry = (function () {
    function PokemonEntry() {
    }
    PokemonEntry.getAttributeTypeMap = function () {
        return PokemonEntry.attributeTypeMap;
    };
    PokemonEntry.discriminator = undefined;
    PokemonEntry.attributeTypeMap = [
        {
            "name": "entryNumber",
            "baseName": "entry_number",
            "type": "number",
            "format": ""
        },
        {
            "name": "pokemonSpecies",
            "baseName": "pokemon_species",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return PokemonEntry;
}());
exports.PokemonEntry = PokemonEntry;
//# sourceMappingURL=PokemonEntry.js.map