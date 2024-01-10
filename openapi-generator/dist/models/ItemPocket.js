"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPocket = void 0;
var ItemPocket = (function () {
    function ItemPocket() {
    }
    ItemPocket.getAttributeTypeMap = function () {
        return ItemPocket.attributeTypeMap;
    };
    ItemPocket.discriminator = undefined;
    ItemPocket.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<ItemCategory>",
            "format": ""
        }
    ];
    return ItemPocket;
}());
exports.ItemPocket = ItemPocket;
//# sourceMappingURL=ItemPocket.js.map