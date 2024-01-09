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

import { Pokemon } from "./Pokemon";
import { HttpFile } from "../http/http";

export class PokemonSpeciesVariety {
  /**
   * Whether this is the default \"natural\" variety of this species. Note that \"default\" is subjective and that it may not match the Pokémon games\' official status.
   */
  "isDefault"?: boolean;
  "pokemon"?: Pokemon;
  /**
   * The name of this Pokémon species variety
   */
  "name"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "isDefault",
      baseName: "is_default",
      type: "boolean",
      format: "",
    },
    {
      name: "pokemon",
      baseName: "pokemon",
      type: "Pokemon",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PokemonSpeciesVariety.attributeTypeMap;
  }

  public constructor() {}
}