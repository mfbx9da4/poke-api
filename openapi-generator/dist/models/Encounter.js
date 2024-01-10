"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encounter = void 0;
var Encounter = (function () {
    function Encounter() {
    }
    Encounter.getAttributeTypeMap = function () {
        return Encounter.attributeTypeMap;
    };
    Encounter.discriminator = undefined;
    Encounter.attributeTypeMap = [
        {
            "name": "minLevel",
            "baseName": "min_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxLevel",
            "baseName": "max_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "conditionValues",
            "baseName": "condition_values",
            "type": "Array<EncounterConditionValue>",
            "format": ""
        },
        {
            "name": "chance",
            "baseName": "chance",
            "type": "number",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "EncounterMethod",
            "format": ""
        }
    ];
    return Encounter;
}());
exports.Encounter = Encounter;
//# sourceMappingURL=Encounter.js.map