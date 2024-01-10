import * as z from "zod";
export declare const AbilityEffectChange: z.ZodObject<{
    effect_entries: z.ZodArray<z.ZodObject<{
        effect: z.ZodString;
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
        language: {
            url: string;
            name: string;
        };
        effect: string;
    }, {
        language: {
            url: string;
            name: string;
        };
        effect: string;
    }>, "many">;
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
}, "strip", z.ZodTypeAny, {
    version_group: {
        url: string;
        name: string;
    };
    effect_entries: {
        language: {
            url: string;
            name: string;
        };
        effect: string;
    }[];
}, {
    version_group: {
        url: string;
        name: string;
    };
    effect_entries: {
        language: {
            url: string;
            name: string;
        };
        effect: string;
    }[];
}>;
export type AbilityEffectChange = z.infer<typeof AbilityEffectChange>;
//# sourceMappingURL=AbilityEffectChange.d.ts.map