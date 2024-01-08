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

import { GenerationAbilitiesInner } from '../models/GenerationAbilitiesInner';
import { GenerationNamesInner } from '../models/GenerationNamesInner';
import { HttpFile } from '../http/http';

export class Generation {
    /**
    * The identifier for this generation resource
    */
    'id'?: number;
    /**
    * The name for this generation resource
    */
    'name'?: string;
    'abilities'?: Array<GenerationAbilitiesInner>;
    'names'?: Array<GenerationNamesInner>;

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
            "name": "abilities",
            "baseName": "abilities",
            "type": "Array<GenerationAbilitiesInner>",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<GenerationNamesInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Generation.attributeTypeMap;
    }

    public constructor() {
    }
}

