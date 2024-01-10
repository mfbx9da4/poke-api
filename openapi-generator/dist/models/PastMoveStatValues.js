"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PastMoveStatValues = void 0;
var PastMoveStatValues = (function () {
    function PastMoveStatValues() {
    }
    PastMoveStatValues.getAttributeTypeMap = function () {
        return PastMoveStatValues.attributeTypeMap;
    };
    PastMoveStatValues.discriminator = undefined;
    PastMoveStatValues.attributeTypeMap = [
        {
            "name": "accuracy",
            "baseName": "accuracy",
            "type": "number",
            "format": ""
        },
        {
            "name": "effectChance",
            "baseName": "effect_chance",
            "type": "number",
            "format": ""
        },
        {
            "name": "power",
            "baseName": "power",
            "type": "number",
            "format": ""
        },
        {
            "name": "pp",
            "baseName": "pp",
            "type": "number",
            "format": ""
        },
        {
            "name": "effectEntries",
            "baseName": "effect_entries",
            "type": "Array<PastMoveStatValuesEffectEntriesInner>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Type",
            "format": ""
        }
    ];
    return PastMoveStatValues;
}());
exports.PastMoveStatValues = PastMoveStatValues;
//# sourceMappingURL=PastMoveStatValues.js.map