"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonMove = void 0;
var PokemonMove = (function () {
    function PokemonMove() {
    }
    PokemonMove.getAttributeTypeMap = function () {
        return PokemonMove.attributeTypeMap;
    };
    PokemonMove.discriminator = undefined;
    PokemonMove.attributeTypeMap = [
        {
            "name": "move",
            "baseName": "move",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "versionGroupDetails",
            "baseName": "version_group_details",
            "type": "Array<PokemonMoveVersionGroupDetailsInner>",
            "format": ""
        }
    ];
    return PokemonMove;
}());
exports.PokemonMove = PokemonMove;
//# sourceMappingURL=PokemonMove.js.map