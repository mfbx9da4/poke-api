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

import { Description } from "./Description";
import { HttpFile } from "../http/http";

/**
 * Targets moves can be directed at during battle. Targets can be Pokémon, adjacent positions, all opponents, etc.
 */
export class MoveTarget {
  /**
   * The identifier for this move target resource
   */
  "id": number;
  /**
   * The name for this move target resource
   */
  "name": string;
  /**
   * The description of this move target listed in different languages
   */
  "descriptions": Array<Description>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "id",
      baseName: "id",
      type: "number",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "descriptions",
      baseName: "descriptions",
      type: "Array<Description>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return MoveTarget.attributeTypeMap;
  }

  public constructor() {}
}
