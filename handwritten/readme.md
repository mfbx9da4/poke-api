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
  console.error(result.errorCode); // Type enum PokeSDK.errorCode | undefined
}
```

### Get Pokemon By ID

Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.

```typescript
import { PokeSDK } from "poke-api";
const result = await PokeSDK.pokemon.get(1);
if (result.ok) {
  console.log(result.data); // Type Pokemon
} else {
  console.error(result.error); // Type string
  console.error(result.status); // Type number
  console.error(result.data); // Type any
  console.error(result.errorCode); // Type enum PokeSDK.errorCode | undefined
}
```

### Get Pokemon By Name

Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.

```typescript
import { PokeSDK } from "poke-api";
const result = await PokeSDK.pokemon.get("bulbasaur");
if (result.ok) {
  console.log(result.data); // Type Pokemon
} else {
  console.error(result.error); // Type string
  console.error(result.status); // Type number
  console.error(result.data); // Type any
  console.error(result.errorCode); // Type enum PokeSDK.errorCode | undefined
}
```

### Get Stat By ID

Stats determine certain aspects of battles in the games. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. Each stat may also have a maximum value which if reached, will prevent the Pokémon from gaining any more EVs in that stat. See Bulbapedia for greater detail.

```typescript
import { PokeSDK } from "poke-api";
const result = await PokeSDK.stat.get(1);
if (result.ok) {
  console.log(result.data); // Type Stat
} else {
  console.error(result.error); // Type string
  console.error(result.status); // Type number
  console.error(result.data); // Type any
  console.error(result.errorCode); // Type enum PokeSDK.errorCode | undefined
}
```

### Get Stat By Name

Stats determine certain aspects of battles in the games. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. Each stat may also have a maximum value which if reached, will prevent the Pokémon from gaining any more EVs in that stat. See Bulbapedia for greater detail.

```typescript
import { PokeSDK } from "poke-api";
const result = await PokeSDK.stat.get("hp");
if (result.ok) {
  console.log(result.data); // Type Stat
} else {
  console.error(result.error); // Type string
  console.error(result.status); // Type number
  console.error(result.data); // Type any
  console.error(result.errorCode); // Type enum PokeSDK.errorCode | undefined
}
```

### Get Nature By ID

Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail.

```typescript
import { PokeSDK } from "poke-api";
const result = await PokeSDK.nature.get(1);
if (result.ok) {
  console.log(result.data); // Type Nature
} else {
  console.error(result.error); // Type string
  console.error(result.status); // Type number
  console.error(result.data); // Type any
  console.error(result.errorCode); // Type enum PokeSDK.errorCode | undefined
}
```

### Get Nature By Name

Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail.

```typescript
import { PokeSDK } from "poke-api";
const result = await PokeSDK.nature.get("hardy");
if (result.ok) {
  console.log(result.data); // Type Nature
} else {
  console.error(result.error); // Type string
  console.error(result.status); // Type number
  console.error(result.data); // Type any
  console.error(result.errorCode); // Type enum PokeSDK.errorCode | undefined
}
```
