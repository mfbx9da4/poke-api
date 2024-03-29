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

import { GenderPokemonSpeciesDetailsInner } from '../models/GenderPokemonSpeciesDetailsInner';
import { HttpFile } from '../http/http';

export class Gender {
    /**
    * The identifier for this gender resource
    */
    'id'?: number;
    /**
    * The name for this gender resource
    */
    'name'?: string;
    'pokemonSpeciesDetails'?: Array<GenderPokemonSpeciesDetailsInner>;

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
            "name": "pokemonSpeciesDetails",
            "baseName": "pokemon_species_details",
            "type": "Array<GenderPokemonSpeciesDetailsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Gender.attributeTypeMap;
    }

    public constructor() {
    }
}

