"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveStatAffectSets = void 0;
var MoveStatAffectSets = (function () {
    function MoveStatAffectSets() {
    }
    MoveStatAffectSets.getAttributeTypeMap = function () {
        return MoveStatAffectSets.attributeTypeMap;
    };
    MoveStatAffectSets.discriminator = undefined;
    MoveStatAffectSets.attributeTypeMap = [
        {
            "name": "increase",
            "baseName": "increase",
            "type": "Array<MoveStatAffect>",
            "format": ""
        },
        {
            "name": "decrease",
            "baseName": "decrease",
            "type": "Array<MoveStatAffect>",
            "format": ""
        }
    ];
    return MoveStatAffectSets;
}());
exports.MoveStatAffectSets = MoveStatAffectSets;
//# sourceMappingURL=MoveStatAffectSets.js.map