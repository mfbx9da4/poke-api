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

export class APIResource {
    /**
    * The URL of the referenced resource.
    */
    'url'?: string;
    /**
    * The name of the referenced resource.
    */
    'name'?: string;
    /**
    * The ID of the referenced resource.
    */
    'id'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return APIResource.attributeTypeMap;
    }

    public constructor() {
    }
}

