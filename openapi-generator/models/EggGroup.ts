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

export class EggGroup {
    /**
    * The identifier for this egg group resource
    */
    'id': number;
    /**
    * The name for this egg group resource
    */
    'name': string;
    /**
    * The name of this egg group listed in different languages
    */
    'names': Array<Name>;
    /**
    * A list of all Pokemon species that are members of this egg group
    */
    'pokemonSpecies': Array<NamedAPIResource>;

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
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        },
        {
            "name": "pokemonSpecies",
            "baseName": "pokemon_species",
            "type": "Array<NamedAPIResource>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EggGroup.attributeTypeMap;
    }

    public constructor() {
    }
}

