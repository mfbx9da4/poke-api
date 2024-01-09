import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";
import { Effect } from "./Effect";

export const AbilityEffectChange = z.object({
  /* The previous effect of this ability listed in different languages */
  effect_entries: z.array(Effect),
  /* The version group in which the previous effect of this ability originated */
  version_group: NamedAPIResource,
});
export type AbilityEffectChange = z.infer<typeof AbilityEffectChange>;
