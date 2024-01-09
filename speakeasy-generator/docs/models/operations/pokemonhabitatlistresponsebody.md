# PokemonHabitatListResponseBody

OK


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `count`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | The total number of pokemon habitats.                                    | 3                                                                        |
| `next`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | URL to retrieve the next page of pokemon habitats.                       | https://pokeapi.co/api/v2/language/?offset=20&limit=20                   |
| `previous`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | URL to retrieve the previous page of pokemon habitats.                   |                                                                          |
| `results`                                                                | [components.PokemonHabitat](../../models/components/pokemonhabitat.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |