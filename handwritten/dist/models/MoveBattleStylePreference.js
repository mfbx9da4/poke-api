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
exports.MoveBattleStylePreference = void 0;
const z = __importStar(require("zod"));
const NamedAPIResource_1 = require("./NamedAPIResource");
exports.MoveBattleStylePreference = z.object({
    /* Chance of using the move, in percent, if HP is under one half */
    low_hp_preference: z.number(),
    /* Chance of using the move, in percent, if HP is over one half */
    high_hp_preference: z.number(),
    /* The move battle style */
    move_battle_style: NamedAPIResource_1.NamedAPIResource,
});
//# sourceMappingURL=MoveBattleStylePreference.js.map