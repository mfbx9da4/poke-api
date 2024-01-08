"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const axios_1 = __importDefault(require("axios"));
exports.http = axios_1.default.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: { "Content-Type": "application/json" },
    // Client will handle status validation
    validateStatus: (_status) => true,
});
//# sourceMappingURL=http.js.map