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

import { BerryFlavor } from "./BerryFlavor";
import { HttpFile } from "../http/http";

export class BerryFlavorMap {
  /**
   * How powerful the referenced flavor is for this berry
   */
  "potency": number;
  "flavor": BerryFlavor;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "potency",
      baseName: "potency",
      type: "number",
      format: "",
    },
    {
      name: "flavor",
      baseName: "flavor",
      type: "BerryFlavor",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return BerryFlavorMap.attributeTypeMap;
  }

  public constructor() {}
}