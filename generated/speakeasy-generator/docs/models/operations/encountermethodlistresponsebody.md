# EncounterMethodListResponseBody

OK


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `count`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | The total number of encounter methods.                                     | 3                                                                          |
| `next`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | URL to retrieve the next page of encounter methods.                        | https://pokeapi.co/api/v2/encounter-method/?offset=20&limit=20             |
| `previous`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | URL to retrieve the previous page of encounter methods.                    |                                                                            |
| `results`                                                                  | [components.EncounterMethod](../../models/components/encountermethod.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |