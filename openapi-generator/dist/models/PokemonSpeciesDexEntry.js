"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSpeciesDexEntry = void 0;
var PokemonSpeciesDexEntry = (function () {
    function PokemonSpeciesDexEntry() {
    }
    PokemonSpeciesDexEntry.getAttributeTypeMap = function () {
        return PokemonSpeciesDexEntry.attributeTypeMap;
    };
    PokemonSpeciesDexEntry.discriminator = undefined;
    PokemonSpeciesDexEntry.attributeTypeMap = [
        {
            "name": "entryNumber",
            "baseName": "entry_number",
            "type": "number",
            "format": ""
        },
        {
            "name": "pokedex",
            "baseName": "pokedex",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return PokemonSpeciesDexEntry;
}());
exports.PokemonSpeciesDexEntry = PokemonSpeciesDexEntry;
//# sourceMappingURL=PokemonSpeciesDexEntry.js.map