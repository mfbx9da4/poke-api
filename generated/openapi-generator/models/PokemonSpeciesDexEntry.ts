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

import { NamedAPIResource } from '../models/NamedAPIResource';
import { HttpFile } from '../http/http';

/**
* An entry of a Pokemon species seen in the Pokedex.
*/
export class PokemonSpeciesDexEntry {
    /**
    * The index number of the Pokedex entry.
    */
    'entryNumber'?: number;
    'pokedex'?: NamedAPIResource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "entryNumber",
            "baseName": "entry_number",
            "type": "number",
            "format": ""
        },
        {
            "name": "pokedex",
            "baseName": "pokedex",
            "type": "NamedAPIResource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PokemonSpeciesDexEntry.attributeTypeMap;
    }

    public constructor() {
    }
}

