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

export class ItemAttribute {
  /**
   * The identifier for this item attribute resource
   */
  "id"?: number;
  /**
   * The name for this item attribute resource
   */
  "name"?: string;
  /**
   * A list of items that have this attribute
   */
  "items"?: Array<NamedAPIResource>;

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
      name: "items",
      baseName: "items",
      type: "Array<NamedAPIResource>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return ItemAttribute.attributeTypeMap;
  }

  public constructor() {}
}
