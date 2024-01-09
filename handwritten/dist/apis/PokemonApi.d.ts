import { Pokemon, PromiseResponse } from "../models";
export declare const PokemonApi: {
    /** Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.
     */
    get: (id: number) => PromiseResponse<Pokemon>;
    /** Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.
     */
    getByName: (name: string) => PromiseResponse<Pokemon>;
};
//# sourceMappingURL=PokemonApi.d.ts.map