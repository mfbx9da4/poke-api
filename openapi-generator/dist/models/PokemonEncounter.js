"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonEncounter = void 0;
var PokemonEncounter = (function () {
    function PokemonEncounter() {
    }
    PokemonEncounter.getAttributeTypeMap = function () {
        return PokemonEncounter.attributeTypeMap;
    };
    PokemonEncounter.discriminator = undefined;
    PokemonEncounter.attributeTypeMap = [
        {
            "name": "pokemon",
            "baseName": "pokemon",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "versionDetails",
            "baseName": "version_details",
            "type": "Array<EncounterVersionDetails>",
            "format": ""
        }
    ];
    return PokemonEncounter;
}());
exports.PokemonEncounter = PokemonEncounter;
//# sourceMappingURL=PokemonEncounter.js.map