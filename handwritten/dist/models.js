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
exports.ErrorCode = exports.Stat = exports.Characteristic = exports.Description = exports.Nature = exports.Pokemon = exports.PokemonAbility = exports.PokemonType = exports.PokemonSprites = exports.PokemonStat = exports.PokemonMove = exports.PokemonMoveVersion = exports.PokemonHeldItem = exports.PokemonHeldItemVersion = exports.VersionGameIndex = exports.Ability = exports.AbilityFlavorText = exports.AbilityEffectChange = exports.Effect = exports.VerboseEffect = exports.Name = exports.NamedAPIResource = exports.APIResource = void 0;
const z = __importStar(require("zod"));
exports.APIResource = z.object({
    /* The URL of the referenced resource */
    url: z.string(),
});
exports.NamedAPIResource = z.object({
    /* The name of the referenced resource */
    name: z.string(),
    /* The URL of the referenced resource */
    url: z.string(),
});
exports.Name = z.object({
    /* The localized name for an API resource in a specific language */
    name: z.string(),
    /* The language this name is in */
    language: exports.NamedAPIResource,
});
exports.VerboseEffect = z.object({
    /* The localized effect text for an API resource in a specific language */
    effect: z.string(),
    /* The localized effect text in brief */
    short_effect: z.string(),
    /* The language this effect is in */
    language: exports.NamedAPIResource,
});
exports.Effect = z.object({
    /* The localized effect text for an API resource in a specific language */
    effect: z.string(),
    /* The language this effect is in */
    language: exports.NamedAPIResource,
});
exports.AbilityEffectChange = z.object({
    /* The previous effect of this ability listed in different languages */
    effect_entries: z.array(exports.Effect),
    /* The version group in which the previous effect of this ability originated */
    version_group: exports.NamedAPIResource,
});
exports.AbilityFlavorText = z.object({
    /* The localized name for an API resource in a specific language */
    flavor_text: z.string(),
    /* The language this name is in */
    language: exports.NamedAPIResource,
    /* The game version this flavor text is extracted from */
    version_group: exports.NamedAPIResource,
});
exports.Ability = z.object({
    /* The identifier for this resource */
    id: z.number(),
    /* The name for this resource */
    name: z.string(),
    /* Whether or not this is a hidden ability */
    is_hidden: z.boolean(),
    /* The slot this ability occupies in this Pokémon species */
    slot: z.number(),
    /* The name of this ability listed in different languages */
    names: z.array(exports.Name),
    /* The effect of this ability listed in different languages */
    effect_entries: z.array(exports.VerboseEffect),
    /* The list of previous effects this ability has had across version groups */
    effect_changes: z.array(exports.AbilityEffectChange),
    /* The flavor text of this ability listed in different languages */
    flavor_text_entries: z.array(exports.AbilityFlavorText),
});
exports.VersionGameIndex = z.object({
    /* The internal id of an API resource within game data */
    game_index: z.number(),
    /* The version relevent to this game index */
    version: exports.NamedAPIResource,
});
exports.PokemonHeldItemVersion = z.object({
    /* The version in which the item is held */
    version: exports.NamedAPIResource,
    /* How often the item is held */
    rarity: z.number(),
});
exports.PokemonHeldItem = z.object({
    /* The item the referenced Pokémon holds */
    item: exports.NamedAPIResource,
    /* The details of the different versions in which the item is held */
    version_details: z.array(exports.PokemonHeldItemVersion),
});
exports.PokemonMoveVersion = z.object({
    /* The method by which the move is learned */
    move_learn_method: exports.NamedAPIResource,
    /* The version group in which the move is learned */
    version_group: exports.NamedAPIResource,
    /* The minimum level to learn the move */
    level_learned_at: z.number(),
});
exports.PokemonMove = z.object({
    /* The move the Pokémon can learn */
    move: exports.NamedAPIResource,
    /* The details of the version in which the Pokémon can learn the move */
    version_group_details: z.array(exports.PokemonMoveVersion),
});
exports.PokemonStat = z.object({
    /* The stat the Pokémon has */
    stat: exports.NamedAPIResource,
    /* The effort points (EV) the Pokémon has in the stat */
    effort: z.number(),
    /* The base value of the stat */
    base_stat: z.number(),
});
exports.PokemonSprites = z.object({
    front_default: z.string(),
    front_shiny: z.string(),
    front_female: z.string().nullable(),
    front_shiny_female: z.string().nullable(),
    back_default: z.string(),
    back_shiny: z.string(),
    back_female: z.string().nullable(),
    back_shiny_female: z.string().nullable(),
});
exports.PokemonType = z.object({
    /* The order the Pokémon's types are listed in */
    slot: z.number(),
    /* The type the referenced Pokémon has */
    type: exports.NamedAPIResource,
});
exports.PokemonAbility = z.object({
    /* Whether or not this is a hidden ability */
    is_hidden: z.boolean(),
    /* The slot this ability occupies in this Pokémon species */
    slot: z.number(),
    /* The ability the Pokémon may have */
    ability: exports.NamedAPIResource,
});
exports.Pokemon = z.object({
    /* The identifier for this resource */
    id: z.number(),
    /* The name for this resource */
    name: z.string(),
    /* The base experience gained for defeating this Pokémon */
    base_experience: z.number(),
    /* The height of this Pokémon in decimetres */
    height: z.number(),
    /* Set for exactly one Pokémon used as the default for each species */
    is_default: z.boolean(),
    /* Order for sorting. Almost national order, except families are grouped together. */
    order: z.number(),
    /* The weight of this Pokémon in hectograms */
    weight: z.number(),
    /* A list of abilities this Pokémon could potentially have. */
    abilities: z.array(exports.PokemonAbility),
    /* A list of forms this Pokémon can take on */
    forms: z.array(exports.NamedAPIResource),
    /* A list of game indices relevent to Pokémon item by generation */
    game_indices: z.array(exports.VersionGameIndex),
    /* A list of items this Pokémon may be holding when encountered */
    held_items: z.array(exports.PokemonHeldItem),
    /* A link to a list of location areas, as well as encounter details pertaining to specific versions */
    location_area_encounters: z.string(),
    /* A list of moves along with learn methods and level details pertaining to specific version groups */
    moves: z.array(exports.PokemonMove),
    /* A set of sprites used to depict this Pokémon in the game */
    sprites: exports.PokemonSprites,
    /* The species this Pokémon belongs to */
    species: exports.NamedAPIResource,
    /* A list of base stat values for this Pokémon */
    stats: z.array(exports.PokemonStat),
    /* A list of details showing types this Pokémon has */
    types: z.array(exports.PokemonType),
});
const NatureStatChange = z.object({
    /* The amount of change */
    max_change: z.number(),
    /* The stat being affected */
    pokeathlon_stat: exports.NamedAPIResource,
});
const MoveBattleStylePreference = z.object({
    /* Chance of using the move, in percent, if HP is under one half */
    low_hp_preference: z.number(),
    /* Chance of using the move, in percent, if HP is over one half */
    high_hp_preference: z.number(),
    /* The move battle style */
    move_battle_style: exports.NamedAPIResource,
});
const NatureName = z.object({
    /* The localized name for an API resource in a specific language */
    name: z.string(),
    /* The language this name is in */
    language: exports.NamedAPIResource,
});
exports.Nature = z.object({
    /* The identifier for this resource */
    id: z.number(),
    /* The name for this resource */
    name: z.string(),
    /* The stat decreased by 10% in Pokémon with this nature */
    decreased_stat: exports.NamedAPIResource.nullable(),
    /* The stat increased by 10% in Pokémon with this nature */
    increased_stat: exports.NamedAPIResource.nullable(),
    /* The flavor hated by Pokémon with this nature */
    hates_flavor: exports.NamedAPIResource,
    /* The flavor liked by Pokémon with this nature */
    likes_flavor: exports.NamedAPIResource,
    /* A list of Pokéathlon stats this nature effects and how much it effects them */
    pokeathlon_stat_changes: z.array(NatureStatChange),
    /* A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
    move_battle_style_preferences: z.array(MoveBattleStylePreference),
    /* The name of this resource listed in different languages */
    names: z.array(NatureName),
});
exports.Description = z.object({
    /* The localized description for an API resource in a specific language */
    description: z.string(),
    /* The language this name is in */
    language: exports.NamedAPIResource,
});
exports.Characteristic = z.object({
    /* The identifier for this resource */
    id: z.number(),
    /* The remainder of the highest stat/IV divided by 5 */
    gene_modulo: z.number(),
    /* The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5 */
    possible_values: z.array(z.number()),
    /* The highest stat of this characteristic */
    highest_stat: exports.NamedAPIResource,
    /* The descriptions of this characteristic listed in different languages */
    descriptions: z.array(exports.Description),
});
exports.Stat = z.object({
    /* The identifier for this resource */
    id: z.number(),
    /* The name for this resource */
    name: z.string(),
    /* ID the games use for this stat */
    game_index: z.number(),
    /* Whether this stat only exists within a battle */
    is_battle_only: z.boolean(),
    /* A detail of moves which affect this stat positively or negatively */
    affecting_moves: z.object({
        /* A list of moves and how they change the referenced stat */
        increase: z.array(z.object({
            /* The maximum amount of change to the referenced stat */
            change: z.number(),
            /* The move causing the change */
            move: exports.NamedAPIResource,
        })),
        /* A list of moves and how they change the referenced stat */
        decrease: z.array(z.object({
            /* The maximum amount of change to the referenced stat */
            change: z.number(),
            /* The move causing the change */
            move: exports.NamedAPIResource,
        })),
    }),
    /* A detail of natures which affect this stat positively or negatively */
    affecting_natures: z.object({
        /* A list of natures and how they change the referenced stat */
        increase: z.array(z.object({
            /* The maximum amount of change to the referenced stat */
            change: z.number(),
            /* The nature causing the change */
            nature: exports.NamedAPIResource,
        })),
        /* A list of nature sand how they change the referenced stat */
        decrease: z.array(z.object({
            /* The maximum amount of change to the referenced stat */
            change: z.number(),
            /* The nature causing the change */
            nature: exports.NamedAPIResource,
        })),
    }),
    /* A list of characteristics that are set on a Pokémon when its highest base stat is this stat */
    characteristics: z.array(exports.APIResource),
    /* The class of damage this stat is directly related to */
    move_damage_class: exports.NamedAPIResource.nullable(),
    /* The name of this resource listed in different languages */
    names: z.array(exports.Name),
});
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["NotFound"] = "NotFound";
    ErrorCode["ParseResponse"] = "ParseResponse";
    ErrorCode["Unknown"] = "Unknown";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
//# sourceMappingURL=models.js.map