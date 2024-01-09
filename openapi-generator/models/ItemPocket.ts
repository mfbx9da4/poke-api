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

import { ItemCategory } from "./ItemCategory";
import { HttpFile } from "../http/http";

export class ItemPocket {
  "id"?: number;
  "name"?: string;
  "categories"?: Array<ItemCategory>;

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
      format: "int32",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "categories",
      baseName: "categories",
      type: "Array<ItemCategory>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return ItemPocket.attributeTypeMap;
  }

  public constructor() {}
}
