import * as z from "zod";
import { Name } from "./Name";
import { VerboseEffect } from "./VerboseEffect";
import { AbilityEffectChange } from "./AbilityEffectChange";
import { AbilityFlavorText } from "./AbilityFlavorText";

export const Ability = z.object({
  /* The identifier for this resource */
  id: z.number(),
  /* The name for this resource */
  name: z.string(),
  /* Whether or not this is a hidden ability */
  is_hidden: z.boolean(),
  /* The slot this ability occupies in this Pokémon species */
  slot: z.number(),
  /* The name of this ability listed in different languages */
  names: z.array(Name),
  /* The effect of this ability listed in different languages */
  effect_entries: z.array(VerboseEffect),
  /* The list of previous effects this ability has had across version groups */
  effect_changes: z.array(AbilityEffectChange),
  /* The flavor text of this ability listed in different languages */
  flavor_text_entries: z.array(AbilityFlavorText),
});
export type Ability = z.infer<typeof Ability>;
