"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EggGroup = void 0;
var EggGroup = (function () {
    function EggGroup() {
    }
    EggGroup.getAttributeTypeMap = function () {
        return EggGroup.attributeTypeMap;
    };
    EggGroup.discriminator = undefined;
    EggGroup.attributeTypeMap = [
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
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        },
        {
            "name": "pokemonSpecies",
            "baseName": "pokemon_species",
            "type": "Array<NamedAPIResource>",
            "format": ""
        }
    ];
    return EggGroup;
}());
exports.EggGroup = EggGroup;
//# sourceMappingURL=EggGroup.js.map