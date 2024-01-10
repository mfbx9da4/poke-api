"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonStat = void 0;
var PokemonStat = (function () {
    function PokemonStat() {
    }
    PokemonStat.getAttributeTypeMap = function () {
        return PokemonStat.attributeTypeMap;
    };
    PokemonStat.discriminator = undefined;
    PokemonStat.attributeTypeMap = [
        {
            "name": "stat",
            "baseName": "stat",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "effort",
            "baseName": "effort",
            "type": "number",
            "format": ""
        },
        {
            "name": "baseStat",
            "baseName": "base_stat",
            "type": "number",
            "format": ""
        }
    ];
    return PokemonStat;
}());
exports.PokemonStat = PokemonStat;
//# sourceMappingURL=PokemonStat.js.map