"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsApi = void 0;
const http_1 = require("../http");
const models_1 = require("../models");
const _handleResponse_1 = require("./_handleResponse");
exports.StatsApi = {
    /** Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. See Bulbapedia for greater detail. */
    get: async (id) => {
        const response = await http_1.http.get(`stat/${id}`);
        return _handleStatResponse(response);
    },
    /** Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. See Bulbapedia for greater detail. */
    getByName: async (name) => {
        const response = await http_1.http.get(`stat/${name}`);
        return _handleStatResponse(response);
    },
};
function _handleStatResponse(response) {
    return (0, _handleResponse_1._handleResponse)(models_1.Stat, response);
}
//# sourceMappingURL=StatsApi.js.map