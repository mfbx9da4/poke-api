import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const NatureStatChange = z.object({
  /* The amount of change */
  max_change: z.number(),
  /* The stat being affected */
  pokeathlon_stat: NamedAPIResource,
});
export type NatureStatChange = z.infer<typeof NatureStatChange>;
