"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionChain = void 0;
var EvolutionChain = (function () {
    function EvolutionChain() {
    }
    EvolutionChain.getAttributeTypeMap = function () {
        return EvolutionChain.attributeTypeMap;
    };
    EvolutionChain.discriminator = undefined;
    EvolutionChain.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "babyTriggerItem",
            "baseName": "baby_trigger_item",
            "type": "EvolutionChainBabyTriggerItem",
            "format": ""
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "EvolutionChainChain",
            "format": ""
        }
    ];
    return EvolutionChain;
}());
exports.EvolutionChain = EvolutionChain;
//# sourceMappingURL=EvolutionChain.js.map