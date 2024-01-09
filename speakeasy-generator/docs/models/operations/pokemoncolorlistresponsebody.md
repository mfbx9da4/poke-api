# PokemonColorListResponseBody

OK


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | The total number of pokemon colors.                                  | 3                                                                    |
| `next`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the next page of pokemon colors.                     | https://pokeapi.co/api/v2/pokemon-color/?offset=20&limit=20          |
| `previous`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the previous page of pokemon colors.                 |                                                                      |
| `results`                                                            | [components.PokemonColor](../../models/components/pokemoncolor.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |