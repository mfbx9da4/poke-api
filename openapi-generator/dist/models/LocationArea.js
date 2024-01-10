"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationArea = void 0;
var LocationArea = (function () {
    function LocationArea() {
    }
    LocationArea.getAttributeTypeMap = function () {
        return LocationArea.attributeTypeMap;
    };
    LocationArea.discriminator = undefined;
    LocationArea.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "gameIndex",
            "baseName": "game_index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "encounterMethodRates",
            "baseName": "encounter_method_rates",
            "type": "Array<EncounterMethodRate>",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "Location",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        },
        {
            "name": "pokemonEncounters",
            "baseName": "pokemon_encounters",
            "type": "Array<PokemonEncounter>",
            "format": ""
        }
    ];
    return LocationArea;
}());
exports.LocationArea = LocationArea;
//# sourceMappingURL=LocationArea.js.map