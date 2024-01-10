import * as z from "zod";
export declare const NamedAPIResource: z.ZodObject<{
    name: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    name: string;
}, {
    url: string;
    name: string;
}>;
export type NamedAPIResource = z.infer<typeof NamedAPIResource>;
//# sourceMappingURL=NamedAPIResource.d.ts.map