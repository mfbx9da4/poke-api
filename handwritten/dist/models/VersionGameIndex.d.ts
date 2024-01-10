import * as z from "zod";
export declare const VersionGameIndex: z.ZodObject<{
    game_index: z.ZodNumber;
    version: z.ZodObject<{
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
    game_index: number;
    version: {
        url: string;
        name: string;
    };
}, {
    game_index: number;
    version: {
        url: string;
        name: string;
    };
}>;
export type VersionGameIndex = z.infer<typeof VersionGameIndex>;
//# sourceMappingURL=VersionGameIndex.d.ts.map