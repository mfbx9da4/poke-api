"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonType = void 0;
var PokemonType = (function () {
    function PokemonType() {
    }
    PokemonType.getAttributeTypeMap = function () {
        return PokemonType.attributeTypeMap;
    };
    PokemonType.discriminator = undefined;
    PokemonType.attributeTypeMap = [
        {
            "name": "slot",
            "baseName": "slot",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return PokemonType;
}());
exports.PokemonType = PokemonType;
//# sourceMappingURL=PokemonType.js.map