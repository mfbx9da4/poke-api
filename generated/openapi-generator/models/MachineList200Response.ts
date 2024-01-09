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

import { Machine } from '../models/Machine';
import { HttpFile } from '../http/http';

export class MachineList200Response {
    /**
    * The total number of machines.
    */
    'count'?: number;
    /**
    * URL to retrieve the next page of machines.
    */
    'next'?: string | null;
    /**
    * URL to retrieve the previous page of machines.
    */
    'previous'?: string | null;
    'results'?: Array<Machine>;

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
            "type": "Array<Machine>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MachineList200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

