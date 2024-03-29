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

import { Name } from '../models/Name';
import { NamedAPIResource } from '../models/NamedAPIResource';
import { HttpFile } from '../http/http';

export class EncounterCondition {
    /**
    * The identifier for this encounter condition resource
    */
    'id': number;
    /**
    * The name for this encounter condition resource
    */
    'name': string;
    /**
    * A list of values that are used with this encounter condition
    */
    'values': Array<NamedAPIResource>;
    /**
    * The name of this encounter condition listed in different languages
    */
    'names': Array<Name>;

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
            "name": "values",
            "baseName": "values",
            "type": "Array<NamedAPIResource>",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EncounterCondition.attributeTypeMap;
    }

    public constructor() {
    }
}

