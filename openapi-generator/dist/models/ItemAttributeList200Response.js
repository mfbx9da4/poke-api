"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAttributeList200Response = void 0;
var ItemAttributeList200Response = (function () {
    function ItemAttributeList200Response() {
    }
    ItemAttributeList200Response.getAttributeTypeMap = function () {
        return ItemAttributeList200Response.attributeTypeMap;
    };
    ItemAttributeList200Response.discriminator = undefined;
    ItemAttributeList200Response.attributeTypeMap = [
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
            "type": "Array<ItemAttribute>",
            "format": ""
        }
    ];
    return ItemAttributeList200Response;
}());
exports.ItemAttributeList200Response = ItemAttributeList200Response;
//# sourceMappingURL=ItemAttributeList200Response.js.map