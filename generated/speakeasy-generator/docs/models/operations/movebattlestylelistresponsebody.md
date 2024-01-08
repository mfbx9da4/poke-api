# MoveBattleStyleListResponseBody

OK


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `count`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | The total number of move battle styles.                                    | 3                                                                          |
| `next`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | URL to retrieve the next page of move battle styles.                       | https://pokeapi.co/api/v2/move-battle-style/?offset=20&limit=20            |
| `previous`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | URL to retrieve the previous page of move battle styles.                   |                                                                            |
| `results`                                                                  | [components.MoveBattleStyle](../../models/components/movebattlestyle.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |