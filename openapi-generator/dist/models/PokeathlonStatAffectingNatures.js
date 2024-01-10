"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeathlonStatAffectingNatures = void 0;
var PokeathlonStatAffectingNatures = (function () {
    function PokeathlonStatAffectingNatures() {
    }
    PokeathlonStatAffectingNatures.getAttributeTypeMap = function () {
        return PokeathlonStatAffectingNatures.attributeTypeMap;
    };
    PokeathlonStatAffectingNatures.discriminator = undefined;
    PokeathlonStatAffectingNatures.attributeTypeMap = [
        {
            "name": "increase",
            "baseName": "increase",
            "type": "Array<NaturePokeathlonStatAffectSets>",
            "format": ""
        },
        {
            "name": "decrease",
            "baseName": "decrease",
            "type": "Array<NaturePokeathlonStatAffectSets>",
            "format": ""
        }
    ];
    return PokeathlonStatAffectingNatures;
}());
exports.PokeathlonStatAffectingNatures = PokeathlonStatAffectingNatures;
//# sourceMappingURL=PokeathlonStatAffectingNatures.js.map