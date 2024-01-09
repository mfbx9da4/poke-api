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

import { EvolutionChainChainEvolutionDetailsInner } from "./EvolutionChainChainEvolutionDetailsInner";
import { PokemonSpecies } from "./PokemonSpecies";
import { HttpFile } from "../http/http";

export class EvolutionChainChain {
  /**
   * Whether or not this is a baby Pokémon
   */
  "isBaby"?: boolean;
  "species"?: PokemonSpecies;
  /**
   * The chain of Pokémon species that forms part of this evolution chain
   */
  "evolutionDetails"?: Array<EvolutionChainChainEvolutionDetailsInner> | null;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "isBaby",
      baseName: "is_baby",
      type: "boolean",
      format: "",
    },
    {
      name: "species",
      baseName: "species",
      type: "PokemonSpecies",
      format: "",
    },
    {
      name: "evolutionDetails",
      baseName: "evolution_details",
      type: "Array<EvolutionChainChainEvolutionDetailsInner>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return EvolutionChainChain.attributeTypeMap;
  }

  public constructor() {}
}
