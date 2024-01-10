"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveStatChange = void 0;
var MoveStatChange = (function () {
    function MoveStatChange() {
    }
    MoveStatChange.getAttributeTypeMap = function () {
        return MoveStatChange.attributeTypeMap;
    };
    MoveStatChange.discriminator = undefined;
    MoveStatChange.attributeTypeMap = [
        {
            "name": "change",
            "baseName": "change",
            "type": "number",
            "format": ""
        },
        {
            "name": "stat",
            "baseName": "stat",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return MoveStatChange;
}());
exports.MoveStatChange = MoveStatChange;
//# sourceMappingURL=MoveStatChange.js.map