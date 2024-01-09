import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";
import { NatureStatChange } from "./NatureStatChange";
import { MoveBattleStylePreference } from "./MoveBattleStylePreference";
import { NatureName } from "./NatureName";

export const Nature = z.object({
  /* The identifier for this resource */
  id: z.number(),
  /* The name for this resource */
  name: z.string(),
  /* The stat decreased by 10% in Pokémon with this nature */
  decreased_stat: NamedAPIResource.nullable(),
  /* The stat increased by 10% in Pokémon with this nature */
  increased_stat: NamedAPIResource.nullable(),
  /* The flavor hated by Pokémon with this nature */
  hates_flavor: NamedAPIResource.nullable(),
  /* The flavor liked by Pokémon with this nature */
  likes_flavor: NamedAPIResource.nullable(),
  /* A list of Pokéathlon stats this nature effects and how much it effects them */
  pokeathlon_stat_changes: z.array(NatureStatChange),
  /* A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
  move_battle_style_preferences: z.array(MoveBattleStylePreference),
  /* The name of this resource listed in different languages */
  names: z.array(NatureName),
});

export type Nature = z.infer<typeof Nature>;
