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

export class FlavorText {
    'flavorText'?: string;
    'language'?: NamedAPIResource;
    'version'?: NamedAPIResource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "flavorText",
            "baseName": "flavor_text",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "NamedAPIResource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlavorText.attributeTypeMap;
    }

    public constructor() {
    }
}

