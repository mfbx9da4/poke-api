import * as z from "zod";

export const PokemonSprites = z.object({
  front_default: z.string().nullable(),
  front_shiny: z.string().nullable(),
  front_female: z.string().nullable(),
  front_shiny_female: z.string().nullable(),
  back_default: z.string().nullable(),
  back_shiny: z.string().nullable(),
  back_female: z.string().nullable(),
  back_shiny_female: z.string().nullable(),
});
export type PokemonSprites = z.infer<typeof PokemonSprites>;
