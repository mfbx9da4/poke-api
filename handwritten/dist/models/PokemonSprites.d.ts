import * as z from "zod";
export declare const PokemonSprites: z.ZodObject<{
    front_default: z.ZodNullable<z.ZodString>;
    front_shiny: z.ZodNullable<z.ZodString>;
    front_female: z.ZodNullable<z.ZodString>;
    front_shiny_female: z.ZodNullable<z.ZodString>;
    back_default: z.ZodNullable<z.ZodString>;
    back_shiny: z.ZodNullable<z.ZodString>;
    back_female: z.ZodNullable<z.ZodString>;
    back_shiny_female: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    front_default: string | null;
    front_shiny: string | null;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_shiny: string | null;
    back_female: string | null;
    back_shiny_female: string | null;
}, {
    front_default: string | null;
    front_shiny: string | null;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_shiny: string | null;
    back_female: string | null;
    back_shiny_female: string | null;
}>;
export type PokemonSprites = z.infer<typeof PokemonSprites>;
//# sourceMappingURL=PokemonSprites.d.ts.map