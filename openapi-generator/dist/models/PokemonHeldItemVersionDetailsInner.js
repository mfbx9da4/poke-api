"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonHeldItemVersionDetailsInner = void 0;
var PokemonHeldItemVersionDetailsInner = (function () {
    function PokemonHeldItemVersionDetailsInner() {
    }
    PokemonHeldItemVersionDetailsInner.getAttributeTypeMap = function () {
        return PokemonHeldItemVersionDetailsInner.attributeTypeMap;
    };
    PokemonHeldItemVersionDetailsInner.discriminator = undefined;
    PokemonHeldItemVersionDetailsInner.attributeTypeMap = [
        {
            "name": "rarity",
            "baseName": "rarity",
            "type": "number",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Version",
            "format": ""
        }
    ];
    return PokemonHeldItemVersionDetailsInner;
}());
exports.PokemonHeldItemVersionDetailsInner = PokemonHeldItemVersionDetailsInner;
//# sourceMappingURL=PokemonHeldItemVersionDetailsInner.js.map