"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemFlingEffect = void 0;
var ItemFlingEffect = (function () {
    function ItemFlingEffect() {
    }
    ItemFlingEffect.getAttributeTypeMap = function () {
        return ItemFlingEffect.attributeTypeMap;
    };
    ItemFlingEffect.discriminator = undefined;
    ItemFlingEffect.attributeTypeMap = [
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
            "name": "effectEntries",
            "baseName": "effect_entries",
            "type": "Array<VerboseEffect>",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>",
            "format": ""
        }
    ];
    return ItemFlingEffect;
}());
exports.ItemFlingEffect = ItemFlingEffect;
//# sourceMappingURL=ItemFlingEffect.js.map