# VersionListResponseBody

OK


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | The total number of versions.                              | 3                                                          |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | URL to retrieve the next page of versions.                 | https://pokeapi.co/api/v2/version/?offset=20&limit=20      |
| `previous`                                                 | *string*                                                   | :heavy_minus_sign:                                         | URL to retrieve the previous page of versions.             |                                                            |
| `results`                                                  | [components.Version](../../models/components/version.md)[] | :heavy_minus_sign:                                         | N/A                                                        |                                                            |