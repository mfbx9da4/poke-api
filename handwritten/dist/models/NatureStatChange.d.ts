import * as z from "zod";
export declare const NatureStatChange: z.ZodObject<{
    max_change: z.ZodNumber;
    pokeathlon_stat: z.ZodObject<{
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
    max_change: number;
    pokeathlon_stat: {
        url: string;
        name: string;
    };
}, {
    max_change: number;
    pokeathlon_stat: {
        url: string;
        name: string;
    };
}>;
export type NatureStatChange = z.infer<typeof NatureStatChange>;
//# sourceMappingURL=NatureStatChange.d.ts.map