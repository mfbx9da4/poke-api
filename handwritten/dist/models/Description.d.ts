import * as z from "zod";
export declare const Description: z.ZodObject<{
    description: z.ZodString;
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
    description: string;
}, {
    language: {
        url: string;
        name: string;
    };
    description: string;
}>;
export type Description = z.infer<typeof Description>;
//# sourceMappingURL=Description.d.ts.map