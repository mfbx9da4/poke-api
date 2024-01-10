import * as z from "zod";
export declare const AbilityFlavorText: z.ZodObject<{
    flavor_text: z.ZodString;
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
    language: {
        url: string;
        name: string;
    };
    version_group: {
        url: string;
        name: string;
    };
    flavor_text: string;
}, {
    language: {
        url: string;
        name: string;
    };
    version_group: {
        url: string;
        name: string;
    };
    flavor_text: string;
}>;
export type AbilityFlavorText = z.infer<typeof AbilityFlavorText>;
//# sourceMappingURL=AbilityFlavorText.d.ts.map