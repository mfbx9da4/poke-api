"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveList200Response = void 0;
var MoveList200Response = (function () {
    function MoveList200Response() {
    }
    MoveList200Response.getAttributeTypeMap = function () {
        return MoveList200Response.attributeTypeMap;
    };
    MoveList200Response.discriminator = undefined;
    MoveList200Response.attributeTypeMap = [
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
            "type": "Array<Move>",
            "format": ""
        }
    ];
    return MoveList200Response;
}());
exports.MoveList200Response = MoveList200Response;
//# sourceMappingURL=MoveList200Response.js.map