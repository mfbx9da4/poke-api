"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterConditionList200Response = void 0;
var EncounterConditionList200Response = (function () {
    function EncounterConditionList200Response() {
    }
    EncounterConditionList200Response.getAttributeTypeMap = function () {
        return EncounterConditionList200Response.attributeTypeMap;
    };
    EncounterConditionList200Response.discriminator = undefined;
    EncounterConditionList200Response.attributeTypeMap = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<EncounterCondition>",
            "format": ""
        }
    ];
    return EncounterConditionList200Response;
}());
exports.EncounterConditionList200Response = EncounterConditionList200Response;
//# sourceMappingURL=EncounterConditionList200Response.js.map