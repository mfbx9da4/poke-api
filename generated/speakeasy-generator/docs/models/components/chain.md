# Chain


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `isBaby`                                                                     | *boolean*                                                                    | :heavy_minus_sign:                                                           | Whether or not this is a baby Pokémon                                        |
| `species`                                                                    | [components.PokemonSpecies](../../models/components/pokemonspecies.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `evolutionDetails`                                                           | [components.EvolutionDetails](../../models/components/evolutiondetails.md)[] | :heavy_minus_sign:                                                           | The chain of Pokémon species that forms part of this evolution chain         |