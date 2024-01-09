import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";
import { PokemonMoveVersion } from "./PokemonMoveVersion";

export const PokemonMove = z.object({
  /* The move the Pokémon can learn */
  move: NamedAPIResource,
  /* The details of the version in which the Pokémon can learn the move */
  version_group_details: z.array(PokemonMoveVersion),
});
export type PokemonMove = z.infer<typeof PokemonMove>;
