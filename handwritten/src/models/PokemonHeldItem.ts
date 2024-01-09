import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";
import { PokemonHeldItemVersion } from "./PokemonHeldItemVersion";

export const PokemonHeldItem = z.object({
  /* The item the referenced Pokémon holds */
  item: NamedAPIResource,
  /* The details of the different versions in which the item is held */
  version_details: z.array(PokemonHeldItemVersion),
});
export type PokemonHeldItem = z.infer<typeof PokemonHeldItem>;
