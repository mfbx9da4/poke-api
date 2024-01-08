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

import { NatureStatAffect } from '../models/NatureStatAffect';
import { HttpFile } from '../http/http';

export class NatureStatAffectSets {
    'increase': Array<NatureStatAffect>;
    'decrease': Array<NatureStatAffect>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "increase",
            "baseName": "increase",
            "type": "Array<NatureStatAffect>",
            "format": ""
        },
        {
            "name": "decrease",
            "baseName": "decrease",
            "type": "Array<NatureStatAffect>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NatureStatAffectSets.attributeTypeMap;
    }

    public constructor() {
    }
}

