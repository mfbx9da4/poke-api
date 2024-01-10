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
exports.Nature = void 0;
const z = __importStar(require("zod"));
const NamedAPIResource_1 = require("./NamedAPIResource");
const NatureStatChange_1 = require("./NatureStatChange");
const MoveBattleStylePreference_1 = require("./MoveBattleStylePreference");
const NatureName_1 = require("./NatureName");
exports.Nature = z.object({
    /* The identifier for this resource */
    id: z.number(),
    /* The name for this resource */
    name: z.string(),
    /* The stat decreased by 10% in Pokémon with this nature */
    decreased_stat: NamedAPIResource_1.NamedAPIResource.nullable(),
    /* The stat increased by 10% in Pokémon with this nature */
    increased_stat: NamedAPIResource_1.NamedAPIResource.nullable(),
    /* The flavor hated by Pokémon with this nature */
    hates_flavor: NamedAPIResource_1.NamedAPIResource.nullable(),
    /* The flavor liked by Pokémon with this nature */
    likes_flavor: NamedAPIResource_1.NamedAPIResource.nullable(),
    /* A list of Pokéathlon stats this nature effects and how much it effects them */
    pokeathlon_stat_changes: z.array(NatureStatChange_1.NatureStatChange),
    /* A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
    move_battle_style_preferences: z.array(MoveBattleStylePreference_1.MoveBattleStylePreference),
    /* The name of this resource listed in different languages */
    names: z.array(NatureName_1.NatureName),
});
//# sourceMappingURL=Nature.js.map