# ItemPocketListResponseBody

OK


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `count`                                                          | *number*                                                         | :heavy_minus_sign:                                               | The total number of item pockets.                                | 3                                                                |
| `next`                                                           | *string*                                                         | :heavy_minus_sign:                                               | URL to retrieve the next page of item pockets.                   | https://pokeapi.co/api/v2/item-pocket/?offset=20&limit=20        |
| `previous`                                                       | *string*                                                         | :heavy_minus_sign:                                               | URL to retrieve the previous page of item pockets.               |                                                                  |
| `results`                                                        | [components.ItemPocket](../../models/components/itempocket.md)[] | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |