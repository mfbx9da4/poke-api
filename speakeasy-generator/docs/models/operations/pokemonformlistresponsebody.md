# PokemonFormListResponseBody

OK


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `count`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The total number of pokemon forms.                                 | 3                                                                  |
| `next`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | URL to retrieve the next page of pokemon forms.                    | https://pokeapi.co/api/v2/pokemon-form/?offset=20&limit=20         |
| `previous`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | URL to retrieve the previous page of pokemon forms.                |                                                                    |
| `results`                                                          | [components.PokemonForm](../../models/components/pokemonform.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |