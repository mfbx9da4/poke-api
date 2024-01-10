import * as z from "zod";
export declare const PokemonMove: z.ZodObject<{
    move: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
    version_group_details: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    move: {
        url: string;
        name: string;
    };
    version_group_details: {
        move_learn_method: {
            url: string;
            name: string;
        };
        version_group: {
            url: string;
            name: string;
        };
        level_learned_at: number;
    }[];
}, {
    move: {
        url: string;
        name: string;
    };
    version_group_details: {
        move_learn_method: {
            url: string;
            name: string;
        };
        version_group: {
            url: string;
            name: string;
        };
        level_learned_at: number;
    }[];
}>;
export type PokemonMove = z.infer<typeof PokemonMove>;
//# sourceMappingURL=PokemonMove.d.ts.map