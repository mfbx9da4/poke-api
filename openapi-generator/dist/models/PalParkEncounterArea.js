"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalParkEncounterArea = void 0;
var PalParkEncounterArea = (function () {
    function PalParkEncounterArea() {
    }
    PalParkEncounterArea.getAttributeTypeMap = function () {
        return PalParkEncounterArea.attributeTypeMap;
    };
    PalParkEncounterArea.discriminator = undefined;
    PalParkEncounterArea.attributeTypeMap = [
        {
            "name": "baseScore",
            "baseName": "base_score",
            "type": "number",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "area",
            "baseName": "area",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return PalParkEncounterArea;
}());
exports.PalParkEncounterArea = PalParkEncounterArea;
//# sourceMappingURL=PalParkEncounterArea.js.map