"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonHabitat = void 0;
var PokemonHabitat = (function () {
    function PokemonHabitat() {
    }
    PokemonHabitat.getAttributeTypeMap = function () {
        return PokemonHabitat.attributeTypeMap;
    };
    PokemonHabitat.discriminator = undefined;
    PokemonHabitat.attributeTypeMap = [
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
        }
    ];
    return PokemonHabitat;
}());
exports.PokemonHabitat = PokemonHabitat;
//# sourceMappingURL=PokemonHabitat.js.map