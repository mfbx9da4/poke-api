import * as z from "zod";
export declare const PokemonAbility: z.ZodObject<{
    is_hidden: z.ZodBoolean;
    slot: z.ZodNumber;
    ability: z.ZodObject<{
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
    slot: number;
    is_hidden: boolean;
    ability: {
        url: string;
        name: string;
    };
}, {
    slot: number;
    is_hidden: boolean;
    ability: {
        url: string;
        name: string;
    };
}>;
export type PokemonAbility = z.infer<typeof PokemonAbility>;
//# sourceMappingURL=PokemonAbility.d.ts.map