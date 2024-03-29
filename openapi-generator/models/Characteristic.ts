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

export class Characteristic {
    /**
    * The identifier for this characteristic resource
    */
    'id': number;
    /**
    * The remainder of the highest stat/IV divided by 5
    */
    'geneModulo': number;
    /**
    * The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5
    */
    'possibleValues': Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "geneModulo",
            "baseName": "gene_modulo",
            "type": "number",
            "format": ""
        },
        {
            "name": "possibleValues",
            "baseName": "possible_values",
            "type": "Array<number>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Characteristic.attributeTypeMap;
    }

    public constructor() {
    }
}

