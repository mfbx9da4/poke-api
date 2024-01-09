# RegionListResponseBody

OK


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | The total number of regions.                             | 3                                                        |
| `next`                                                   | *string*                                                 | :heavy_minus_sign:                                       | URL to retrieve the next page of regions.                | https://pokeapi.co/api/v2/region/?offset=20&limit=20     |
| `previous`                                               | *string*                                                 | :heavy_minus_sign:                                       | URL to retrieve the previous page of regions.            |                                                          |
| `results`                                                | [components.Region](../../models/components/region.md)[] | :heavy_minus_sign:                                       | N/A                                                      |                                                          |