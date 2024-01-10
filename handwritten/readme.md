# Poke API SDK

A Typescript SDK for the [Poke API](https://pokeapi.co/about).

## Installation

```bash
npm install poke-api
```

## Usage

```typescript
import { PokeSDK } from "poke-api";
const result = await PokeSDK.pokemon.get(1);
if (result.ok) {
  console.log(result.data); // Type Pokemon
} else {
  console.error(result.error); // Type string
  console.error(result.status); // Type number
  console.error(result.data); // Type any
  console.error(result.errorCode); // Type enum PokeSDK.errorCode
}
```

### Get Pokemon

Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.

```typescript
const result = await PokeSDK.pokemon.get(1);
```

Alternatively, you can use the `getByName` method to get a Pokémon by name.

```typescript
const result = await PokeSDK.pokemon.getByName("bulbasaur");
```

```typescript
// 👇 `result.data`
type Pokemon = {
  /* The identifier for this resource */
  id?: number;
  /* The name for this resource */
  name?: string;
  /* The base experience gained for defeating this Pokémon */
  base_experience?: number | null;
  /* The height of this Pokémon in decimetres */
  height?: number;
  /* Set for exactly one Pokémon used as the default for each species */
  is_default?: boolean;
  /* Order for sorting. Almost national order, except families are grouped together. */
  order?: number;
  /* The weight of this Pokémon in hectograms */
  weight?: number;
  /* A list of abilities this Pokémon could potentially have. */
  abilities?: PokemonAbility[];
  /* A list of forms this Pokémon can take on */
  forms?: NamedAPIResource[];
  /* A list of game indices relevent to Pokémon item by generation */
  game_indices?: VersionGameIndex[];
  /* A list of items this Pokémon may be holding when encountered */
  held_items?: PokemonHeldItem[];
  /* A link to a list of location areas, as well as encounter details pertaining to specific versions */
  location_area_encounters?: string;
  /* A list of moves along with learn methods and level details pertaining to specific version groups */
  moves?: PokemonMove[];
  /* A set of sprites used to depict this Pokémon in the game */
  sprites?: PokemonSprites;
  /* The species this Pokémon belongs to */
  species?: NamedAPIResource;
  /* A list of base stat values for this Pokémon */
  stats?: PokemonStat[];
  /* A list of details showing types this Pokémon has */
  types?: PokemonType[];
};
```

### Get Stat

Stats determine certain aspects of battles in the games. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. Each stat may also have a maximum value which if reached, will prevent the Pokémon from gaining any more EVs in that stat. See Bulbapedia for greater detail.

```typescript
const result = await PokeSDK.stats.get(1);
```

Alternatively, you can use the `getByName` method to get a stat by name.

```typescript
const result = await PokeSDK.stats.getByName("hp");
```

```typescript
// 👇 `result.data`
type Stat = {
  /* The identifier for this resource */
  id?: number;
  /* The name for this resource */
  name?: string;
  /* ID the games use for this stat */
  game_index?: number;
  /* Whether this stat only exists within a battle */
  is_battle_only?: boolean;
  /* A detail of moves which affect this stat positively or negatively */
  affecting_moves?: MoveStatAffectSets;
  /* A detail of natures which affect this stat positively or negatively */
  affecting_natures?: NatureStatAffectSets;
  /* A list of characteristics that are set on a Pokémon when its highest base stat is this stat */
  characteristics?: APIResource[];
  /* The class of damage this stat is directly related to */
  move_damage_class?: NamedAPIResource;
  /* The name of this resource listed in different languages */
  names?: Name[];
};
```

### Get Nature

Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail.

```typescript
const result = await PokeSDK.natures.get(1);
```

Alternatively, you can use the `getByName` method to get a nature by name.

```typescript
const result = await PokeSDK.natures.getByName("hardy");
```

```typescript
// 👇 `result.data`
type Nature = {
  /* The identifier for this resource */
  id?: number;
  /* The name for this resource */
  name?: string;
  /* The stat decreased by 10% in Pokémon with this nature */
  decreased_stat?: NamedAPIResource;
  /* The stat increased by 10% in Pokémon with this nature */
  increased_stat?: NamedAPIResource;
  /* The flavor hated by Pokémon with this nature */
  hates_flavor?: NamedAPIResource;
  /* The flavor liked by Pokémon with this nature */
  likes_flavor?: NamedAPIResource;
  /* A list of Pokéathlon stats this nature effects and how much it effects them */
  pokeathlon_stat_changes?: NatureStatChange[];
  /* A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
  move_battle_style_preferences?: MoveBattleStylePreference[];
  /* The name of this resource listed in different languages */
  names?: Name[];
};
```
