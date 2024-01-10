import * as z from "zod";
export declare const PokemonStat: z.ZodObject<{
    stat: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
    effort: z.ZodNumber;
    base_stat: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    stat: {
        url: string;
        name: string;
    };
    effort: number;
    base_stat: number;
}, {
    stat: {
        url: string;
        name: string;
    };
    effort: number;
    base_stat: number;
}>;
export type PokemonStat = z.infer<typeof PokemonStat>;
//# sourceMappingURL=PokemonStat.d.ts.map