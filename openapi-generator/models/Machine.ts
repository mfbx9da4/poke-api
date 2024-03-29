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

export class Machine {
    'id'?: number;
    'item'?: NamedAPIResource;
    'move'?: NamedAPIResource;
    'versionGroup'?: NamedAPIResource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "move",
            "baseName": "move",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "versionGroup",
            "baseName": "version_group",
            "type": "NamedAPIResource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Machine.attributeTypeMap;
    }

    public constructor() {
    }
}

