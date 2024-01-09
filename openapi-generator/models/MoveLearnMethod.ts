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
import { Name } from "./Name";
import { HttpFile } from "../http/http";

/**
 * Methods by which Pokémon can learn moves.
 */
export class MoveLearnMethod {
  /**
   * The identifier for this move learn method resource.
   */
  "id": number;
  /**
   * The name for this move learn method resource.
   */
  "name": string;
  /**
   * The description of this move learn method listed in different languages.
   */
  "descriptions"?: Array<Description>;
  /**
   * The name of this move learn method listed in different languages.
   */
  "names"?: Array<Name>;

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
    {
      name: "names",
      baseName: "names",
      type: "Array<Name>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return MoveLearnMethod.attributeTypeMap;
  }

  public constructor() {}
}
