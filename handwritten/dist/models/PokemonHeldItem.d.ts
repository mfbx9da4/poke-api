import * as z from "zod";
export declare const PokemonHeldItem: z.ZodObject<{
    item: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
    version_details: z.ZodArray<z.ZodObject<{
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
        rarity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        version: {
            url: string;
            name: string;
        };
        rarity: number;
    }, {
        version: {
            url: string;
            name: string;
        };
        rarity: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    item: {
        url: string;
        name: string;
    };
    version_details: {
        version: {
            url: string;
            name: string;
        };
        rarity: number;
    }[];
}, {
    item: {
        url: string;
        name: string;
    };
    version_details: {
        version: {
            url: string;
            name: string;
        };
        rarity: number;
    }[];
}>;
export type PokemonHeldItem = z.infer<typeof PokemonHeldItem>;
//# sourceMappingURL=PokemonHeldItem.d.ts.map