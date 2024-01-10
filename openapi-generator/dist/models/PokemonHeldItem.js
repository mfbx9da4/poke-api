"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonHeldItem = void 0;
var PokemonHeldItem = (function () {
    function PokemonHeldItem() {
    }
    PokemonHeldItem.getAttributeTypeMap = function () {
        return PokemonHeldItem.attributeTypeMap;
    };
    PokemonHeldItem.discriminator = undefined;
    PokemonHeldItem.attributeTypeMap = [
        {
            "name": "item",
            "baseName": "item",
            "type": "Item",
            "format": ""
        },
        {
            "name": "versionDetails",
            "baseName": "version_details",
            "type": "Array<PokemonHeldItemVersionDetailsInner>",
            "format": ""
        }
    ];
    return PokemonHeldItem;
}());
exports.PokemonHeldItem = PokemonHeldItem;
//# sourceMappingURL=PokemonHeldItem.js.map