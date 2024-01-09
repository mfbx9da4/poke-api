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

import { Nature } from "./Nature";
import { HttpFile } from "../http/http";

export class PokeathlonStatAffect {
  /**
   * The maximum amount of change to the referenced Pokéathlon stat.
   */
  "maxChange": number;
  "nature": Nature;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "maxChange",
      baseName: "max_change",
      type: "number",
      format: "",
    },
    {
      name: "nature",
      baseName: "nature",
      type: "Nature",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PokeathlonStatAffect.attributeTypeMap;
  }

  public constructor() {}
}
