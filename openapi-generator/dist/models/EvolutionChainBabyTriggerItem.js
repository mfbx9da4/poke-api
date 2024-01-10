"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionChainBabyTriggerItem = void 0;
var EvolutionChainBabyTriggerItem = (function () {
    function EvolutionChainBabyTriggerItem() {
    }
    EvolutionChainBabyTriggerItem.getAttributeTypeMap = function () {
        return EvolutionChainBabyTriggerItem.attributeTypeMap;
    };
    EvolutionChainBabyTriggerItem.discriminator = undefined;
    EvolutionChainBabyTriggerItem.attributeTypeMap = [
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
    return EvolutionChainBabyTriggerItem;
}());
exports.EvolutionChainBabyTriggerItem = EvolutionChainBabyTriggerItem;
//# sourceMappingURL=EvolutionChainBabyTriggerItem.js.map