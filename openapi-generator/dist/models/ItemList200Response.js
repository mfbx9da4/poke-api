"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemList200Response = void 0;
var ItemList200Response = (function () {
    function ItemList200Response() {
    }
    ItemList200Response.getAttributeTypeMap = function () {
        return ItemList200Response.attributeTypeMap;
    };
    ItemList200Response.discriminator = undefined;
    ItemList200Response.attributeTypeMap = [
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
            "type": "Array<Item>",
            "format": ""
        }
    ];
    return ItemList200Response;
}());
exports.ItemList200Response = ItemList200Response;
//# sourceMappingURL=ItemList200Response.js.map