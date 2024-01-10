import * as z from "zod";
export declare const NatureName: z.ZodObject<{
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
}>;
export type NatureName = z.infer<typeof NatureName>;
//# sourceMappingURL=NatureName.d.ts.map