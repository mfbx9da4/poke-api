import * as z from "zod";
export declare const APIResource: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export type APIResource = z.infer<typeof APIResource>;
//# sourceMappingURL=APIResource.d.ts.map