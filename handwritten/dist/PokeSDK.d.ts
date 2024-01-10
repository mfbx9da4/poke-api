import { ErrorCode } from "./models/Response";
export declare const PokeSDK: {
    pokemon: {
        get: (id: number) => import("./models/Response").PromiseResponse<{
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
        getByName: (name: string) => import("./models/Response").PromiseResponse<{
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
    };
    natures: {
        get: (id: number) => import("./models/Response").PromiseResponse<{
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
            } | null;
            likes_flavor: {
                url: string;
                name: string;
            } | null;
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
        getByName: (name: string) => import("./models/Response").PromiseResponse<{
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
            } | null;
            likes_flavor: {
                url: string;
                name: string;
            } | null;
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
    };
    stats: {
        get: (id: number) => import("./models/Response").PromiseResponse<{
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
        getByName: (name: string) => import("./models/Response").PromiseResponse<{
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
    };
    errorCode: typeof ErrorCode;
};
//# sourceMappingURL=PokeSDK.d.ts.map