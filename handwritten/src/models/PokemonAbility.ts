import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const PokemonAbility = z.object({
  /* Whether or not this is a hidden ability */
  is_hidden: z.boolean(),
  /* The slot this ability occupies in this Pokémon species */
  slot: z.number(),
  /* The ability the Pokémon may have */
  ability: NamedAPIResource,
});

export type PokemonAbility = z.infer<typeof PokemonAbility>;
