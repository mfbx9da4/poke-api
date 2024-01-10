"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonAbility = void 0;
var PokemonAbility = (function () {
    function PokemonAbility() {
    }
    PokemonAbility.getAttributeTypeMap = function () {
        return PokemonAbility.attributeTypeMap;
    };
    PokemonAbility.discriminator = undefined;
    PokemonAbility.attributeTypeMap = [
        {
            "name": "isHidden",
            "baseName": "is_hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "slot",
            "baseName": "slot",
            "type": "number",
            "format": ""
        },
        {
            "name": "ability",
            "baseName": "ability",
            "type": "Ability",
            "format": ""
        }
    ];
    return PokemonAbility;
}());
exports.PokemonAbility = PokemonAbility;
//# sourceMappingURL=PokemonAbility.js.map