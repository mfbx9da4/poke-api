import * as z from "zod";
export declare const MoveBattleStylePreference: z.ZodObject<{
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
}>;
export type MoveBattleStylePreference = z.infer<typeof MoveBattleStylePreference>;
//# sourceMappingURL=MoveBattleStylePreference.d.ts.map