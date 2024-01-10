"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionChainChainEvolutionDetailsInnerLocation = void 0;
var EvolutionChainChainEvolutionDetailsInnerLocation = (function () {
    function EvolutionChainChainEvolutionDetailsInnerLocation() {
    }
    EvolutionChainChainEvolutionDetailsInnerLocation.getAttributeTypeMap = function () {
        return EvolutionChainChainEvolutionDetailsInnerLocation.attributeTypeMap;
    };
    EvolutionChainChainEvolutionDetailsInnerLocation.discriminator = undefined;
    EvolutionChainChainEvolutionDetailsInnerLocation.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        },
        {
            "name": "gameIndices",
            "baseName": "game_indices",
            "type": "Array<GenerationGameIndex>",
            "format": ""
        },
        {
            "name": "areas",
            "baseName": "areas",
            "type": "Array<NamedAPIResource>",
            "format": ""
        }
    ];
    return EvolutionChainChainEvolutionDetailsInnerLocation;
}());
exports.EvolutionChainChainEvolutionDetailsInnerLocation = EvolutionChainChainEvolutionDetailsInnerLocation;
//# sourceMappingURL=EvolutionChainChainEvolutionDetailsInnerLocation.js.map