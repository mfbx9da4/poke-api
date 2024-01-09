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

import { MoveStatAffect } from "./MoveStatAffect";
import { HttpFile } from "../http/http";

export class MoveStatAffectSets {
  "increase": Array<MoveStatAffect>;
  "decrease": Array<MoveStatAffect>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "increase",
      baseName: "increase",
      type: "Array<MoveStatAffect>",
      format: "",
    },
    {
      name: "decrease",
      baseName: "decrease",
      type: "Array<MoveStatAffect>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return MoveStatAffectSets.attributeTypeMap;
  }

  public constructor() {}
}
