# PokemonSpeciesListResponseBody

OK


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `count`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | The total number of pokemon species list.                                | 3                                                                        |
| `next`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | URL to retrieve the next page of pokemon species list.                   | https://pokeapi.co/api/v2/pokemon-species/?offset=20&limit=20            |
| `previous`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | URL to retrieve the previous page of pokemon species list.               |                                                                          |
| `results`                                                                | [components.PokemonSpecies](../../models/components/pokemonspecies.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |