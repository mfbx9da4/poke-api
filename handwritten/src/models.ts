import * as z from "zod";

export const APIResource = z.object({
  /* The URL of the referenced resource */
  url: z.string(),
});

export type APIResource = z.infer<typeof APIResource>;

export const NamedAPIResource = z.object({
  /* The name of the referenced resource */
  name: z.string(),
  /* The URL of the referenced resource */
  url: z.string(),
});
export type NamedAPIResource = z.infer<typeof NamedAPIResource>;
export const Name = z.object({
  /* The localized name for an API resource in a specific language */
  name: z.string(),
  /* The language this name is in */
  language: NamedAPIResource,
});
export type Name = z.infer<typeof Name>;
export const VerboseEffect = z.object({
  /* The localized effect text for an API resource in a specific language */
  effect: z.string(),
  /* The localized effect text in brief */
  short_effect: z.string(),
  /* The language this effect is in */
  language: NamedAPIResource,
});
export type VerboseEffect = z.infer<typeof VerboseEffect>;
export const Effect = z.object({
  /* The localized effect text for an API resource in a specific language */
  effect: z.string(),
  /* The language this effect is in */
  language: NamedAPIResource,
});
export type Effect = z.infer<typeof Effect>;
export const AbilityEffectChange = z.object({
  /* The previous effect of this ability listed in different languages */
  effect_entries: z.array(Effect),
  /* The version group in which the previous effect of this ability originated */
  version_group: NamedAPIResource,
});
export type AbilityEffectChange = z.infer<typeof AbilityEffectChange>;
export const AbilityFlavorText = z.object({
  /* The localized name for an API resource in a specific language */
  flavor_text: z.string(),
  /* The language this name is in */
  language: NamedAPIResource,
  /* The game version this flavor text is extracted from */
  version_group: NamedAPIResource,
});
export type AbilityFlavorText = z.infer<typeof AbilityFlavorText>;
export const Ability = z.object({
  /* The identifier for this resource */
  id: z.number(),
  /* The name for this resource */
  name: z.string(),
  /* Whether or not this is a hidden ability */
  is_hidden: z.boolean(),
  /* The slot this ability occupies in this Pokémon species */
  slot: z.number(),
  /* The name of this ability listed in different languages */
  names: z.array(Name),
  /* The effect of this ability listed in different languages */
  effect_entries: z.array(VerboseEffect),
  /* The list of previous effects this ability has had across version groups */
  effect_changes: z.array(AbilityEffectChange),
  /* The flavor text of this ability listed in different languages */
  flavor_text_entries: z.array(AbilityFlavorText),
});
export type Ability = z.infer<typeof Ability>;
export const VersionGameIndex = z.object({
  /* The internal id of an API resource within game data */
  game_index: z.number(),
  /* The version relevent to this game index */
  version: NamedAPIResource,
});
export type VersionGameIndex = z.infer<typeof VersionGameIndex>;
export const PokemonHeldItemVersion = z.object({
  /* The version in which the item is held */
  version: NamedAPIResource,
  /* How often the item is held */
  rarity: z.number(),
});
export type PokemonHeldItemVersion = z.infer<typeof PokemonHeldItemVersion>;
export const PokemonHeldItem = z.object({
  /* The item the referenced Pokémon holds */
  item: NamedAPIResource,
  /* The details of the different versions in which the item is held */
  version_details: z.array(PokemonHeldItemVersion),
});
export type PokemonHeldItem = z.infer<typeof PokemonHeldItem>;
export const PokemonMoveVersion = z.object({
  /* The method by which the move is learned */
  move_learn_method: NamedAPIResource,
  /* The version group in which the move is learned */
  version_group: NamedAPIResource,
  /* The minimum level to learn the move */
  level_learned_at: z.number(),
});
export type PokemonMoveVersion = z.infer<typeof PokemonMoveVersion>;
export const PokemonMove = z.object({
  /* The move the Pokémon can learn */
  move: NamedAPIResource,
  /* The details of the version in which the Pokémon can learn the move */
  version_group_details: z.array(PokemonMoveVersion),
});
export type PokemonMove = z.infer<typeof PokemonMove>;
export const PokemonStat = z.object({
  /* The stat the Pokémon has */
  stat: NamedAPIResource,
  /* The effort points (EV) the Pokémon has in the stat */
  effort: z.number(),
  /* The base value of the stat */
  base_stat: z.number(),
});
export type PokemonStat = z.infer<typeof PokemonStat>;
export const PokemonSprites = z.object({
  front_default: z.string().nullable(),
  front_shiny: z.string().nullable(),
  front_female: z.string().nullable(),
  front_shiny_female: z.string().nullable(),
  back_default: z.string().nullable(),
  back_shiny: z.string().nullable(),
  back_female: z.string().nullable(),
  back_shiny_female: z.string().nullable(),
});
export type PokemonSprites = z.infer<typeof PokemonSprites>;

export const PokemonType = z.object({
  /* The order the Pokémon's types are listed in */
  slot: z.number(),
  /* The type the referenced Pokémon has */
  type: NamedAPIResource,
});
type PokemonType = z.infer<typeof PokemonType>;

export const PokemonAbility = z.object({
  /* Whether or not this is a hidden ability */
  is_hidden: z.boolean(),
  /* The slot this ability occupies in this Pokémon species */
  slot: z.number(),
  /* The ability the Pokémon may have */
  ability: NamedAPIResource,
});

export type PokemonAbility = z.infer<typeof PokemonAbility>;

