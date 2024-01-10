"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerryFlavorMap = void 0;
var BerryFlavorMap = (function () {
    function BerryFlavorMap() {
    }
    BerryFlavorMap.getAttributeTypeMap = function () {
        return BerryFlavorMap.attributeTypeMap;
    };
    BerryFlavorMap.discriminator = undefined;
    BerryFlavorMap.attributeTypeMap = [
        {
            "name": "potency",
            "baseName": "potency",
            "type": "number",
            "format": ""
        },
        {
            "name": "flavor",
            "baseName": "flavor",
            "type": "BerryFlavor",
            "format": ""
        }
    ];
    return BerryFlavorMap;
}());
exports.BerryFlavorMap = BerryFlavorMap;
//# sourceMappingURL=BerryFlavorMap.js.map