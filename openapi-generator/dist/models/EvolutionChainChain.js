"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionChainChain = void 0;
var EvolutionChainChain = (function () {
    function EvolutionChainChain() {
    }
    EvolutionChainChain.getAttributeTypeMap = function () {
        return EvolutionChainChain.attributeTypeMap;
    };
    EvolutionChainChain.discriminator = undefined;
    EvolutionChainChain.attributeTypeMap = [
        {
            "name": "isBaby",
            "baseName": "is_baby",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "species",
            "baseName": "species",
            "type": "PokemonSpecies",
            "format": ""
        },
        {
            "name": "evolutionDetails",
            "baseName": "evolution_details",
            "type": "Array<EvolutionChainChainEvolutionDetailsInner>",
            "format": ""
        }
    ];
    return EvolutionChainChain;
}());
exports.EvolutionChainChain = EvolutionChainChain;
//# sourceMappingURL=EvolutionChainChain.js.map