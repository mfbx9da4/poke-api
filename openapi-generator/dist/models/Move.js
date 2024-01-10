"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
var Move = (function () {
    function Move() {
    }
    Move.getAttributeTypeMap = function () {
        return Move.attributeTypeMap;
    };
    Move.discriminator = undefined;
    Move.attributeTypeMap = [
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
            "name": "accuracy",
            "baseName": "accuracy",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "effectChance",
            "baseName": "effect_chance",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pp",
            "baseName": "pp",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "power",
            "baseName": "power",
            "type": "number",
            "format": "int32"
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
            "type": "MoveContestType",
            "format": ""
        },
        {
            "name": "contestEffect",
            "baseName": "contest_effect",
            "type": "MoveContestEffect",
            "format": ""
        },
        {
            "name": "damageClass",
            "baseName": "damage_class",
            "type": "MoveContestType",
            "format": ""
        },
        {
            "name": "effectEntries",
            "baseName": "effect_entries",
            "type": "Array<VerboseEffect>",
            "format": ""
        },
        {
            "name": "effectChanges",
            "baseName": "effect_changes",
            "type": "Array<AbilityEffectChange>",
            "format": ""
        },
        {
            "name": "generation",
            "baseName": "generation",
            "type": "MoveContestType",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "MoveMetaData",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        },
        {
            "name": "pastValues",
            "baseName": "past_values",
            "type": "Array<PastMoveStatValues>",
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
            "type": "MoveContestEffect",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "MoveContestType",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "MoveContestType",
            "format": ""
        }
    ];
    return Move;
}());
exports.Move = Move;
//# sourceMappingURL=Move.js.map