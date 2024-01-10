"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionChainList200Response = void 0;
var EvolutionChainList200Response = (function () {
    function EvolutionChainList200Response() {
    }
    EvolutionChainList200Response.getAttributeTypeMap = function () {
        return EvolutionChainList200Response.attributeTypeMap;
    };
    EvolutionChainList200Response.discriminator = undefined;
    EvolutionChainList200Response.attributeTypeMap = [
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
            "type": "Array<EvolutionChain>",
            "format": ""
        }
    ];
    return EvolutionChainList200Response;
}());
exports.EvolutionChainList200Response = EvolutionChainList200Response;
//# sourceMappingURL=EvolutionChainList200Response.js.map