"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveLearnMethodList200Response = void 0;
var MoveLearnMethodList200Response = (function () {
    function MoveLearnMethodList200Response() {
    }
    MoveLearnMethodList200Response.getAttributeTypeMap = function () {
        return MoveLearnMethodList200Response.attributeTypeMap;
    };
    MoveLearnMethodList200Response.discriminator = undefined;
    MoveLearnMethodList200Response.attributeTypeMap = [
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
            "type": "Array<MoveLearnMethod>",
            "format": ""
        }
    ];
    return MoveLearnMethodList200Response;
}());
exports.MoveLearnMethodList200Response = MoveLearnMethodList200Response;
//# sourceMappingURL=MoveLearnMethodList200Response.js.map