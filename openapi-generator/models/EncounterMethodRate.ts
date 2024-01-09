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

import { EncounterMethod } from "./EncounterMethod";
import { EncounterVersionDetails } from "./EncounterVersionDetails";
import { HttpFile } from "../http/http";

export class EncounterMethodRate {
  "encounterMethod"?: EncounterMethod;
  "versionDetails"?: Array<EncounterVersionDetails>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "encounterMethod",
      baseName: "encounter_method",
      type: "EncounterMethod",
      format: "",
    },
    {
      name: "versionDetails",
      baseName: "version_details",
      type: "Array<EncounterVersionDetails>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return EncounterMethodRate.attributeTypeMap;
  }

  public constructor() {}
}
