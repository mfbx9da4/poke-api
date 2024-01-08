export declare const PokeSDK: {
    pokemon: {
        get: (id: number) => import("./models").PromiseResponse<{
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
        getByName: (name: string) => import("./models").PromiseResponse<{
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
    };
    natures: {
        get: (id: number) => import("./models").PromiseResponse<{
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
            };
            increased_stat: {
                url: string;
                name: string;
            };
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
                max_change: number;
                nature: {
                    url: string;
                    name: string;
                };
            }[];
        }>;
        getByName: (name: string) => import("./models").PromiseResponse<{
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
            };
            increased_stat: {
                url: string;
                name: string;
            };
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
                max_change: number;
                nature: {
                    url: string;
                    name: string;
                };
            }[];
        }>;
    };
    stats: {
        get: (id: number) => import("./models").PromiseResponse<{
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
                    nature: {
                        url: string;
                        name: string;
                    };
                    change: number;
                }[];
                decrease: {
                    nature: {
                        url: string;
                        name: string;
                    };
                    change: number;
                }[];
            };
            characteristics: {
                url: string;
                name: string;
            }[];
            move_damage_class: {
                url: string;
                name: string;
            };
        }>;
        getByName: (name: string) => import("./models").PromiseResponse<{
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
                    nature: {
                        url: string;
                        name: string;
                    };
                    change: number;
                }[];
                decrease: {
                    nature: {
                        url: string;
                        name: string;
                    };
                    change: number;
                }[];
            };
            characteristics: {
                url: string;
                name: string;
            }[];
            move_damage_class: {
                url: string;
                name: string;
            };
        }>;
    };
};
//# sourceMappingURL=PokeSDK.d.ts.map