import * as z from "zod";
export declare const VerboseEffect: z.ZodObject<{
    effect: z.ZodString;
    short_effect: z.ZodString;
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
    short_effect: string;
}, {
    language: {
        url: string;
        name: string;
    };
    effect: string;
    short_effect: string;
}>;
export type VerboseEffect = z.infer<typeof VerboseEffect>;
//# sourceMappingURL=VerboseEffect.d.ts.map