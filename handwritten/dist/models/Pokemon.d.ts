import * as z from "zod";
export declare const Pokemon: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    base_experience: z.ZodNullable<z.ZodNumber>;
    height: z.ZodNumber;
    is_default: z.ZodBoolean;
    order: z.ZodNumber;
    weight: z.ZodNumber;
    abilities: z.ZodArray<z.ZodObject<{
        is_hidden: z.ZodBoolean;
        slot: z.ZodNumber;
        ability: z.ZodObject<{
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
        slot: number;
        is_hidden: boolean;
        ability: {
            url: string;
            name: string;
        };
    }, {
        slot: number;
        is_hidden: boolean;
        ability: {
            url: string;
            name: string;
        };
    }>, "many">;
    forms: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>, "many">;
    game_indices: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    held_items: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    location_area_encounters: z.ZodString;
    moves: z.ZodArray<z.ZodObject<{
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
        version_group_details: z.ZodArray<z.ZodObject<{
            move_learn_method: z.ZodObject<{
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
            level_learned_at: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            move_learn_method: {
                url: string;
                name: string;
            };
            version_group: {
                url: string;
                name: string;
            };
            level_learned_at: number;
        }, {
            move_learn_method: {
                url: string;
                name: string;
            };
            version_group: {
                url: string;
                name: string;
            };
            level_learned_at: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        move: {
            url: string;
            name: string;
        };
        version_group_details: {
            move_learn_method: {
                url: string;
                name: string;
            };
            version_group: {
                url: string;
                name: string;
            };
            level_learned_at: number;
        }[];
    }, {
        move: {
            url: string;
            name: string;
        };
        version_group_details: {
            move_learn_method: {
                url: string;
                name: string;
            };
            version_group: {
                url: string;
                name: string;
            };
            level_learned_at: number;
        }[];
    }>, "many">;
    sprites: z.ZodObject<{
        front_default: z.ZodNullable<z.ZodString>;
        front_shiny: z.ZodNullable<z.ZodString>;
        front_female: z.ZodNullable<z.ZodString>;
        front_shiny_female: z.ZodNullable<z.ZodString>;
        back_default: z.ZodNullable<z.ZodString>;
        back_shiny: z.ZodNullable<z.ZodString>;
        back_female: z.ZodNullable<z.ZodString>;
        back_shiny_female: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        front_default: string | null;
        front_shiny: string | null;
        front_female: string | null;
        front_shiny_female: string | null;
        back_default: string | null;
        back_shiny: string | null;
        back_female: string | null;
        back_shiny_female: string | null;
    }, {
        front_default: string | null;
        front_shiny: string | null;
        front_female: string | null;
        front_shiny_female: string | null;
        back_default: string | null;
        back_shiny: string | null;
        back_female: string | null;
        back_shiny_female: string | null;
    }>;
    species: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
    stats: z.ZodArray<z.ZodObject<{
        stat: z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            name: string;
        }, {
            url: string;
            name: string;
        }>;
        effort: z.ZodNumber;
        base_stat: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        stat: {
            url: string;
            name: string;
        };
        effort: number;
        base_stat: number;
    }, {
        stat: {
            url: string;
            name: string;
        };
        effort: number;
        base_stat: number;
    }>, "many">;
    types: z.ZodArray<z.ZodObject<{
        slot: z.ZodNumber;
        type: z.ZodObject<{
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
        type: {
            url: string;
            name: string;
        };
        slot: number;
    }, {
        type: {
            url: string;
            name: string;
        };
        slot: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    base_experience: number | null;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: {
        slot: number;
        is_hidden: boolean;
        ability: {
            url: string;
            name: string;
        };
    }[];
    forms: {
        url: string;
        name: string;
    }[];
    game_indices: {
        game_index: number;
        version: {
            url: string;
            name: string;
        };
    }[];
    held_items: {
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
    }[];
    location_area_encounters: string;
    moves: {
        move: {
            url: string;
            name: string;
        };
        version_group_details: {
            move_learn_method: {
                url: string;
                name: string;
            };
            version_group: {
                url: string;
                name: string;
            };
            level_learned_at: number;
        }[];
    }[];
    sprites: {
        front_default: string | null;
        front_shiny: string | null;
        front_female: string | null;
        front_shiny_female: string | null;
        back_default: string | null;
        back_shiny: string | null;
        back_female: string | null;
        back_shiny_female: string | null;
    };
    species: {
        url: string;
        name: string;
    };
    stats: {
        stat: {
            url: string;
            name: string;
        };
        effort: number;
        base_stat: number;
    }[];
    types: {
        type: {
            url: string;
            name: string;
        };
        slot: number;
    }[];
}, {
    name: string;
    id: number;
    base_experience: number | null;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: {
        slot: number;
        is_hidden: boolean;
        ability: {
            url: string;
            name: string;
        };
    }[];
    forms: {
        url: string;
        name: string;
    }[];
    game_indices: {
        game_index: number;
        version: {
            url: string;
            name: string;
        };
    }[];
    held_items: {
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
    }[];
    location_area_encounters: string;
    moves: {
        move: {
            url: string;
            name: string;
        };
        version_group_details: {
            move_learn_method: {
                url: string;
                name: string;
            };
            version_group: {
                url: string;
                name: string;
            };
            level_learned_at: number;
        }[];
    }[];
    sprites: {
        front_default: string | null;
        front_shiny: string | null;
        front_female: string | null;
        front_shiny_female: string | null;
        back_default: string | null;
        back_shiny: string | null;
        back_female: string | null;
        back_shiny_female: string | null;
    };
    species: {
        url: string;
        name: string;
    };
    stats: {
        stat: {
            url: string;
            name: string;
        };
        effort: number;
        base_stat: number;
    }[];
    types: {
        type: {
            url: string;
            name: string;
        };
        slot: number;
    }[];
}>;
export type Pokemon = z.infer<typeof Pokemon>;
//# sourceMappingURL=Pokemon.d.ts.map