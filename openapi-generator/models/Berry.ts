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

import { BerryFirmness } from "./BerryFirmness";
import { BerryFlavorMap } from "./BerryFlavorMap";
import { HttpFile } from "../http/http";

export class Berry {
  /**
   * The identifier for this berry resource
   */
  "id": number;
  /**
   * The name for this berry resource
   */
  "name": string;
  /**
   * Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.
   */
  "growthTime": number;
  /**
   * The maximum number of these berries that can grow on one tree in Generation IV
   */
  "maxHarvest": number;
  /**
   * The power of the move \"Natural Gift\" when used with this Berry
   */
  "naturalGiftPower": number;
  /**
   * The size of this Berry, in millimeters
   */
  "size": number;
  /**
   * The smoothness of this Berry, used in making Pokéblocks or Poffins
   */
  "smoothness": number;
  /**
   * The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly.
   */
  "soilDryness": number;
  "firmness": BerryFirmness;
  /**
   * A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry.
   */
  "flavors": Array<BerryFlavorMap>;

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
      name: "growthTime",
      baseName: "growth_time",
      type: "number",
      format: "",
    },
    {
      name: "maxHarvest",
      baseName: "max_harvest",
      type: "number",
      format: "",
    },
    {
      name: "naturalGiftPower",
      baseName: "natural_gift_power",
      type: "number",
      format: "",
    },
    {
      name: "size",
      baseName: "size",
      type: "number",
      format: "",
    },
    {
      name: "smoothness",
      baseName: "smoothness",
      type: "number",
      format: "",
    },
    {
      name: "soilDryness",
      baseName: "soil_dryness",
      type: "number",
      format: "",
    },
    {
      name: "firmness",
      baseName: "firmness",
      type: "BerryFirmness",
      format: "",
    },
    {
      name: "flavors",
      baseName: "flavors",
      type: "Array<BerryFlavorMap>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return Berry.attributeTypeMap;
  }

  public constructor() {}
}
