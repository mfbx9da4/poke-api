import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const Effect = z.object({
  /* The localized effect text for an API resource in a specific language */
  effect: z.string(),
  /* The language this effect is in */
  language: NamedAPIResource,
});
export type Effect = z.infer<typeof Effect>;
