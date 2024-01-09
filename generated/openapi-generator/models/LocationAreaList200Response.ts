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

import { LocationArea } from '../models/LocationArea';
import { HttpFile } from '../http/http';

export class LocationAreaList200Response {
    /**
    * The total number of location areas.
    */
    'count'?: number;
    /**
    * URL to retrieve the next page of location areas.
    */
    'next'?: string | null;
    /**
    * URL to retrieve the previous page of location areas.
    */
    'previous'?: string | null;
    'results'?: Array<LocationArea>;

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
            "type": "Array<LocationArea>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LocationAreaList200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

