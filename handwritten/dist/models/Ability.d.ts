import * as z from "zod";
export declare const Ability: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    is_hidden: z.ZodBoolean;
    slot: z.ZodNumber;
    names: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    effect_entries: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    effect_changes: z.ZodArray<z.ZodObject<{
        effect_entries: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
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
        version_group: {
            url: string;
            name: string;
        };
        effect_entries: {
            language: {
                url: string;
                name: string;
            };
            effect: string;
        }[];
    }, {
        version_group: {
            url: string;
            name: string;
        };
        effect_entries: {
            language: {
                url: string;
                name: string;
            };
            effect: string;
        }[];
    }>, "many">;
    flavor_text_entries: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    names: {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }[];
    slot: number;
    is_hidden: boolean;
    effect_entries: {
        language: {
            url: string;
            name: string;
        };
        effect: string;
        short_effect: string;
    }[];
    effect_changes: {
        version_group: {
            url: string;
            name: string;
        };
        effect_entries: {
            language: {
                url: string;
                name: string;
            };
            effect: string;
        }[];
    }[];
    flavor_text_entries: {
        language: {
            url: string;
            name: string;
        };
        version_group: {
            url: string;
            name: string;
        };
        flavor_text: string;
    }[];
}, {
    name: string;
    id: number;
    names: {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }[];
    slot: number;
    is_hidden: boolean;
    effect_entries: {
        language: {
            url: string;
            name: string;
        };
        effect: string;
        short_effect: string;
    }[];
    effect_changes: {
        version_group: {
            url: string;
            name: string;
        };
        effect_entries: {
            language: {
                url: string;
                name: string;
            };
            effect: string;
        }[];
    }[];
    flavor_text_entries: {
        language: {
            url: string;
            name: string;
        };
        version_group: {
            url: string;
            name: string;
        };
        flavor_text: string;
    }[];
}>;
export type Ability = z.infer<typeof Ability>;
//# sourceMappingURL=Ability.d.ts.map