# GenerationListResponseBody

OK


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `count`                                                          | *number*                                                         | :heavy_minus_sign:                                               | The total number of generations.                                 | 3                                                                |
| `next`                                                           | *string*                                                         | :heavy_minus_sign:                                               | URL to retrieve the next page of generations.                    | https://pokeapi.co/api/v2/generation/?offset=20&limit=20         |
| `previous`                                                       | *string*                                                         | :heavy_minus_sign:                                               | URL to retrieve the previous page of generations.                |                                                                  |
| `results`                                                        | [components.Generation](../../models/components/generation.md)[] | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |