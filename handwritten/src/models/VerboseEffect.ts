import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const VerboseEffect = z.object({
  /* The localized effect text for an API resource in a specific language */
  effect: z.string(),
  /* The localized effect text in brief */
  short_effect: z.string(),
  /* The language this effect is in */
  language: NamedAPIResource,
});
export type VerboseEffect = z.infer<typeof VerboseEffect>;
