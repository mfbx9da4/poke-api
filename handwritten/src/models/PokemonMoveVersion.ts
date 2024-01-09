import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const PokemonMoveVersion = z.object({
  /* The method by which the move is learned */
  move_learn_method: NamedAPIResource,
  /* The version group in which the move is learned */
  version_group: NamedAPIResource,
  /* The minimum level to learn the move */
  level_learned_at: z.number(),
});
export type PokemonMoveVersion = z.infer<typeof PokemonMoveVersion>;
