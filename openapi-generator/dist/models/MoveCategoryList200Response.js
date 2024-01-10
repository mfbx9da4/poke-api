"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveCategoryList200Response = void 0;
var MoveCategoryList200Response = (function () {
    function MoveCategoryList200Response() {
    }
    MoveCategoryList200Response.getAttributeTypeMap = function () {
        return MoveCategoryList200Response.attributeTypeMap;
    };
    MoveCategoryList200Response.discriminator = undefined;
    MoveCategoryList200Response.attributeTypeMap = [
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
            "type": "Array<MoveCategory>",
            "format": ""
        }
    ];
    return MoveCategoryList200Response;
}());
exports.MoveCategoryList200Response = MoveCategoryList200Response;
//# sourceMappingURL=MoveCategoryList200Response.js.map