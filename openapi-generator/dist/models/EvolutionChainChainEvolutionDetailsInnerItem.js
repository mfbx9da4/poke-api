"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionChainChainEvolutionDetailsInnerItem = void 0;
var EvolutionChainChainEvolutionDetailsInnerItem = (function () {
    function EvolutionChainChainEvolutionDetailsInnerItem() {
    }
    EvolutionChainChainEvolutionDetailsInnerItem.getAttributeTypeMap = function () {
        return EvolutionChainChainEvolutionDetailsInnerItem.attributeTypeMap;
    };
    EvolutionChainChainEvolutionDetailsInnerItem.discriminator = undefined;
    EvolutionChainChainEvolutionDetailsInnerItem.attributeTypeMap = [
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
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "flingPower",
            "baseName": "fling_power",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "effectEntries",
            "baseName": "effect_entries",
            "type": "Array<VerboseEffect>",
            "format": ""
        },
        {
            "name": "flavorTextEntries",
            "baseName": "flavor_text_entries",
            "type": "Array<FlavorText>",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<ItemAttribute>",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "ItemCategory",
            "format": ""
        },
        {
            "name": "flingEffect",
            "baseName": "fling_effect",
            "type": "ItemFlingEffect",
            "format": ""
        }
    ];
    return EvolutionChainChainEvolutionDetailsInnerItem;
}());
exports.EvolutionChainChainEvolutionDetailsInnerItem = EvolutionChainChainEvolutionDetailsInnerItem;
//# sourceMappingURL=EvolutionChainChainEvolutionDetailsInnerItem.js.map