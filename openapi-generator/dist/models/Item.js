"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = (function () {
    function Item() {
    }
    Item.getAttributeTypeMap = function () {
        return Item.attributeTypeMap;
    };
    Item.discriminator = undefined;
    Item.attributeTypeMap = [
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
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "flingPower",
            "baseName": "fling_power",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "effectEntries",
            "baseName": "effect_entries",
            "type": "Array<VerboseEffect>",
            "format": ""
        },
        {
            "name": "flavorTextEntries",
            "baseName": "flavor_text_entries",
            "type": "Array<FlavorText>",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<ItemAttribute>",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "ItemCategory",
            "format": ""
        },
        {
            "name": "flingEffect",
            "baseName": "fling_effect",
            "type": "ItemFlingEffect",
            "format": ""
        }
    ];
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=Item.js.map