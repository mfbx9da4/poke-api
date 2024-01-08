"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeSDK = void 0;
const StatsApi_1 = require("./apis/StatsApi");
const NaturesApi_1 = require("./apis/NaturesApi");
const PokemonApi_1 = require("./apis/PokemonApi");
exports.PokeSDK = {
    pokemon: PokemonApi_1.PokemonApi,
    natures: NaturesApi_1.NaturesApi,
    stats: StatsApi_1.StatsApi,
};
//# sourceMappingURL=PokeSDK.js.map