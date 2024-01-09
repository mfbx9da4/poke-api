import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";
import { VersionGameIndex } from "./VersionGameIndex";
import { PokemonHeldItem } from "./PokemonHeldItem";
import { PokemonMove } from "./PokemonMove";
import { PokemonStat } from "./PokemonStat";
import { PokemonSprites } from "./PokemonSprites";
import { PokemonType } from "./PokemonType";
import { PokemonAbility } from "./PokemonAbility";

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
