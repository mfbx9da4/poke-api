import * as z from "zod";
export declare const Nature: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    decreased_stat: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>>;
    increased_stat: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>>;
    hates_flavor: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>>;
    likes_flavor: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>>;
    pokeathlon_stat_changes: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    move_battle_style_preferences: z.ZodArray<z.ZodObject<{
        low_hp_preference: z.ZodNumber;
        high_hp_preference: z.ZodNumber;
        move_battle_style: z.ZodObject<{
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
        low_hp_preference: number;
        high_hp_preference: number;
        move_battle_style: {
            url: string;
            name: string;
        };
    }, {
        low_hp_preference: number;
        high_hp_preference: number;
        move_battle_style: {
            url: string;
            name: string;
        };
    }>, "many">;
    names: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        language: z.ZodObject<{
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
        name: string;
        language: {
            url: string;
            name: string;
        };
    }, {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    names: {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }[];
    decreased_stat: {
        url: string;
        name: string;
    } | null;
    increased_stat: {
        url: string;
        name: string;
    } | null;
    hates_flavor: {
        url: string;
        name: string;
    } | null;
    likes_flavor: {
        url: string;
        name: string;
    } | null;
    pokeathlon_stat_changes: {
        max_change: number;
        pokeathlon_stat: {
            url: string;
            name: string;
        };
    }[];
    move_battle_style_preferences: {
        low_hp_preference: number;
        high_hp_preference: number;
        move_battle_style: {
            url: string;
            name: string;
        };
    }[];
}, {
    name: string;
    id: number;
    names: {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }[];
    decreased_stat: {
        url: string;
        name: string;
    } | null;
    increased_stat: {
        url: string;
        name: string;
    } | null;
    hates_flavor: {
        url: string;
        name: string;
    } | null;
    likes_flavor: {
        url: string;
        name: string;
    } | null;
    pokeathlon_stat_changes: {
        max_change: number;
        pokeathlon_stat: {
            url: string;
            name: string;
        };
    }[];
    move_battle_style_preferences: {
        low_hp_preference: number;
        high_hp_preference: number;
        move_battle_style: {
            url: string;
            name: string;
        };
    }[];
}>;
export type Nature = z.infer<typeof Nature>;
//# sourceMappingURL=Nature.d.ts.map