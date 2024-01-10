"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeathlonStat = void 0;
var PokeathlonStat = (function () {
    function PokeathlonStat() {
    }
    PokeathlonStat.getAttributeTypeMap = function () {
        return PokeathlonStat.attributeTypeMap;
    };
    PokeathlonStat.discriminator = undefined;
    PokeathlonStat.attributeTypeMap = [
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
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        },
        {
            "name": "affectingNatures",
            "baseName": "affecting_natures",
            "type": "PokeathlonStatAffectingNatures",
            "format": ""
        }
    ];
    return PokeathlonStat;
}());
exports.PokeathlonStat = PokeathlonStat;
//# sourceMappingURL=PokeathlonStat.js.map