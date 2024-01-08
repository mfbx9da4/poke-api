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

import { Encounter } from '../models/Encounter';
import { NamedAPIResource } from '../models/NamedAPIResource';
import { HttpFile } from '../http/http';

/**
* Version details of an encounter.
*/
export class EncounterVersionDetails {
    'version'?: NamedAPIResource;
    /**
    * The total percentage of all encounter potential.
    */
    'maxChance'?: number;
    /**
    * A list of encounters and their specifics.
    */
    'encounterDetails'?: Array<Encounter>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "version",
            "baseName": "version",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "maxChance",
            "baseName": "max_chance",
            "type": "number",
            "format": ""
        },
        {
            "name": "encounterDetails",
            "baseName": "encounter_details",
            "type": "Array<Encounter>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EncounterVersionDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

