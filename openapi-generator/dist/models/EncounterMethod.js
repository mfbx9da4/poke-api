"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterMethod = void 0;
var EncounterMethod = (function () {
    function EncounterMethod() {
    }
    EncounterMethod.getAttributeTypeMap = function () {
        return EncounterMethod.attributeTypeMap;
    };
    EncounterMethod.discriminator = undefined;
    EncounterMethod.attributeTypeMap = [
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
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": ""
        }
    ];
    return EncounterMethod;
}());
exports.EncounterMethod = EncounterMethod;
//# sourceMappingURL=EncounterMethod.js.map