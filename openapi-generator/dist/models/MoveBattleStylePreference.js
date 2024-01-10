"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveBattleStylePreference = void 0;
var MoveBattleStylePreference = (function () {
    function MoveBattleStylePreference() {
    }
    MoveBattleStylePreference.getAttributeTypeMap = function () {
        return MoveBattleStylePreference.attributeTypeMap;
    };
    MoveBattleStylePreference.discriminator = undefined;
    MoveBattleStylePreference.attributeTypeMap = [
        {
            "name": "lowHpPreference",
            "baseName": "low_hp_preference",
            "type": "number",
            "format": ""
        },
        {
            "name": "highHpPreference",
            "baseName": "high_hp_preference",
            "type": "number",
            "format": ""
        },
        {
            "name": "moveBattleStyle",
            "baseName": "move_battle_style",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return MoveBattleStylePreference;
}());
exports.MoveBattleStylePreference = MoveBattleStylePreference;
//# sourceMappingURL=MoveBattleStylePreference.js.map