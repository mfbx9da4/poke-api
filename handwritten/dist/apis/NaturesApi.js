"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaturesApi = void 0;
const http_1 = require("../http");
const models_1 = require("../models");
const _handleResponse_1 = require("./_handleResponse");
exports.NaturesApi = {
    /** Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail. */
    get: async (id) => {
        const response = await http_1.http.get(`nature/${id}`);
        return _handleNatureResponse(response);
    },
    /** Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail. */
    getByName: async (name) => {
        const response = await http_1.http.get(`nature/${name}`);
        return _handleNatureResponse(response);
    },
};
function _handleNatureResponse(response) {
    return (0, _handleResponse_1._handleResponse)(models_1.Nature, response);
}
//# sourceMappingURL=NaturesApi.js.map