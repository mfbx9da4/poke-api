import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";
import { Description } from "./Description";

export const Characteristic = z.object({
  /* The identifier for this resource */
  id: z.number(),
  /* The remainder of the highest stat/IV divided by 5 */
  gene_modulo: z.number(),
  /* The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5 */
  possible_values: z.array(z.number()),
  /* The highest stat of this characteristic */
  highest_stat: NamedAPIResource,
  /* The descriptions of this characteristic listed in different languages */
  descriptions: z.array(Description),
});

export type Characteristic = z.infer<typeof Characteristic>;
