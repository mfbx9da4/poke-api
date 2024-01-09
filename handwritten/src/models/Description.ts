import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const Description = z.object({
  /* The localized description for an API resource in a specific language */
  description: z.string(),
  /* The language this name is in */
  language: NamedAPIResource,
});

export type Description = z.infer<typeof Description>;
