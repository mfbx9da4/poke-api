# AbilityListResponseBody

A list of abilities


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | The total number of abilities available                    |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | The URL for the next page of abilities (null if none)      |
| `previous`                                                 | *string*                                                   | :heavy_minus_sign:                                         | The URL for the previous page of abilities (null if none)  |
| `results`                                                  | [components.Ability](../../models/components/ability.md)[] | :heavy_minus_sign:                                         | N/A                                                        |