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
  console.error(result.errorCode); // Type enum PokeSDK.errorCode
  console.error(result.status); // Type number
  console.error(result.error); // Type string
  console.error(result.data); // Type any
}
```

### Error Handling

- Common errors will be handled [by the known error codes which can be accessed from `PokeSDK.errorCode`](./src/models/Response.ts)
- Even if there is an error, the `data` field will be populated with the response from the server. You may be able to salvage data from there or gather more information about the error.

### Get Pokemon

- [REST documentation](https://pokeapi.co/docs/v2#pokemon)

Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.

```typescript
const result = await PokeSDK.pokemon.get(1);
```

Alternatively, you can use the `getByName` method to get a Pokémon by name.

```typescript
const result = await PokeSDK.pokemon.getByName("bulbasaur");
```

If successful the return type of `result.data` is a single [**Pokemon**](./src/models/Pokemon.ts).

### Get Stat

- [REST documentation](https://pokeapi.co/docs/v2#stats)

Stats determine certain aspects of battles in the games. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. Each stat may also have a maximum value which if reached, will prevent the Pokémon from gaining any more EVs in that stat. See Bulbapedia for greater detail.

```typescript
const result = await PokeSDK.stats.get(1);
```

Alternatively, you can use the `getByName` method to get a stat by name.

```typescript
const result = await PokeSDK.stats.getByName("hp");
```

If successful the return type of `result.data` is a single [**Stat**](./src/models/Stat.ts).

### Get Nature

- [REST documentation](https://pokeapi.co/docs/v2#natures)

Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail.

```typescript
const result = await PokeSDK.natures.get(1);
```

Alternatively, you can use the `getByName` method to get a nature by name.

```typescript
const result = await PokeSDK.natures.getByName("hardy");
```

If successful the return type of `result.data` is a single [**Nature**](./src/models/Nature.ts).
