"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonMoveVersionGroupDetailsInner = void 0;
var PokemonMoveVersionGroupDetailsInner = (function () {
    function PokemonMoveVersionGroupDetailsInner() {
    }
    PokemonMoveVersionGroupDetailsInner.getAttributeTypeMap = function () {
        return PokemonMoveVersionGroupDetailsInner.attributeTypeMap;
    };
    PokemonMoveVersionGroupDetailsInner.discriminator = undefined;
    PokemonMoveVersionGroupDetailsInner.attributeTypeMap = [
        {
            "name": "levelLearnedAt",
            "baseName": "level_learned_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "moveLearnMethod",
            "baseName": "move_learn_method",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "versionGroup",
            "baseName": "version_group",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return PokemonMoveVersionGroupDetailsInner;
}());
exports.PokemonMoveVersionGroupDetailsInner = PokemonMoveVersionGroupDetailsInner;
//# sourceMappingURL=PokemonMoveVersionGroupDetailsInner.js.map