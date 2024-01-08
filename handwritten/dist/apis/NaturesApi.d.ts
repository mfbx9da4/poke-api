import { PromiseResponse, Nature } from "../models";
export declare const NaturesApi: {
    /** Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail. */
    get: (id: number) => PromiseResponse<Nature>;
    /** Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail. */
    getByName: (name: string) => PromiseResponse<Nature>;
};
//# sourceMappingURL=NaturesApi.d.ts.map