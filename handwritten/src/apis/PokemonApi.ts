import { JsonHttpResponse, http } from "../http";
import { PromiseResponse, Response } from "../models/SuccessResponse";
import { Pokemon } from "../models/Pokemon";
import { _handleResponse } from "./_handleResponse";

export const PokemonApi = {
  /** Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.
   */
  get: async (id: number): PromiseResponse<Pokemon> => {
    const response = await http.get(`pokemon/${id}`);
    return _handlePokemonResponse(response);
  },
  /** Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.
   */
  getByName: async (name: string): PromiseResponse<Pokemon> => {
    const response = await http.get(`pokemon/${name}`);
    return _handlePokemonResponse(response);
  },
};

function _handlePokemonResponse(response: JsonHttpResponse): Response<Pokemon> {
  return _handleResponse(Pokemon, response);
}
