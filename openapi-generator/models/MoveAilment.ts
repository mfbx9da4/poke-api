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

export class MoveAilment {
  "id": number;
  "name": string;
  "moves": Array<Move>;

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
      name: "moves",
      baseName: "moves",
      type: "Array<Move>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return MoveAilment.attributeTypeMap;
  }

  public constructor() {}
}