# PokedexListResponseBody

OK


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | The total number of pokedexes.                             | 3                                                          |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | URL to retrieve the next page of pokedexes.                | https://pokeapi.co/api/v2/pokedex/?offset=20&limit=20      |
| `previous`                                                 | *string*                                                   | :heavy_minus_sign:                                         | URL to retrieve the previous page of pokedexes.            |                                                            |
| `results`                                                  | [components.Pokedex](../../models/components/pokedex.md)[] | :heavy_minus_sign:                                         | N/A                                                        |                                                            |