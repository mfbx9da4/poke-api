import * as z from "zod";
export declare const Effect: z.ZodObject<{
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
}>;
export type Effect = z.infer<typeof Effect>;
//# sourceMappingURL=Effect.d.ts.map