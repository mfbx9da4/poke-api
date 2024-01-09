# GrowthRateListResponseBody

OK


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `count`                                                          | *number*                                                         | :heavy_minus_sign:                                               | The total number of growth rates.                                | 3                                                                |
| `next`                                                           | *string*                                                         | :heavy_minus_sign:                                               | URL to retrieve the next page of growth rates.                   | https://pokeapi.co/api/v2/growth-rate/?offset=20&limit=20        |
| `previous`                                                       | *string*                                                         | :heavy_minus_sign:                                               | URL to retrieve the previous page of growth rates.               |                                                                  |
| `results`                                                        | [components.GrowthRate](../../models/components/growthrate.md)[] | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |