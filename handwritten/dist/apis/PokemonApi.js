"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonApi = void 0;
const http_1 = require("../http");
const models_1 = require("../models");
const _handleResponse_1 = require("./_handleResponse");
exports.PokemonApi = {
    /** Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.
     */
    get: async (id) => {
        const response = await http_1.http.get(`pokemon/${id}`);
        return _handlePokemonResponse(response);
    },
    /** Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.
     */
    getByName: async (name) => {
        const response = await http_1.http.get(`pokemon/${name}`);
        return _handlePokemonResponse(response);
    },
};
function _handlePokemonResponse(response) {
    return (0, _handleResponse_1._handleResponse)(models_1.Pokemon, response);
}
//# sourceMappingURL=PokemonApi.js.map