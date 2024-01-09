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

import { AbilityNamesInner } from '../models/AbilityNamesInner';
import { Type } from '../models/Type';
import { TypeDamageRelations } from '../models/TypeDamageRelations';
import { TypeGameIndicesInner } from '../models/TypeGameIndicesInner';
import { TypeGeneration } from '../models/TypeGeneration';
import { TypeMoveDamageClass } from '../models/TypeMoveDamageClass';
import { TypePokemonInner } from '../models/TypePokemonInner';
import { HttpFile } from '../http/http';

export class EvolutionChainChainEvolutionDetailsInnerKnownMoveType {
    /**
    * The identifier for this type resource.
    */
    'id'?: number;
    /**
    * The name for this type resource.
    */
    'name'?: string;
    'damageRelations'?: TypeDamageRelations;
    'gameIndices'?: Array<TypeGameIndicesInner>;
    'generation'?: TypeGeneration;
    'moveDamageClass'?: TypeMoveDamageClass;
    'names'?: Array<AbilityNamesInner>;
    'pokemon'?: Array<TypePokemonInner>;

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
        }    ];

    static getAttributeTypeMap() {
        return EvolutionChainChainEvolutionDetailsInnerKnownMoveType.attributeTypeMap;
    }

    public constructor() {
    }
}

