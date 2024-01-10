import * as z from "zod";
export declare const PokemonType: z.ZodObject<{
    slot: z.ZodNumber;
    type: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    type: {
        url: string;
        name: string;
    };
    slot: number;
}, {
    type: {
        url: string;
        name: string;
    };
    slot: number;
}>;
//# sourceMappingURL=PokemonType.d.ts.map