/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 20220523
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PokemonColor } from '../models/PokemonColor';
import { HttpFile } from '../http/http';

export class PokemonColorList200Response {
    /**
    * The total number of pokemon colors.
    */
    'count'?: number;
    /**
    * URL to retrieve the next page of pokemon colors.
    */
    'next'?: string | null;
    /**
    * URL to retrieve the previous page of pokemon colors.
    */
    'previous'?: string | null;
    'results'?: Array<PokemonColor>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PokemonColor>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PokemonColorList200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

