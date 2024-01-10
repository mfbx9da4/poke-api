"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterMethodRate = void 0;
var EncounterMethodRate = (function () {
    function EncounterMethodRate() {
    }
    EncounterMethodRate.getAttributeTypeMap = function () {
        return EncounterMethodRate.attributeTypeMap;
    };
    EncounterMethodRate.discriminator = undefined;
    EncounterMethodRate.attributeTypeMap = [
        {
            "name": "encounterMethod",
            "baseName": "encounter_method",
            "type": "EncounterMethod",
            "format": ""
        },
        {
            "name": "versionDetails",
            "baseName": "version_details",
            "type": "Array<EncounterVersionDetails>",
            "format": ""
        }
    ];
    return EncounterMethodRate;
}());
exports.EncounterMethodRate = EncounterMethodRate;
//# sourceMappingURL=EncounterMethodRate.js.map