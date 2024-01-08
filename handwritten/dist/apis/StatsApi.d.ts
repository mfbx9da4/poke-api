import { PromiseResponse, Stat } from "../models";
export declare const StatsApi: {
    /** Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. See Bulbapedia for greater detail. */
    get: (id: number) => PromiseResponse<Stat>;
    /** Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. See Bulbapedia for greater detail. */
    getByName: (name: string) => PromiseResponse<Stat>;
};
//# sourceMappingURL=StatsApi.d.ts.map