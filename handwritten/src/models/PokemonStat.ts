import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const PokemonStat = z.object({
  /* The stat the Pokémon has */
  stat: NamedAPIResource,
  /* The effort points (EV) the Pokémon has in the stat */
  effort: z.number(),
  /* The base value of the stat */
  base_stat: z.number(),
});
export type PokemonStat = z.infer<typeof PokemonStat>;
