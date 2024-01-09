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
import { ContestType } from '../models/ContestType';
import { EffectEffect } from '../models/EffectEffect';
import { FlavorText } from '../models/FlavorText';
import { Generation } from '../models/Generation';
import { MachineVersionDetail } from '../models/MachineVersionDetail';
import { MoveMetaData } from '../models/MoveMetaData';
import { MoveStatChange } from '../models/MoveStatChange';
import { PokemonSpecies } from '../models/PokemonSpecies';
import { SuperContestEffect } from '../models/SuperContestEffect';
import { HttpFile } from '../http/http';

/**
* An effect that occurs in a game, e.g. causing a Pokémon to fall asleep.
*/
export class Effect {
    /**
    * The identifier for this effect resource
    */
    'id'?: number;
    /**
    * The name for this effect resource
    */
    'name'?: string;
    /**
    * The list of effect text entries
    */
    'effectEntries'?: Array<EffectEffect>;
    /**
    * The flavor text entries that describe this effect
    */
    'pokemonFlavorTextEntries'?: Array<EffectEffect>;
    'targetSpecies'?: PokemonSpecies;
    /**
    * The list of effects that are changed by this ability
    */
    'effectChanges'?: Array<AbilityEffectChange>;
    /**
    * The flavor text entries that describe this effect
    */
    'flavorTextEntries'?: Array<FlavorText>;
    'generation'?: Generation;
    /**
    * The machines that teach this move
    */
    'machines'?: Array<MachineVersionDetail>;
    'meta'?: MoveMetaData;
    /**
    * The short description of this effect listed in different languages
    */
    'shortEffect'?: string;
    /**
    * The chance of this move having an additional effect listed in percentage
    */
    'effectChance'?: number;
    /**
    * The list of stat changes that are caused by this effect
    */
    'statChanges'?: Array<MoveStatChange>;
    'superContestEffect'?: SuperContestEffect;
    'contestCombos'?: ContestComboSets;
    'contestType'?: ContestType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return Effect.attributeTypeMap;
    }

    public constructor() {
    }
}

