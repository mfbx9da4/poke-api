"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterCondition = void 0;
var EncounterCondition = (function () {
    function EncounterCondition() {
    }
    EncounterCondition.getAttributeTypeMap = function () {
        return EncounterCondition.attributeTypeMap;
    };
    EncounterCondition.discriminator = undefined;
    EncounterCondition.attributeTypeMap = [
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
            "name": "values",
            "baseName": "values",
            "type": "Array<NamedAPIResource>",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        }
    ];
    return EncounterCondition;
}());
exports.EncounterCondition = EncounterCondition;
//# sourceMappingURL=EncounterCondition.js.map