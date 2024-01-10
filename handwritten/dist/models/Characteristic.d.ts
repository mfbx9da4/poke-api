import * as z from "zod";
export declare const Characteristic: z.ZodObject<{
    id: z.ZodNumber;
    gene_modulo: z.ZodNumber;
    possible_values: z.ZodArray<z.ZodNumber, "many">;
    highest_stat: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
    descriptions: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    gene_modulo: number;
    possible_values: number[];
    highest_stat: {
        url: string;
        name: string;
    };
    descriptions: {
        language: {
            url: string;
            name: string;
        };
        description: string;
    }[];
}, {
    id: number;
    gene_modulo: number;
    possible_values: number[];
    highest_stat: {
        url: string;
        name: string;
    };
    descriptions: {
        language: {
            url: string;
            name: string;
        };
        description: string;
    }[];
}>;
export type Characteristic = z.infer<typeof Characteristic>;
//# sourceMappingURL=Characteristic.d.ts.map