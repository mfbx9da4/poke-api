import { JsonHttpResponse, http } from "../http";
import { PromiseResponse, Response } from "../models/Response";
import { Stat } from "../models/Stat";
import { _handleResponse } from "./_handleResponse";

export const StatsApi = {
  /** Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. See Bulbapedia for greater detail. */
  get: async (id: number): PromiseResponse<Stat> => {
    const response = await http.get(`stat/${id}`);
    return _handleStatResponse(response);
  },
  /** Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. See Bulbapedia for greater detail. */
  getByName: async (name: string): PromiseResponse<Stat> => {
    const response = await http.get(`stat/${name}`);
    return _handleStatResponse(response);
  },
};

function _handleStatResponse(response: JsonHttpResponse): Response<Stat> {
  return _handleResponse(Stat, response);
}
