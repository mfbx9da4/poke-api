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

import { Move } from "./Move";
import { HttpFile } from "../http/http";

export class ContestComboDetail {
  /**
   * A list of moves to use before this move.
   */
  "useBefore"?: Array<Move>;
  /**
   * A list of moves to use after this move.
   */
  "useAfter"?: Array<Move>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "useBefore",
      baseName: "use_before",
      type: "Array<Move>",
      format: "",
    },
    {
      name: "useAfter",
      baseName: "use_after",
      type: "Array<Move>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return ContestComboDetail.attributeTypeMap;
  }

  public constructor() {}
}