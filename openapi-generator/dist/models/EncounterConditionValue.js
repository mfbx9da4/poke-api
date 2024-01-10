"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterConditionValue = void 0;
var EncounterConditionValue = (function () {
    function EncounterConditionValue() {
    }
    EncounterConditionValue.getAttributeTypeMap = function () {
        return EncounterConditionValue.attributeTypeMap;
    };
    EncounterConditionValue.discriminator = undefined;
    EncounterConditionValue.attributeTypeMap = [
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
            "name": "condition",
            "baseName": "condition",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        }
    ];
    return EncounterConditionValue;
}());
exports.EncounterConditionValue = EncounterConditionValue;
//# sourceMappingURL=EncounterConditionValue.js.map