"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectEffect = void 0;
var EffectEffect = (function () {
    function EffectEffect() {
    }
    EffectEffect.getAttributeTypeMap = function () {
        return EffectEffect.attributeTypeMap;
    };
    EffectEffect.discriminator = undefined;
    EffectEffect.attributeTypeMap = [
        {
            "name": "effect",
            "baseName": "effect",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "Language",
            "format": ""
        }
    ];
    return EffectEffect;
}());
exports.EffectEffect = EffectEffect;
//# sourceMappingURL=EffectEffect.js.map