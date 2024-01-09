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

import { PokemonForm } from "./PokemonForm";
import { HttpFile } from "../http/http";

export class PokemonFormList200Response {
  /**
   * The total number of pokemon forms.
   */
  "count"?: number;
  /**
   * URL to retrieve the next page of pokemon forms.
   */
  "next"?: string | null;
  /**
   * URL to retrieve the previous page of pokemon forms.
   */
  "previous"?: string | null;
  "results"?: Array<PokemonForm>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "count",
      baseName: "count",
      type: "number",
      format: "",
    },
    {
      name: "next",
      baseName: "next",
      type: "string",
      format: "",
    },
    {
      name: "previous",
      baseName: "previous",
      type: "string",
      format: "",
    },
    {
      name: "results",
      baseName: "results",
      type: "Array<PokemonForm>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PokemonFormList200Response.attributeTypeMap;
  }

  public constructor() {}
}
