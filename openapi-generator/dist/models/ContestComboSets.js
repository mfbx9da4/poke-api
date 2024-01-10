"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestComboSets = void 0;
var ContestComboSets = (function () {
    function ContestComboSets() {
    }
    ContestComboSets.getAttributeTypeMap = function () {
        return ContestComboSets.attributeTypeMap;
    };
    ContestComboSets.discriminator = undefined;
    ContestComboSets.attributeTypeMap = [
        {
            "name": "normal",
            "baseName": "normal",
            "type": "ContestComboDetail",
            "format": ""
        },
        {
            "name": "_super",
            "baseName": "super",
            "type": "ContestComboDetail",
            "format": ""
        }
    ];
    return ContestComboSets;
}());
exports.ContestComboSets = ContestComboSets;
//# sourceMappingURL=ContestComboSets.js.map