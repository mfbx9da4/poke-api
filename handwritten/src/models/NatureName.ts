import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const NatureName = z.object({
  /* The localized name for an API resource in a specific language */
  name: z.string(),
  /* The language this name is in */
  language: NamedAPIResource,
});
export type NatureName = z.infer<typeof NatureName>;
