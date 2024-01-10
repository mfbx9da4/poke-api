import * as z from "zod";
export declare const PokemonHeldItemVersion: z.ZodObject<{
    version: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
    rarity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: {
        url: string;
        name: string;
    };
    rarity: number;
}, {
    version: {
        url: string;
        name: string;
    };
    rarity: number;
}>;
export type PokemonHeldItemVersion = z.infer<typeof PokemonHeldItemVersion>;
//# sourceMappingURL=PokemonHeldItemVersion.d.ts.map