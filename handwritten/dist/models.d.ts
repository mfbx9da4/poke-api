import * as z from "zod";
export declare const APIResource: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export type APIResource = z.infer<typeof APIResource>;
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
export declare const Name: z.ZodObject<{
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
}>;
export type Name = z.infer<typeof Name>;
export declare const VerboseEffect: z.ZodObject<{
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
}>;
export type VerboseEffect = z.infer<typeof VerboseEffect>;
export declare const Effect: z.ZodObject<{
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
}>;
export type Effect = z.infer<typeof Effect>;
export declare const AbilityEffectChange: z.ZodObject<{
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
    effect_entries: {
        language: {
            url: string;
            name: string;
        };
        effect: string;
    }[];
    version_group: {
        url: string;
        name: string;
    };
}, {
    effect_entries: {
        language: {
            url: string;
            name: string;
        };
        effect: string;
    }[];
    version_group: {
        url: string;
        name: string;
    };
}>;
export type AbilityEffectChange = z.infer<typeof AbilityEffectChange>;
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
        effect_entries: {
            language: {
                url: string;
                name: string;
            };
            effect: string;
        }[];
        version_group: {
            url: string;
            name: string;
        };
    }, {
        effect_entries: {
            language: {
                url: string;
                name: string;
            };
            effect: string;
        }[];
        version_group: {
            url: string;
            name: string;
        };
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
    effect_entries: {
        language: {
            url: string;
            name: string;
        };
        effect: string;
        short_effect: string;
    }[];
    id: number;
    is_hidden: boolean;
    slot: number;
    names: {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }[];
    effect_changes: {
        effect_entries: {
            language: {
                url: string;
                name: string;
            };
            effect: string;
        }[];
        version_group: {
            url: string;
            name: string;
        };
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
    effect_entries: {
        language: {
            url: string;
            name: string;
        };
        effect: string;
        short_effect: string;
    }[];
    id: number;
    is_hidden: boolean;
    slot: number;
    names: {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }[];
    effect_changes: {
        effect_entries: {
            language: {
                url: string;
                name: string;
            };
            effect: string;
        }[];
        version_group: {
            url: string;
            name: string;
        };
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
export declare const PokemonHeldItemVersion: z.ZodObject<{
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
}>;
export type PokemonHeldItemVersion = z.infer<typeof PokemonHeldItemVersion>;
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
export declare const PokemonMoveVersion: z.ZodObject<{
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
    version_group: {
        url: string;
        name: string;
    };
    move_learn_method: {
        url: string;
        name: string;
    };
    level_learned_at: number;
}, {
    version_group: {
        url: string;
        name: string;
    };
    move_learn_method: {
        url: string;
        name: string;
    };
    level_learned_at: number;
}>;
export type PokemonMoveVersion = z.infer<typeof PokemonMoveVersion>;
export declare const PokemonMove: z.ZodObject<{
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
        version_group: {
            url: string;
            name: string;
        };
        move_learn_method: {
            url: string;
            name: string;
        };
        level_learned_at: number;
    }, {
        version_group: {
            url: string;
            name: string;
        };
        move_learn_method: {
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
        version_group: {
            url: string;
            name: string;
        };
        move_learn_method: {
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
        version_group: {
            url: string;
            name: string;
        };
        move_learn_method: {
            url: string;
            name: string;
        };
        level_learned_at: number;
    }[];
}>;
export type PokemonMove = z.infer<typeof PokemonMove>;
export declare const PokemonStat: z.ZodObject<{
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
}>;
export type PokemonStat = z.infer<typeof PokemonStat>;
export declare const PokemonSprites: z.ZodObject<{
    front_default: z.ZodString;
    front_shiny: z.ZodString;
    front_female: z.ZodNullable<z.ZodString>;
    front_shiny_female: z.ZodNullable<z.ZodString>;
    back_default: z.ZodString;
    back_shiny: z.ZodString;
    back_female: z.ZodNullable<z.ZodString>;
    back_shiny_female: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    front_default: string;
    front_shiny: string;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string;
    back_shiny: string;
    back_female: string | null;
    back_shiny_female: string | null;
}, {
    front_default: string;
    front_shiny: string;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string;
    back_shiny: string;
    back_female: string | null;
    back_shiny_female: string | null;
}>;
export type PokemonSprites = z.infer<typeof PokemonSprites>;
export declare const PokemonType: z.ZodObject<{
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
}>;
export declare const PokemonAbility: z.ZodObject<{
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
    is_hidden: boolean;
    slot: number;
    ability: {
        url: string;
        name: string;
    };
}, {
    is_hidden: boolean;
    slot: number;
    ability: {
        url: string;
        name: string;
    };
}>;
export type PokemonAbility = z.infer<typeof PokemonAbility>;
export declare const Pokemon: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    base_experience: z.ZodNumber;
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
        is_hidden: boolean;
        slot: number;
        ability: {
            url: string;
            name: string;
        };
    }, {
        is_hidden: boolean;
        slot: number;
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
            version_group: {
                url: string;
                name: string;
            };
            move_learn_method: {
                url: string;
                name: string;
            };
            level_learned_at: number;
        }, {
            version_group: {
                url: string;
                name: string;
            };
            move_learn_method: {
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
            version_group: {
                url: string;
                name: string;
            };
            move_learn_method: {
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
            version_group: {
                url: string;
                name: string;
            };
            move_learn_method: {
                url: string;
                name: string;
            };
            level_learned_at: number;
        }[];
    }>, "many">;
    sprites: z.ZodObject<{
        front_default: z.ZodString;
        front_shiny: z.ZodString;
        front_female: z.ZodNullable<z.ZodString>;
        front_shiny_female: z.ZodNullable<z.ZodString>;
        back_default: z.ZodString;
        back_shiny: z.ZodString;
        back_female: z.ZodNullable<z.ZodString>;
        back_shiny_female: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        front_default: string;
        front_shiny: string;
        front_female: string | null;
        front_shiny_female: string | null;
        back_default: string;
        back_shiny: string;
        back_female: string | null;
        back_shiny_female: string | null;
    }, {
        front_default: string;
        front_shiny: string;
        front_female: string | null;
        front_shiny_female: string | null;
        back_default: string;
        back_shiny: string;
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
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: {
        is_hidden: boolean;
        slot: number;
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
            version_group: {
                url: string;
                name: string;
            };
            move_learn_method: {
                url: string;
                name: string;
            };
            level_learned_at: number;
        }[];
    }[];
    sprites: {
        front_default: string;
        front_shiny: string;
        front_female: string | null;
        front_shiny_female: string | null;
        back_default: string;
        back_shiny: string;
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
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: {
        is_hidden: boolean;
        slot: number;
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
            version_group: {
                url: string;
                name: string;
            };
            move_learn_method: {
                url: string;
                name: string;
            };
            level_learned_at: number;
        }[];
    }[];
    sprites: {
        front_default: string;
        front_shiny: string;
        front_female: string | null;
        front_shiny_female: string | null;
        back_default: string;
        back_shiny: string;
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
export declare const Nature: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    decreased_stat: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>>;
    increased_stat: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>>;
    hates_flavor: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
    likes_flavor: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        name: string;
    }, {
        url: string;
        name: string;
    }>;
    pokeathlon_stat_changes: z.ZodArray<z.ZodObject<{
        max_change: z.ZodNumber;
        pokeathlon_stat: z.ZodObject<{
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
        max_change: number;
        pokeathlon_stat: {
            url: string;
            name: string;
        };
    }, {
        max_change: number;
        pokeathlon_stat: {
            url: string;
            name: string;
        };
    }>, "many">;
    move_battle_style_preferences: z.ZodArray<z.ZodObject<{
        low_hp_preference: z.ZodNumber;
        high_hp_preference: z.ZodNumber;
        move_battle_style: z.ZodObject<{
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
        low_hp_preference: number;
        high_hp_preference: number;
        move_battle_style: {
            url: string;
            name: string;
        };
    }, {
        low_hp_preference: number;
        high_hp_preference: number;
        move_battle_style: {
            url: string;
            name: string;
        };
    }>, "many">;
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
    names: {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }[];
    decreased_stat: {
        url: string;
        name: string;
    } | null;
    increased_stat: {
        url: string;
        name: string;
    } | null;
    hates_flavor: {
        url: string;
        name: string;
    };
    likes_flavor: {
        url: string;
        name: string;
    };
    pokeathlon_stat_changes: {
        max_change: number;
        pokeathlon_stat: {
            url: string;
            name: string;
        };
    }[];
    move_battle_style_preferences: {
        low_hp_preference: number;
        high_hp_preference: number;
        move_battle_style: {
            url: string;
            name: string;
        };
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
    decreased_stat: {
        url: string;
        name: string;
    } | null;
    increased_stat: {
        url: string;
        name: string;
    } | null;
    hates_flavor: {
        url: string;
        name: string;
    };
    likes_flavor: {
        url: string;
        name: string;
    };
    pokeathlon_stat_changes: {
        max_change: number;
        pokeathlon_stat: {
            url: string;
            name: string;
        };
    }[];
    move_battle_style_preferences: {
        low_hp_preference: number;
        high_hp_preference: number;
        move_battle_style: {
            url: string;
            name: string;
        };
    }[];
}>;
export type Nature = z.infer<typeof Nature>;
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
            move: {
                url: string;
                name: string;
            };
            change: number;
        }, {
            move: {
                url: string;
                name: string;
            };
            change: number;
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
            move: {
                url: string;
                name: string;
            };
            change: number;
        }, {
            move: {
                url: string;
                name: string;
            };
            change: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        increase: {
            move: {
                url: string;
                name: string;
            };
            change: number;
        }[];
        decrease: {
            move: {
                url: string;
                name: string;
            };
            change: number;
        }[];
    }, {
        increase: {
            move: {
                url: string;
                name: string;
            };
            change: number;
        }[];
        decrease: {
            move: {
                url: string;
                name: string;
            };
            change: number;
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
    names: {
        name: string;
        language: {
            url: string;
            name: string;
        };
    }[];
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: {
        increase: {
            move: {
                url: string;
                name: string;
            };
            change: number;
        }[];
        decrease: {
            move: {
                url: string;
                name: string;
            };
            change: number;
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
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: {
        increase: {
            move: {
                url: string;
                name: string;
            };
            change: number;
        }[];
        decrease: {
            move: {
                url: string;
                name: string;
            };
            change: number;
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
}>;
export type Stat = z.infer<typeof Stat>;
export type SuccessResponse<T> = {
    ok: true;
    status: number;
    data: T;
    error?: undefined;
    errorCode?: undefined;
};
export type ErrorResponse = {
    ok: false;
    status: number;
    data: any;
    error: string;
    errorCode?: ErrorCode;
};
export declare enum ErrorCode {
    NotFound = "NotFound",
    ParseResponse = "ParseResponse",
    Unknown = "Unknown"
}
export type Response<T> = SuccessResponse<T> | ErrorResponse;
export type PromiseResponse<T> = Promise<Response<T>>;
//# sourceMappingURL=models.d.ts.map