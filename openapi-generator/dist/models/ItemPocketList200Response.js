"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPocketList200Response = void 0;
var ItemPocketList200Response = (function () {
    function ItemPocketList200Response() {
    }
    ItemPocketList200Response.getAttributeTypeMap = function () {
        return ItemPocketList200Response.attributeTypeMap;
    };
    ItemPocketList200Response.discriminator = undefined;
    ItemPocketList200Response.attributeTypeMap = [
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
            "type": "Array<ItemPocket>",
            "format": ""
        }
    ];
    return ItemPocketList200Response;
}());
exports.ItemPocketList200Response = ItemPocketList200Response;
//# sourceMappingURL=ItemPocketList200Response.js.map