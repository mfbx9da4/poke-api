"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonColor = void 0;
var PokemonColor = (function () {
    function PokemonColor() {
    }
    PokemonColor.getAttributeTypeMap = function () {
        return PokemonColor.attributeTypeMap;
    };
    PokemonColor.discriminator = undefined;
    PokemonColor.attributeTypeMap = [
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
    return PokemonColor;
}());
exports.PokemonColor = PokemonColor;
//# sourceMappingURL=PokemonColor.js.map