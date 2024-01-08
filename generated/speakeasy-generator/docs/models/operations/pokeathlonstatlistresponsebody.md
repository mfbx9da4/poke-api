# PokeathlonStatListResponseBody

OK


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `count`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | The total number of pokeathlon stats.                                    | 3                                                                        |
| `next`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | URL to retrieve the next page of pokeathlon stats.                       | https://pokeapi.co/api/v2/pokeathlon-stat/?offset=20&limit=20            |
| `previous`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | URL to retrieve the previous page of pokeathlon stat.                    |                                                                          |
| `results`                                                                | [components.PokeathlonStat](../../models/components/pokeathlonstat.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |