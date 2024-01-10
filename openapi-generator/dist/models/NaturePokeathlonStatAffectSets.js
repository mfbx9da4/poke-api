"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaturePokeathlonStatAffectSets = void 0;
var NaturePokeathlonStatAffectSets = (function () {
    function NaturePokeathlonStatAffectSets() {
    }
    NaturePokeathlonStatAffectSets.getAttributeTypeMap = function () {
        return NaturePokeathlonStatAffectSets.attributeTypeMap;
    };
    NaturePokeathlonStatAffectSets.discriminator = undefined;
    NaturePokeathlonStatAffectSets.attributeTypeMap = [
        {
            "name": "increase",
            "baseName": "increase",
            "type": "Array<PokeathlonStatAffect>",
            "format": ""
        },
        {
            "name": "decrease",
            "baseName": "decrease",
            "type": "Array<PokeathlonStatAffect>",
            "format": ""
        }
    ];
    return NaturePokeathlonStatAffectSets;
}());
exports.NaturePokeathlonStatAffectSets = NaturePokeathlonStatAffectSets;
//# sourceMappingURL=NaturePokeathlonStatAffectSets.js.map