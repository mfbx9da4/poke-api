"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = void 0;
var Gender = (function () {
    function Gender() {
    }
    Gender.getAttributeTypeMap = function () {
        return Gender.attributeTypeMap;
    };
    Gender.discriminator = undefined;
    Gender.attributeTypeMap = [
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
            "name": "pokemonSpeciesDetails",
            "baseName": "pokemon_species_details",
            "type": "Array<GenderPokemonSpeciesDetailsInner>",
            "format": ""
        }
    ];
    return Gender;
}());
exports.Gender = Gender;
//# sourceMappingURL=Gender.js.map