"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestEffect = void 0;
var ContestEffect = (function () {
    function ContestEffect() {
    }
    ContestEffect.getAttributeTypeMap = function () {
        return ContestEffect.attributeTypeMap;
    };
    ContestEffect.discriminator = undefined;
    ContestEffect.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "appeal",
            "baseName": "appeal",
            "type": "number",
            "format": ""
        },
        {
            "name": "jam",
            "baseName": "jam",
            "type": "number",
            "format": ""
        },
        {
            "name": "effectEntries",
            "baseName": "effect_entries",
            "type": "Array<VerboseEffect>",
            "format": ""
        },
        {
            "name": "flavorTextEntries",
            "baseName": "flavor_text_entries",
            "type": "Array<FlavorText>",
            "format": ""
        }
    ];
    return ContestEffect;
}());
exports.ContestEffect = ContestEffect;
//# sourceMappingURL=ContestEffect.js.map