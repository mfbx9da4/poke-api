import { StatsApi } from "./apis/StatsApi";
import { NaturesApi } from "./apis/NaturesApi";
import { PokemonApi } from "./apis/PokemonApi";
import { ErrorCode } from "./models/SuccessResponse";

export const PokeSDK = {
  pokemon: PokemonApi,
  natures: NaturesApi,
  stats: StatsApi,
  errorCode: ErrorCode,
};
