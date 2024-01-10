"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemFlingEffectList200Response = void 0;
var ItemFlingEffectList200Response = (function () {
    function ItemFlingEffectList200Response() {
    }
    ItemFlingEffectList200Response.getAttributeTypeMap = function () {
        return ItemFlingEffectList200Response.attributeTypeMap;
    };
    ItemFlingEffectList200Response.discriminator = undefined;
    ItemFlingEffectList200Response.attributeTypeMap = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<ItemFlingEffect>",
            "format": ""
        }
    ];
    return ItemFlingEffectList200Response;
}());
exports.ItemFlingEffectList200Response = ItemFlingEffectList200Response;
//# sourceMappingURL=ItemFlingEffectList200Response.js.map