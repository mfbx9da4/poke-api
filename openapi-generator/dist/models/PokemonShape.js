"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonShape = void 0;
var PokemonShape = (function () {
    function PokemonShape() {
    }
    PokemonShape.getAttributeTypeMap = function () {
        return PokemonShape.attributeTypeMap;
    };
    PokemonShape.discriminator = undefined;
    PokemonShape.attributeTypeMap = [
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
    return PokemonShape;
}());
exports.PokemonShape = PokemonShape;
//# sourceMappingURL=PokemonShape.js.map