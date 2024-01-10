"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAttribute = void 0;
var ItemAttribute = (function () {
    function ItemAttribute() {
    }
    ItemAttribute.getAttributeTypeMap = function () {
        return ItemAttribute.attributeTypeMap;
    };
    ItemAttribute.discriminator = undefined;
    ItemAttribute.attributeTypeMap = [
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
    return ItemAttribute;
}());
exports.ItemAttribute = ItemAttribute;
//# sourceMappingURL=ItemAttribute.js.map