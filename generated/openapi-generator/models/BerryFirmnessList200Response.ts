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

import { BerryFirmness } from '../models/BerryFirmness';
import { HttpFile } from '../http/http';

export class BerryFirmnessList200Response {
    /**
    * The total number of berry firmnesses available from this API.
    */
    'count'?: number;
    /**
    * The URL for the next page of results, or null if there are no more results.
    */
    'next'?: string | null;
    /**
    * The URL for the previous page of results, or null if this is the first page.
    */
    'previous'?: string | null;
    'results'?: Array<BerryFirmness>;

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
            "type": "Array<BerryFirmness>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BerryFirmnessList200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

