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

import { HttpFile } from '../http/http';

export class GenderPokemonSpeciesDetailsInner {
    /**
    * The chance of this Pokémon being female, in eighths; or -1 for genderless
    */
    'rate'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GenderPokemonSpeciesDetailsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

