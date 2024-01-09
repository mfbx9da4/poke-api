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

### [AbilityApi](./AbilityApi.md)

### [BerryApi](./BerryApi.md)

### [BerryFirmnessApi](./BerryFirmnessApi.md)

### [BerryFlavorApi](./BerryFlavorApi.md)

### [CharacteristicApi](./CharacteristicApi.md)

### [ContestEffectApi](./ContestEffectApi.md)

### [ContestTypeApi](./ContestTypeApi.md)

### [EggGroupApi](./EggGroupApi.md)

### [EncounterConditionApi](./EncounterConditionApi.md)

### [EncounterConditionValueApi](./EncounterConditionValueApi.md)

### [EncounterMethodApi](./EncounterMethodApi.md)

### [EvolutionChainApi](./EvolutionChainApi.md)

### [EvolutionTriggerApi](./EvolutionTriggerApi.md)

### [GenderApi](./GenderApi.md)

### [GenerationApi](./GenerationApi.md)

### [GrowthRateApi](./GrowthRateApi.md)

### [ItemApi](./ItemApi.md)

### [ItemAttributeApi](./ItemAttributeApi.md)

### [ItemCategoryApi](./ItemCategoryApi.md)

### [ItemFlingEffectApi](./ItemFlingEffectApi.md)

### [ItemPocketApi](./ItemPocketApi.md)

### [LanguageApi](./LanguageApi.md)

### [LocationApi](./LocationApi.md)

### [LocationAreaApi](./LocationAreaApi.md)

### [MachineApi](./MachineApi.md)

### [MoveApi](./MoveApi.md)

### [MoveAilmentApi](./MoveAilmentApi.md)

### [MoveBattleStyleApi](./MoveBattleStyleApi.md)

### [MoveCategoryApi](./MoveCategoryApi.md)

### [MoveDamageClassApi](./MoveDamageClassApi.md)

### [MoveLearnMethodApi](./MoveLearnMethodApi.md)

### [MoveTargetApi](./MoveTargetApi.md)

### [NatureApi](./NatureApi.md)

### [PalParkAreaApi](./PalParkAreaApi.md)

### [PokeathlonStatApi](./PokeathlonStatApi.md)

### [PokedexApi](./PokedexApi.md)

### [PokemonApi](./PokemonApi.md)

### [PokemonColorApi](./PokemonColorApi.md)

### [PokemonFormApi](./PokemonFormApi.md)

### [PokemonHabitatApi](./PokemonHabitatApi.md)

### [PokemonShapeApi](./PokemonShapeApi.md)

### [PokemonSpeciesApi](./PokemonSpeciesApi.md)

### [RegionApi](./RegionApi.md)

### [StatApi](./StatApi.md)

### [SuperContestEffectApi](./SuperContestEffectApi.md)

### [TypeApi](./TypeApi.md)

### [VersionApi](./VersionApi.md)

### [VersionGroupApi](./VersionGroupApi.md)
