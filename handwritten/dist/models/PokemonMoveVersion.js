"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonMoveVersion = void 0;
const z = __importStar(require("zod"));
const NamedAPIResource_1 = require("./NamedAPIResource");
exports.PokemonMoveVersion = z.object({
    /* The method by which the move is learned */
    move_learn_method: NamedAPIResource_1.NamedAPIResource,
    /* The version group in which the move is learned */
    version_group: NamedAPIResource_1.NamedAPIResource,
    /* The minimum level to learn the move */
    level_learned_at: z.number(),
});
//# sourceMappingURL=PokemonMoveVersion.js.map