"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCategory = void 0;
var ItemCategory = (function () {
    function ItemCategory() {
    }
    ItemCategory.getAttributeTypeMap = function () {
        return ItemCategory.attributeTypeMap;
    };
    ItemCategory.discriminator = undefined;
    ItemCategory.attributeTypeMap = [
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
            "name": "items",
            "baseName": "items",
            "type": "Array<NamedAPIResource>",
            "format": ""
        }
    ];
    return ItemCategory;
}());
exports.ItemCategory = ItemCategory;
//# sourceMappingURL=ItemCategory.js.map