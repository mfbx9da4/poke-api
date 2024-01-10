"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatureStatAffectSets = void 0;
var NatureStatAffectSets = (function () {
    function NatureStatAffectSets() {
    }
    NatureStatAffectSets.getAttributeTypeMap = function () {
        return NatureStatAffectSets.attributeTypeMap;
    };
    NatureStatAffectSets.discriminator = undefined;
    NatureStatAffectSets.attributeTypeMap = [
        {
            "name": "increase",
            "baseName": "increase",
            "type": "Array<NatureStatAffect>",
            "format": ""
        },
        {
            "name": "decrease",
            "baseName": "decrease",
            "type": "Array<NatureStatAffect>",
            "format": ""
        }
    ];
    return NatureStatAffectSets;
}());
exports.NatureStatAffectSets = NatureStatAffectSets;
//# sourceMappingURL=NatureStatAffectSets.js.map