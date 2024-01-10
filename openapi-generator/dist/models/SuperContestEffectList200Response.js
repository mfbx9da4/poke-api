"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperContestEffectList200Response = void 0;
var SuperContestEffectList200Response = (function () {
    function SuperContestEffectList200Response() {
    }
    SuperContestEffectList200Response.getAttributeTypeMap = function () {
        return SuperContestEffectList200Response.attributeTypeMap;
    };
    SuperContestEffectList200Response.discriminator = undefined;
    SuperContestEffectList200Response.attributeTypeMap = [
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
            "type": "Array<SuperContestEffect>",
            "format": ""
        }
    ];
    return SuperContestEffectList200Response;
}());
exports.SuperContestEffectList200Response = SuperContestEffectList200Response;
//# sourceMappingURL=SuperContestEffectList200Response.js.map