import * as z from "zod";
export declare const Stat: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    game_index: z.ZodNumber;
    is_battle_only: z.ZodBoolean;
    affecting_moves: z.ZodObject<{
        increase: z.ZodArray<z.ZodObject<{
            change: z.ZodNumber;
            move: z.ZodObject<{
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
            change: number;
            move: {
                url: string;
                name: string;
            };
        }, {
            change: number;
            move: {
                url: string;
                name: string;
            };
        }>, "many">;
        decrease: z.ZodArray<z.ZodObject<{
            change: z.ZodNumber;
            move: z.ZodObject<{
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
            change: number;
            move: {
                url: string;
                name: string;
            };
        }, {
            change: number;
            move: {
                url: string;
                name: string;
            };
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        increase: {
            change: number;
            move: {
                url: string;
                name: string;
            };
        }[];
        decrease: {
            change: number;
            move: {
                url: string;
                name: string;
            };
        }[];
    }, {
        increase: {
            change: number;
            move: {
                url: string;
                name: string;
            };
        }[];
        decrease: {
            change: number;
            move: {
                url: string;
                name: string;
            };
        }[];
    }>;
    affecting_natures: z.ZodObject<{
        increase: z.ZodArray<z.ZodObject<{
            change: z.ZodNumber;
            nature: z.ZodObject<{
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
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }, {
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }>, "many">;
        decrease: z.ZodArray<z.ZodObject<{
            change: z.ZodNumber;
            nature: z.ZodObject<{
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
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }, {
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        increase: {
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }[];
        decrease: {
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }[];
    }, {
        increase: {
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }[];
        decrease: {
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }[];
    }>;
    characteristics: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">;
    move_damage_class: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>>;
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
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: {
        increase: {
            change: number;
            move: {
                url: string;
                name: string;
            };
        }[];
        decrease: {
            change: number;
            move: {
                url: string;
                name: string;
            };
        }[];
    };
    affecting_natures: {
        increase: {
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }[];
        decrease: {
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }[];
    };
    characteristics: {
        url: string;
    }[];
    move_damage_class: {
        url: string;
        name: string;
    } | null;
    names: {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }[];
}, {
    name: string;
    id: number;
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: {
        increase: {
            change: number;
            move: {
                url: string;
                name: string;
            };
        }[];
        decrease: {
            change: number;
            move: {
                url: string;
                name: string;
            };
        }[];
    };
    affecting_natures: {
        increase: {
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }[];
        decrease: {
            change: number;
            nature: {
                url: string;
                name: string;
            };
        }[];
    };
    characteristics: {
        url: string;
    }[];
    move_damage_class: {
        url: string;
        name: string;
    } | null;
    names: {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }[];
}>;
export type Stat = z.infer<typeof Stat>;
//# sourceMappingURL=Stat.d.ts.map