export const Pokemon = z.object({
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
  abilities: z.array(PokemonAbility),
  /* A list of forms this Pokémon can take on */
  forms: z.array(NamedAPIResource),
  /* A list of game indices relevent to Pokémon item by generation */
  game_indices: z.array(VersionGameIndex),
  /* A list of items this Pokémon may be holding when encountered */
  held_items: z.array(PokemonHeldItem),
  /* A link to a list of location areas, as well as encounter details pertaining to specific versions */
  location_area_encounters: z.string(),
  /* A list of moves along with learn methods and level details pertaining to specific version groups */
  moves: z.array(PokemonMove),
  /* A set of sprites used to depict this Pokémon in the game */
  sprites: PokemonSprites,
  /* The species this Pokémon belongs to */
  species: NamedAPIResource,
  /* A list of base stat values for this Pokémon */
  stats: z.array(PokemonStat),
  /* A list of details showing types this Pokémon has */
  types: z.array(PokemonType),
});

export type Pokemon = z.infer<typeof Pokemon>;
const NatureStatChange = z.object({
  /* The amount of change */
  max_change: z.number(),
  /* The stat being affected */
  pokeathlon_stat: NamedAPIResource,
});
type NatureStatChange = z.infer<typeof NatureStatChange>;

const MoveBattleStylePreference = z.object({
  /* Chance of using the move, in percent, if HP is under one half */
  low_hp_preference: z.number(),
  /* Chance of using the move, in percent, if HP is over one half */
  high_hp_preference: z.number(),
  /* The move battle style */
  move_battle_style: NamedAPIResource,
});

type MoveBattleStylePreference = z.infer<typeof MoveBattleStylePreference>;

const NatureName = z.object({
  /* The localized name for an API resource in a specific language */
  name: z.string(),
  /* The language this name is in */
  language: NamedAPIResource,
});
type NatureName = z.infer<typeof NatureName>;

export const Nature = z.object({
  /* The identifier for this resource */
  id: z.number(),
  /* The name for this resource */
  name: z.string(),
  /* The stat decreased by 10% in Pokémon with this nature */
  decreased_stat: NamedAPIResource.nullable(),
  /* The stat increased by 10% in Pokémon with this nature */
  increased_stat: NamedAPIResource.nullable(),
  /* The flavor hated by Pokémon with this nature */
  hates_flavor: NamedAPIResource.nullable(),
  /* The flavor liked by Pokémon with this nature */
  likes_flavor: NamedAPIResource.nullable(),
  /* A list of Pokéathlon stats this nature effects and how much it effects them */
  pokeathlon_stat_changes: z.array(NatureStatChange),
  /* A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
  move_battle_style_preferences: z.array(MoveBattleStylePreference),
  /* The name of this resource listed in different languages */
  names: z.array(NatureName),
});

export type Nature = z.infer<typeof Nature>;

export const Description = z.object({
  /* The localized description for an API resource in a specific language */
  description: z.string(),
  /* The language this name is in */
  language: NamedAPIResource,
});

export type Description = z.infer<typeof Description>;

export const Characteristic = z.object({
  /* The identifier for this resource */
  id: z.number(),
  /* The remainder of the highest stat/IV divided by 5 */
  gene_modulo: z.number(),
  /* The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5 */
  possible_values: z.array(z.number()),
  /* The highest stat of this characteristic */
  highest_stat: NamedAPIResource,
  /* The descriptions of this characteristic listed in different languages */
  descriptions: z.array(Description),
});

export type Characteristic = z.infer<typeof Characteristic>;

export const Stat = z.object({
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
    increase: z.array(
      z.object({
        /* The maximum amount of change to the referenced stat */
        change: z.number(),
        /* The move causing the change */
        move: NamedAPIResource,
      })
    ),
    /* A list of moves and how they change the referenced stat */
    decrease: z.array(
      z.object({
        /* The maximum amount of change to the referenced stat */
        change: z.number(),
        /* The move causing the change */
        move: NamedAPIResource,
      })
    ),
  }),
  /* A detail of natures which affect this stat positively or negatively */
  affecting_natures: z.object({
    /* A list of natures and how they change the referenced stat */
    increase: z.array(
      z.object({
        /* The maximum amount of change to the referenced stat */
        change: z.number(),
        /* The nature causing the change */
        nature: NamedAPIResource,
      })
    ),
    /* A list of nature sand how they change the referenced stat */
    decrease: z.array(
      z.object({
        /* The maximum amount of change to the referenced stat */
        change: z.number(),
        /* The nature causing the change */
        nature: NamedAPIResource,
      })
    ),
  }),
  /* A list of characteristics that are set on a Pokémon when its highest base stat is this stat */
  characteristics: z.array(APIResource),
  /* The class of damage this stat is directly related to */
  move_damage_class: NamedAPIResource.nullable(),
  /* The name of this resource listed in different languages */
  names: z.array(Name),
});

export type Stat = z.infer<typeof Stat>;
export type SuccessResponse<T> = {
  ok: true;
  status: number;
  data: T;
  error?: undefined;
  errorCode?: undefined;
};
export type ErrorResponse = {
  ok: false;
  status: number;
  data: any;
  error: string;
  errorCode?: ErrorCode;
};

export enum ErrorCode {
  NotFound = "NotFound",
  ParseResponse = "ParseResponse",
  Unknown = "Unknown",
}

export type Response<T> = SuccessResponse<T> | ErrorResponse;
export type PromiseResponse<T> = Promise<Response<T>>;
