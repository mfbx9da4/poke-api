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

import { Language } from "./Language";
import { HttpFile } from "../http/http";

export class Description {
  "description"?: string;
  "language"?: Language;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "description",
      baseName: "description",
      type: "string",
      format: "",
    },
    {
      name: "language",
      baseName: "language",
      type: "Language",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return Description.attributeTypeMap;
  }

  public constructor() {}
}
