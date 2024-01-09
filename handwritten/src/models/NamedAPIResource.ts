import * as z from "zod";

export const NamedAPIResource = z.object({
  /* The name of the referenced resource */
  name: z.string(),
  /* The URL of the referenced resource */
  url: z.string(),
});
export type NamedAPIResource = z.infer<typeof NamedAPIResource>;
