# MoveTargetListResponseBody

OK


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `count`                                                          | *number*                                                         | :heavy_minus_sign:                                               | The total number of move targets.                                | 3                                                                |
| `next`                                                           | *string*                                                         | :heavy_minus_sign:                                               | URL to retrieve the next page of move targets.                   | https://pokeapi.co/api/v2/move-target/?offset=20&limit=20        |
| `previous`                                                       | *string*                                                         | :heavy_minus_sign:                                               | URL to retrieve the previous page of move targets.               |                                                                  |
| `results`                                                        | [components.MoveTarget](../../models/components/movetarget.md)[] | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |