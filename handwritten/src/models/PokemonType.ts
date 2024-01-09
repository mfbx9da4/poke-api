import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const PokemonType = z.object({
  /* The order the Pokémon's types are listed in */
  slot: z.number(),
  /* The type the referenced Pokémon has */
  type: NamedAPIResource,
});
type PokemonType = z.infer<typeof PokemonType>;
