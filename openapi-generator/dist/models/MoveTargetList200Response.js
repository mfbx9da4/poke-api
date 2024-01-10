"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveTargetList200Response = void 0;
var MoveTargetList200Response = (function () {
    function MoveTargetList200Response() {
    }
    MoveTargetList200Response.getAttributeTypeMap = function () {
        return MoveTargetList200Response.attributeTypeMap;
    };
    MoveTargetList200Response.discriminator = undefined;
    MoveTargetList200Response.attributeTypeMap = [
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
            "type": "Array<MoveTarget>",
            "format": ""
        }
    ];
    return MoveTargetList200Response;
}());
exports.MoveTargetList200Response = MoveTargetList200Response;
//# sourceMappingURL=MoveTargetList200Response.js.map