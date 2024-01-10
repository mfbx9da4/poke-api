"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum = exports.EvolutionChainChainEvolutionDetailsInner = void 0;
var EvolutionChainChainEvolutionDetailsInner = (function () {
    function EvolutionChainChainEvolutionDetailsInner() {
    }
    EvolutionChainChainEvolutionDetailsInner.getAttributeTypeMap = function () {
        return EvolutionChainChainEvolutionDetailsInner.attributeTypeMap;
    };
    EvolutionChainChainEvolutionDetailsInner.discriminator = undefined;
    EvolutionChainChainEvolutionDetailsInner.attributeTypeMap = [
        {
            "name": "item",
            "baseName": "item",
            "type": "EvolutionChainChainEvolutionDetailsInnerItem",
            "format": ""
        },
        {
            "name": "trigger",
            "baseName": "trigger",
            "type": "EvolutionTrigger",
            "format": ""
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "number",
            "format": ""
        },
        {
            "name": "heldItem",
            "baseName": "held_item",
            "type": "EvolutionChainChainEvolutionDetailsInnerItem",
            "format": ""
        },
        {
            "name": "knownMove",
            "baseName": "known_move",
            "type": "EvolutionChainChainEvolutionDetailsInnerKnownMove",
            "format": ""
        },
        {
            "name": "knownMoveType",
            "baseName": "known_move_type",
            "type": "EvolutionChainChainEvolutionDetailsInnerKnownMoveType",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "EvolutionChainChainEvolutionDetailsInnerLocation",
            "format": ""
        },
        {
            "name": "minLevel",
            "baseName": "min_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "minHappiness",
            "baseName": "min_happiness",
            "type": "number",
            "format": ""
        },
        {
            "name": "minBeauty",
            "baseName": "min_beauty",
            "type": "number",
            "format": ""
        },
        {
            "name": "minAffection",
            "baseName": "min_affection",
            "type": "number",
            "format": ""
        },
        {
            "name": "needsOverworldRain",
            "baseName": "needs_overworld_rain",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "partySpecies",
            "baseName": "party_species",
            "type": "EvolutionChainChainEvolutionDetailsInnerPartySpecies",
            "format": ""
        },
        {
            "name": "partyType",
            "baseName": "party_type",
            "type": "EvolutionChainChainEvolutionDetailsInnerKnownMoveType",
            "format": ""
        },
        {
            "name": "relativePhysicalStats",
            "baseName": "relative_physical_stats",
            "type": "number",
            "format": ""
        },
        {
            "name": "timeOfDay",
            "baseName": "time_of_day",
            "type": "EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum",
            "format": ""
        },
        {
            "name": "tradeSpecies",
            "baseName": "trade_species",
            "type": "EvolutionChainChainEvolutionDetailsInnerPartySpecies",
            "format": ""
        },
        {
            "name": "turnUpsideDown",
            "baseName": "turn_upside_down",
            "type": "boolean",
            "format": ""
        }
    ];
    return EvolutionChainChainEvolutionDetailsInner;
}());
exports.EvolutionChainChainEvolutionDetailsInner = EvolutionChainChainEvolutionDetailsInner;
var EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum;
(function (EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum) {
    EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum["Day"] = "day";
    EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum["Night"] = "night";
})(EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum = exports.EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum || (exports.EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum = {}));
//# sourceMappingURL=EvolutionChainChainEvolutionDetailsInner.js.map