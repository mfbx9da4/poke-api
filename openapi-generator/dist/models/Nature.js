"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nature = void 0;
var Nature = (function () {
    function Nature() {
    }
    Nature.getAttributeTypeMap = function () {
        return Nature.attributeTypeMap;
    };
    Nature.discriminator = undefined;
    Nature.attributeTypeMap = [
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
        },
        {
            "name": "decreasedStat",
            "baseName": "decreased_stat",
            "type": "string",
            "format": ""
        },
        {
            "name": "increasedStat",
            "baseName": "increased_stat",
            "type": "string",
            "format": ""
        },
        {
            "name": "hatesFlavor",
            "baseName": "hates_flavor",
            "type": "string",
            "format": ""
        },
        {
            "name": "likesFlavor",
            "baseName": "likes_flavor",
            "type": "string",
            "format": ""
        },
        {
            "name": "pokeathlonStatChanges",
            "baseName": "pokeathlon_stat_changes",
            "type": "Array<NatureStatChange>",
            "format": ""
        },
        {
            "name": "moveBattleStylePreferences",
            "baseName": "move_battle_style_preferences",
            "type": "Array<MoveBattleStylePreference>",
            "format": ""
        }
    ];
    return Nature;
}());
exports.Nature = Nature;
//# sourceMappingURL=Nature.js.map