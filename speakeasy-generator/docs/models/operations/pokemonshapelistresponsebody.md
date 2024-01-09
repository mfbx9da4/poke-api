# PokemonShapeListResponseBody

OK


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | The total number of pokemon shapes.                                  | 3                                                                    |
| `next`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the next page of pokemon shapes.                     | https://pokeapi.co/api/v2/pokemon-shape/?offset=20&limit=20          |
| `previous`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the previous page of pokemon shapes.                 |                                                                      |
| `results`                                                            | [components.PokemonShape](../../models/components/pokemonshape.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |