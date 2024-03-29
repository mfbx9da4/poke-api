/**
 * poke-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 20220523
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AbilityEffectChange } from '../models/AbilityEffectChange';
import { ContestComboSets } from '../models/ContestComboSets';
import { Move } from '../models/Move';
import { MoveContestEffect } from '../models/MoveContestEffect';
import { MoveContestType } from '../models/MoveContestType';
import { MoveMetaData } from '../models/MoveMetaData';
import { MoveStatChange } from '../models/MoveStatChange';
import { Name } from '../models/Name';
import { PastMoveStatValues } from '../models/PastMoveStatValues';
import { VerboseEffect } from '../models/VerboseEffect';
import { HttpFile } from '../http/http';

export class EvolutionChainChainEvolutionDetailsInnerKnownMove {
    /**
    * The identifier for this move resource
    */
    'id': number;
    /**
    * The name for this move resource
    */
    'name': string;
    /**
    * The percent value of how likely this move is to be successful
    */
    'accuracy'?: number | null;
    /**
    * The percent value of the additional effects this move has occuring
    */
    'effectChance'?: number | null;
    /**
    * Power points. The number of times this move can be used
    */
    'pp': number;
    /**
    * A value of 0 means this move goes last in the turn, and 1 means it goes first
    */
    'priority': number;
    /**
    * The base power of this move with a value of 0 if it does not have a base power
    */
    'power'?: number | null;
    'contestCombos'?: ContestComboSets;
    'contestType'?: MoveContestType;
    'contestEffect'?: MoveContestEffect;
    'damageClass'?: MoveContestType;
    'effectEntries'?: Array<VerboseEffect>;
    'effectChanges'?: Array<AbilityEffectChange>;
    'generation': MoveContestType;
    'meta'?: MoveMetaData;
    'names'?: Array<Name>;
    'pastValues'?: Array<PastMoveStatValues>;
    'statChanges'?: Array<MoveStatChange>;
    'superContestEffect'?: MoveContestEffect;
    'target': MoveContestType;
    'type': MoveContestType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return EvolutionChainChainEvolutionDetailsInnerKnownMove.attributeTypeMap;
    }

    public constructor() {
    }
}

