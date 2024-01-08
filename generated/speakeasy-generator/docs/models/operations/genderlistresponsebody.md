# GenderListResponseBody

OK


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | The total number of genders.                             | 3                                                        |
| `next`                                                   | *string*                                                 | :heavy_minus_sign:                                       | URL to retrieve the next page of genders.                | https://pokeapi.co/api/v2/gender/?offset=20&limit=20     |
| `previous`                                               | *string*                                                 | :heavy_minus_sign:                                       | URL to retrieve the previous page of genders.            |                                                          |
| `results`                                                | [components.Gender](../../models/components/gender.md)[] | :heavy_minus_sign:                                       | N/A                                                      |                                                          |