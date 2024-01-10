"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestComboDetail = void 0;
var ContestComboDetail = (function () {
    function ContestComboDetail() {
    }
    ContestComboDetail.getAttributeTypeMap = function () {
        return ContestComboDetail.attributeTypeMap;
    };
    ContestComboDetail.discriminator = undefined;
    ContestComboDetail.attributeTypeMap = [
        {
            "name": "useBefore",
            "baseName": "use_before",
            "type": "Array<Move>",
            "format": ""
        },
        {
            "name": "useAfter",
            "baseName": "use_after",
            "type": "Array<Move>",
            "format": ""
        }
    ];
    return ContestComboDetail;
}());
exports.ContestComboDetail = ContestComboDetail;
//# sourceMappingURL=ContestComboDetail.js.map