"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stat = void 0;
var Stat = (function () {
    function Stat() {
    }
    Stat.getAttributeTypeMap = function () {
        return Stat.attributeTypeMap;
    };
    Stat.discriminator = undefined;
    Stat.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "gameIndex",
            "baseName": "game_index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isBattleOnly",
            "baseName": "is_battle_only",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "affectingMoves",
            "baseName": "affecting_moves",
            "type": "MoveStatAffectSets",
            "format": ""
        },
        {
            "name": "affectingNatures",
            "baseName": "affecting_natures",
            "type": "NatureStatAffectSets",
            "format": ""
        }
    ];
    return Stat;
}());
exports.Stat = Stat;
//# sourceMappingURL=Stat.js.map