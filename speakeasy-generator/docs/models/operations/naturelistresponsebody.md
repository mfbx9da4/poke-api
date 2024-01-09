# NatureListResponseBody

OK


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | The total number of natures.                             | 3                                                        |
| `next`                                                   | *string*                                                 | :heavy_minus_sign:                                       | URL to retrieve the next page of natures.                | https://pokeapi.co/api/v2/nature/?offset=20&limit=20     |
| `previous`                                               | *string*                                                 | :heavy_minus_sign:                                       | URL to retrieve the previous page of natures.            |                                                          |
| `results`                                                | [components.Nature](../../models/components/nature.md)[] | :heavy_minus_sign:                                       | N/A                                                      |                                                          |