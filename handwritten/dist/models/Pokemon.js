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
exports.Pokemon = void 0;
const z = __importStar(require("zod"));
const NamedAPIResource_1 = require("./NamedAPIResource");
const VersionGameIndex_1 = require("./VersionGameIndex");
const PokemonHeldItem_1 = require("./PokemonHeldItem");
const PokemonMove_1 = require("./PokemonMove");
const PokemonStat_1 = require("./PokemonStat");
const PokemonSprites_1 = require("./PokemonSprites");
const PokemonType_1 = require("./PokemonType");
const PokemonAbility_1 = require("./PokemonAbility");
exports.Pokemon = z.object({
    /* The identifier for this resource */
    id: z.number(),
    /* The name for this resource */
    name: z.string(),
    /* The base experience gained for defeating this Pokémon */
    base_experience: z.number().nullable(),
    /* The height of this Pokémon in decimetres */
    height: z.number(),
    /* Set for exactly one Pokémon used as the default for each species */
    is_default: z.boolean(),
    /* Order for sorting. Almost national order, except families are grouped together. */
    order: z.number(),
    /* The weight of this Pokémon in hectograms */
    weight: z.number(),
    /* A list of abilities this Pokémon could potentially have. */
    abilities: z.array(PokemonAbility_1.PokemonAbility),
    /* A list of forms this Pokémon can take on */
    forms: z.array(NamedAPIResource_1.NamedAPIResource),
    /* A list of game indices relevent to Pokémon item by generation */
    game_indices: z.array(VersionGameIndex_1.VersionGameIndex),
    /* A list of items this Pokémon may be holding when encountered */
    held_items: z.array(PokemonHeldItem_1.PokemonHeldItem),
    /* A link to a list of location areas, as well as encounter details pertaining to specific versions */
    location_area_encounters: z.string(),
    /* A list of moves along with learn methods and level details pertaining to specific version groups */
    moves: z.array(PokemonMove_1.PokemonMove),
    /* A set of sprites used to depict this Pokémon in the game */
    sprites: PokemonSprites_1.PokemonSprites,
    /* The species this Pokémon belongs to */
    species: NamedAPIResource_1.NamedAPIResource,
    /* A list of base stat values for this Pokémon */
    stats: z.array(PokemonStat_1.PokemonStat),
    /* A list of details showing types this Pokémon has */
    types: z.array(PokemonType_1.PokemonType),
});
//# sourceMappingURL=Pokemon.js.map