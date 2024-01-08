# MachineListResponseBody

OK


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | The total number of machines.                              | 3                                                          |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | URL to retrieve the next page of machines.                 | https://pokeapi.co/api/v2/machine/?offset=20&limit=20      |
| `previous`                                                 | *string*                                                   | :heavy_minus_sign:                                         | URL to retrieve the previous page of machines.             |                                                            |
| `results`                                                  | [components.Machine](../../models/components/machine.md)[] | :heavy_minus_sign:                                         | N/A                                                        |                                                            |