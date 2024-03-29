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

import { ContestEffect } from '../models/ContestEffect';
import { HttpFile } from '../http/http';

export class ContestEffectList200Response {
    /**
    * The total number of contest effects
    */
    'count'?: number;
    /**
    * The URL to get the next page of contest effects (if it exists)
    */
    'next'?: string | null;
    /**
    * The URL to get the previous page of contest effects (if it exists)
    */
    'previous'?: string | null;
    'results'?: Array<ContestEffect>;

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
            "type": "Array<ContestEffect>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContestEffectList200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

