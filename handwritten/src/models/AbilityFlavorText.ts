import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const AbilityFlavorText = z.object({
  /* The localized name for an API resource in a specific language */
  flavor_text: z.string(),
  /* The language this name is in */
  language: NamedAPIResource,
  /* The game version this flavor text is extracted from */
  version_group: NamedAPIResource,
});
export type AbilityFlavorText = z.infer<typeof AbilityFlavorText>;
