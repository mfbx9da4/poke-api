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

import { MoveBattleStylePreference } from '../models/MoveBattleStylePreference';
import { NatureStatChange } from '../models/NatureStatChange';
import { HttpFile } from '../http/http';

export class Nature {
    'id': number;
    'name': string;
    'decreasedStat': string;
    'increasedStat': string;
    'hatesFlavor': string;
    'likesFlavor': string;
    'pokeathlonStatChanges'?: Array<NatureStatChange>;
    'moveBattleStylePreferences'?: Array<MoveBattleStylePreference>;

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
            "name": "decreasedStat",
            "baseName": "decreased_stat",
            "type": "string",
            "format": ""
        },
        {
            "name": "increasedStat",
            "baseName": "increased_stat",
            "type": "string",
            "format": ""
        },
        {
            "name": "hatesFlavor",
            "baseName": "hates_flavor",
            "type": "string",
            "format": ""
        },
        {
            "name": "likesFlavor",
            "baseName": "likes_flavor",
            "type": "string",
            "format": ""
        },
        {
            "name": "pokeathlonStatChanges",
            "baseName": "pokeathlon_stat_changes",
            "type": "Array<NatureStatChange>",
            "format": ""
        },
        {
            "name": "moveBattleStylePreferences",
            "baseName": "move_battle_style_preferences",
            "type": "Array<MoveBattleStylePreference>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Nature.attributeTypeMap;
    }

    public constructor() {
    }
}

