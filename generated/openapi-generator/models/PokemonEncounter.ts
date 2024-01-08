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

import { EncounterVersionDetails } from '../models/EncounterVersionDetails';
import { NamedAPIResource } from '../models/NamedAPIResource';
import { HttpFile } from '../http/http';

/**
* Encounters Pokemon that can be encountered in the game and the version groups in which they can be encountered.
*/
export class PokemonEncounter {
    'pokemon'?: NamedAPIResource;
    'versionDetails'?: Array<EncounterVersionDetails>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pokemon",
            "baseName": "pokemon",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "versionDetails",
            "baseName": "version_details",
            "type": "Array<EncounterVersionDetails>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PokemonEncounter.attributeTypeMap;
    }

    public constructor() {
    }
}

