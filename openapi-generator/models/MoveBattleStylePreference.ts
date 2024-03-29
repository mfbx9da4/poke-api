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

import { NamedAPIResource } from '../models/NamedAPIResource';
import { HttpFile } from '../http/http';

export class MoveBattleStylePreference {
    /**
    * Chance of using the move, in percent, if HP is under one half of maximum HP.
    */
    'lowHpPreference': number;
    /**
    * Chance of using the move, in percent, if HP is over one half of maximum HP.
    */
    'highHpPreference': number;
    'moveBattleStyle': NamedAPIResource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lowHpPreference",
            "baseName": "low_hp_preference",
            "type": "number",
            "format": ""
        },
        {
            "name": "highHpPreference",
            "baseName": "high_hp_preference",
            "type": "number",
            "format": ""
        },
        {
            "name": "moveBattleStyle",
            "baseName": "move_battle_style",
            "type": "NamedAPIResource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MoveBattleStylePreference.attributeTypeMap;
    }

    public constructor() {
    }
}

