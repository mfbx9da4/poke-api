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

import { Ability } from "./Ability";
import { HttpFile } from "../http/http";

export class PokemonAbility {
  "isHidden"?: boolean;
  "slot"?: number;
  "ability"?: Ability;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "isHidden",
      baseName: "is_hidden",
      type: "boolean",
      format: "",
    },
    {
      name: "slot",
      baseName: "slot",
      type: "number",
      format: "",
    },
    {
      name: "ability",
      baseName: "ability",
      type: "Ability",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PokemonAbility.attributeTypeMap;
  }

  public constructor() {}
}