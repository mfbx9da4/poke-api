"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionTriggerList200Response = void 0;
var EvolutionTriggerList200Response = (function () {
    function EvolutionTriggerList200Response() {
    }
    EvolutionTriggerList200Response.getAttributeTypeMap = function () {
        return EvolutionTriggerList200Response.attributeTypeMap;
    };
    EvolutionTriggerList200Response.discriminator = undefined;
    EvolutionTriggerList200Response.attributeTypeMap = [
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
            "type": "Array<EvolutionTrigger>",
            "format": ""
        }
    ];
    return EvolutionTriggerList200Response;
}());
exports.EvolutionTriggerList200Response = EvolutionTriggerList200Response;
//# sourceMappingURL=EvolutionTriggerList200Response.js.map