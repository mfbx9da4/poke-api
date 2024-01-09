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

import { NamedAPIResource } from "./NamedAPIResource";
import { HttpFile } from "../http/http";

/**
 * Areas where the Pokémon species can be encountered in pal park.
 */
export class PalParkEncounterArea {
  /**
   * The base score given to the player when the referenced Pokemon is caught during a pal park run.
   */
  "baseScore"?: number;
  /**
   * The base rate for encountering the referenced Pokemon in this pal park area.
   */
  "rate"?: number;
  "area"?: NamedAPIResource;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "baseScore",
      baseName: "base_score",
      type: "number",
      format: "",
    },
    {
      name: "rate",
      baseName: "rate",
      type: "number",
      format: "",
    },
    {
      name: "area",
      baseName: "area",
      type: "NamedAPIResource",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PalParkEncounterArea.attributeTypeMap;
  }

  public constructor() {}
}
