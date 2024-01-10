"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCategoryList200Response = void 0;
var ItemCategoryList200Response = (function () {
    function ItemCategoryList200Response() {
    }
    ItemCategoryList200Response.getAttributeTypeMap = function () {
        return ItemCategoryList200Response.attributeTypeMap;
    };
    ItemCategoryList200Response.discriminator = undefined;
    ItemCategoryList200Response.attributeTypeMap = [
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
            "type": "Array<ItemCategory>",
            "format": ""
        }
    ];
    return ItemCategoryList200Response;
}());
exports.ItemCategoryList200Response = ItemCategoryList200Response;
//# sourceMappingURL=ItemCategoryList200Response.js.map