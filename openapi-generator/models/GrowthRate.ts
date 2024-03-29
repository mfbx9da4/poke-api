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

import { Description } from '../models/Description';
import { HttpFile } from '../http/http';

export class GrowthRate {
    /**
    * The identifier for this growth rate resource
    */
    'id'?: number;
    /**
    * The name for this growth rate resource
    */
    'name'?: string;
    /**
    * The formula used to calculate the rate at which the Pokémon species gains level
    */
    'formula'?: string;
    /**
    * The description of this growth rate listed in different languages
    */
    'descriptions'?: Array<Description>;

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
            "name": "formula",
            "baseName": "formula",
            "type": "string",
            "format": ""
        },
        {
            "name": "descriptions",
            "baseName": "descriptions",
            "type": "Array<Description>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GrowthRate.attributeTypeMap;
    }

    public constructor() {
    }
}

