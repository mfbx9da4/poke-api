"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatureStatChange = void 0;
var NatureStatChange = (function () {
    function NatureStatChange() {
    }
    NatureStatChange.getAttributeTypeMap = function () {
        return NatureStatChange.attributeTypeMap;
    };
    NatureStatChange.discriminator = undefined;
    NatureStatChange.attributeTypeMap = [
        {
            "name": "maxChange",
            "baseName": "max_change",
            "type": "number",
            "format": ""
        },
        {
            "name": "pokeathlonStat",
            "baseName": "pokeathlon_stat",
            "type": "PokeathlonStatName",
            "format": ""
        }
    ];
    return NatureStatChange;
}());
exports.NatureStatChange = NatureStatChange;
//# sourceMappingURL=NatureStatChange.js.map