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

import { Item } from "./Item";
import { PokemonHeldItemVersionDetailsInner } from "./PokemonHeldItemVersionDetailsInner";
import { HttpFile } from "../http/http";

export class PokemonHeldItem {
  "item"?: Item;
  "versionDetails"?: Array<PokemonHeldItemVersionDetailsInner>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "item",
      baseName: "item",
      type: "Item",
      format: "",
    },
    {
      name: "versionDetails",
      baseName: "version_details",
      type: "Array<PokemonHeldItemVersionDetailsInner>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PokemonHeldItem.attributeTypeMap;
  }

  public constructor() {}
}
