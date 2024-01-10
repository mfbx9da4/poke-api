"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveAilmentList200Response = void 0;
var MoveAilmentList200Response = (function () {
    function MoveAilmentList200Response() {
    }
    MoveAilmentList200Response.getAttributeTypeMap = function () {
        return MoveAilmentList200Response.attributeTypeMap;
    };
    MoveAilmentList200Response.discriminator = undefined;
    MoveAilmentList200Response.attributeTypeMap = [
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
            "type": "Array<MoveAilment>",
            "format": ""
        }
    ];
    return MoveAilmentList200Response;
}());
exports.MoveAilmentList200Response = MoveAilmentList200Response;
//# sourceMappingURL=MoveAilmentList200Response.js.map