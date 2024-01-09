import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const MoveBattleStylePreference = z.object({
  /* Chance of using the move, in percent, if HP is under one half */
  low_hp_preference: z.number(),
  /* Chance of using the move, in percent, if HP is over one half */
  high_hp_preference: z.number(),
  /* The move battle style */
  move_battle_style: NamedAPIResource,
});
export type MoveBattleStylePreference = z.infer<
  typeof MoveBattleStylePreference
>;
