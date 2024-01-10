"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterVersionDetails = void 0;
var EncounterVersionDetails = (function () {
    function EncounterVersionDetails() {
    }
    EncounterVersionDetails.getAttributeTypeMap = function () {
        return EncounterVersionDetails.attributeTypeMap;
    };
    EncounterVersionDetails.discriminator = undefined;
    EncounterVersionDetails.attributeTypeMap = [
        {
            "name": "version",
            "baseName": "version",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "maxChance",
            "baseName": "max_chance",
            "type": "number",
            "format": ""
        },
        {
            "name": "encounterDetails",
            "baseName": "encounter_details",
            "type": "Array<Encounter>",
            "format": ""
        }
    ];
    return EncounterVersionDetails;
}());
exports.EncounterVersionDetails = EncounterVersionDetails;
//# sourceMappingURL=EncounterVersionDetails.js.map