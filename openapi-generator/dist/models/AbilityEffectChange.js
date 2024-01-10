"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityEffectChange = void 0;
var AbilityEffectChange = (function () {
    function AbilityEffectChange() {
    }
    AbilityEffectChange.getAttributeTypeMap = function () {
        return AbilityEffectChange.attributeTypeMap;
    };
    AbilityEffectChange.discriminator = undefined;
    AbilityEffectChange.attributeTypeMap = [
        {
            "name": "effectEntries",
            "baseName": "effect_entries",
            "type": "Array<Effect>",
            "format": ""
        },
        {
            "name": "versionGroup",
            "baseName": "version_group",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return AbilityEffectChange;
}());
exports.AbilityEffectChange = AbilityEffectChange;
//# sourceMappingURL=AbilityEffectChange.js.map