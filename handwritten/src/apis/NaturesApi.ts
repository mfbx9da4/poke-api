import { AxiosResponse } from "axios";
import { http } from "../http";
import { PromiseResponse, Nature, Response } from "../models";
import { _handleResponse } from "./_handleResponse";

export const NaturesApi = {
  /** Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail. */
  get: async (id: number): PromiseResponse<Nature> => {
    const response = await http.get(`nature/${id}`);
    return _handleNatureResponse(response);
  },
  /** Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail. */
  getByName: async (name: string): PromiseResponse<Nature> => {
    const response = await http.get(`nature/${name}`);
    return _handleNatureResponse(response);
  },
};

function _handleNatureResponse(response: AxiosResponse): Response<Nature> {
  return _handleResponse(Nature, response);
}
