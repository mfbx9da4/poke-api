"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerryFlavor = void 0;
var BerryFlavor = (function () {
    function BerryFlavor() {
    }
    BerryFlavor.getAttributeTypeMap = function () {
        return BerryFlavor.attributeTypeMap;
    };
    BerryFlavor.discriminator = undefined;
    BerryFlavor.attributeTypeMap = [
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
            "name": "berries",
            "baseName": "berries",
            "type": "Array<BerryFlavorMap>",
            "format": ""
        }
    ];
    return BerryFlavor;
}());
exports.BerryFlavor = BerryFlavor;
//# sourceMappingURL=BerryFlavor.js.map