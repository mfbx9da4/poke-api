"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effect = void 0;
var Effect = (function () {
    function Effect() {
    }
    Effect.getAttributeTypeMap = function () {
        return Effect.attributeTypeMap;
    };
    Effect.discriminator = undefined;
    Effect.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "effectEntries",
            "baseName": "effect_entries",
            "type": "Array<EffectEffect>",
            "format": ""
        },
        {
            "name": "pokemonFlavorTextEntries",
            "baseName": "pokemon_flavor_text_entries",
            "type": "Array<EffectEffect>",
            "format": ""
        },
        {
            "name": "targetSpecies",
            "baseName": "target_species",
            "type": "PokemonSpecies",
            "format": ""
        },
        {
            "name": "effectChanges",
            "baseName": "effect_changes",
            "type": "Array<AbilityEffectChange>",
            "format": ""
        },
        {
            "name": "flavorTextEntries",
            "baseName": "flavor_text_entries",
            "type": "Array<FlavorText>",
            "format": ""
        },
        {
            "name": "generation",
            "baseName": "generation",
            "type": "Generation",
            "format": ""
        },
        {
            "name": "machines",
            "baseName": "machines",
            "type": "Array<MachineVersionDetail>",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "MoveMetaData",
            "format": ""
        },
        {
            "name": "shortEffect",
            "baseName": "short_effect",
            "type": "string",
            "format": ""
        },
        {
            "name": "effectChance",
            "baseName": "effect_chance",
            "type": "number",
            "format": ""
        },
        {
            "name": "statChanges",
            "baseName": "stat_changes",
            "type": "Array<MoveStatChange>",
            "format": ""
        },
        {
            "name": "superContestEffect",
            "baseName": "super_contest_effect",
            "type": "SuperContestEffect",
            "format": ""
        },
        {
            "name": "contestCombos",
            "baseName": "contest_combos",
            "type": "ContestComboSets",
            "format": ""
        },
        {
            "name": "contestType",
            "baseName": "contest_type",
            "type": "ContestType",
            "format": ""
        }
    ];
    return Effect;
}());
exports.Effect = Effect;
//# sourceMappingURL=Effect.js.map