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

import { ContestComboDetail } from "./ContestComboDetail";
import { HttpFile } from "../http/http";

export class ContestComboSets {
  "normal"?: ContestComboDetail;
  "_super"?: ContestComboDetail;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "normal",
      baseName: "normal",
      type: "ContestComboDetail",
      format: "",
    },
    {
      name: "_super",
      baseName: "super",
      type: "ContestComboDetail",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return ContestComboSets.attributeTypeMap;
  }

  public constructor() {}
}