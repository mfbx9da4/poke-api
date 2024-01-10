import * as z from "zod";
export declare const PokemonMoveVersion: z.ZodObject<{
    move_learn_method: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
    version_group: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
    level_learned_at: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    move_learn_method: {
        url: string;
        name: string;
    };
    version_group: {
        url: string;
        name: string;
    };
    level_learned_at: number;
}, {
    move_learn_method: {
        url: string;
        name: string;
    };
    version_group: {
        url: string;
        name: string;
    };
    level_learned_at: number;
}>;
export type PokemonMoveVersion = z.infer<typeof PokemonMoveVersion>;
//# sourceMappingURL=PokemonMoveVersion.d.ts.map