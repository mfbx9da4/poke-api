import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const PokemonHeldItemVersion = z.object({
  /* The version in which the item is held */
  version: NamedAPIResource,
  /* How often the item is held */
  rarity: z.number(),
});
export type PokemonHeldItemVersion = z.infer<typeof PokemonHeldItemVersion>;
