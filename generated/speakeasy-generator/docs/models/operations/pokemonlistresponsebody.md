# PokemonListResponseBody

OK


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | The total number of pokemons.                              | 3                                                          |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | URL to retrieve the next page of pokemons.                 | https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20      |
| `previous`                                                 | *string*                                                   | :heavy_minus_sign:                                         | URL to retrieve the previous page of pokemons.             |                                                            |
| `results`                                                  | [components.Pokemon](../../models/components/pokemon.md)[] | :heavy_minus_sign:                                         | N/A                                                        |                                                            |