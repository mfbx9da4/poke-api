"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveStatAffect = void 0;
var MoveStatAffect = (function () {
    function MoveStatAffect() {
    }
    MoveStatAffect.getAttributeTypeMap = function () {
        return MoveStatAffect.attributeTypeMap;
    };
    MoveStatAffect.discriminator = undefined;
    MoveStatAffect.attributeTypeMap = [
        {
            "name": "change",
            "baseName": "change",
            "type": "number",
            "format": ""
        },
        {
            "name": "move",
            "baseName": "move",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return MoveStatAffect;
}());
exports.MoveStatAffect = MoveStatAffect;
//# sourceMappingURL=MoveStatAffect.js.map