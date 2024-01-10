# Poke API SDK

A Typescript SDK for the [Poke API](https://pokeapi.co/about).

## Installation

```bash
npm install poke-api
```

## Usage

```typescript
import { createConfiguration, PokemonApi } from "poke-api";
const configuration = createConfiguration();
const api = new PokemonApi(configuration);
const result = await api.get(1);
```

## API Reference

### [NatureApi](./NatureApi.md)

### [PokemonApi](./PokemonApi.md)

### [StatApi](./StatApi.md)
