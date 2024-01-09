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

import { Generation } from "./Generation";
import { HttpFile } from "../http/http";

export class GenerationGameIndex {
  /**
   * The internal id of an API resource within game data.
   */
  "gameIndex"?: number;
  "generation"?: Generation;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "gameIndex",
      baseName: "game_index",
      type: "number",
      format: "int32",
    },
    {
      name: "generation",
      baseName: "generation",
      type: "Generation",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return GenerationGameIndex.attributeTypeMap;
  }

  public constructor() {}
}
