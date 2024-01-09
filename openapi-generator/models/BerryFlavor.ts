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

import { BerryFlavorMap } from "./BerryFlavorMap";
import { HttpFile } from "../http/http";

export class BerryFlavor {
  /**
   * The identifier for this berry flavor resource
   */
  "id": number;
  /**
   * The name for this berry flavor resource
   */
  "name": string;
  /**
   * A list of the berries with this flavor
   */
  "berries"?: Array<BerryFlavorMap>;

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
      name: "berries",
      baseName: "berries",
      type: "Array<BerryFlavorMap>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return BerryFlavor.attributeTypeMap;
  }

  public constructor() {}
}
