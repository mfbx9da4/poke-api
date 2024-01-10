"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveBattleStyleList200Response = void 0;
var MoveBattleStyleList200Response = (function () {
    function MoveBattleStyleList200Response() {
    }
    MoveBattleStyleList200Response.getAttributeTypeMap = function () {
        return MoveBattleStyleList200Response.attributeTypeMap;
    };
    MoveBattleStyleList200Response.discriminator = undefined;
    MoveBattleStyleList200Response.attributeTypeMap = [
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
            "type": "Array<MoveBattleStyle>",
            "format": ""
        }
    ];
    return MoveBattleStyleList200Response;
}());
exports.MoveBattleStyleList200Response = MoveBattleStyleList200Response;
//# sourceMappingURL=MoveBattleStyleList200Response.js.map