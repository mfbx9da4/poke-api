"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionChainChainEvolutionDetailsInnerKnownMoveType = void 0;
var EvolutionChainChainEvolutionDetailsInnerKnownMoveType = (function () {
    function EvolutionChainChainEvolutionDetailsInnerKnownMoveType() {
    }
    EvolutionChainChainEvolutionDetailsInnerKnownMoveType.getAttributeTypeMap = function () {
        return EvolutionChainChainEvolutionDetailsInnerKnownMoveType.attributeTypeMap;
    };
    EvolutionChainChainEvolutionDetailsInnerKnownMoveType.discriminator = undefined;
    EvolutionChainChainEvolutionDetailsInnerKnownMoveType.attributeTypeMap = [
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
            "name": "damageRelations",
            "baseName": "damage_relations",
            "type": "TypeDamageRelations",
            "format": ""
        },
        {
            "name": "gameIndices",
            "baseName": "game_indices",
            "type": "Array<TypeGameIndicesInner>",
            "format": ""
        },
        {
            "name": "generation",
            "baseName": "generation",
            "type": "TypeGeneration",
            "format": ""
        },
        {
            "name": "moveDamageClass",
            "baseName": "move_damage_class",
            "type": "TypeMoveDamageClass",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<AbilityNamesInner>",
            "format": ""
        },
        {
            "name": "pokemon",
            "baseName": "pokemon",
            "type": "Array<TypePokemonInner>",
            "format": ""
        }
    ];
    return EvolutionChainChainEvolutionDetailsInnerKnownMoveType;
}());
exports.EvolutionChainChainEvolutionDetailsInnerKnownMoveType = EvolutionChainChainEvolutionDetailsInnerKnownMoveType;
//# sourceMappingURL=EvolutionChainChainEvolutionDetailsInnerKnownMoveType.js.map