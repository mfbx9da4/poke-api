# LocationListResponseBody

OK


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `count`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The total number of locations.                               | 3                                                            |
| `next`                                                       | *string*                                                     | :heavy_minus_sign:                                           | URL to retrieve the next page of locations.                  | https://pokeapi.co/api/v2/location/?offset=20&limit=20       |
| `previous`                                                   | *string*                                                     | :heavy_minus_sign:                                           | URL to retrieve the previous page of locations.              |                                                              |
| `results`                                                    | [components.Location](../../models/components/location.md)[] | :heavy_minus_sign:                                           | N/A                                                          |                                                              |