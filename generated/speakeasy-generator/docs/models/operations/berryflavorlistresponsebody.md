# BerryFlavorListResponseBody

OK


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `count`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The total number of berry flavors                                  | 5                                                                  |
| `next`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The URL to the next page of berry flavors (if any)                 | https://pokeapi.co/api/v2/berry-flavor?offset=5&limit=5            |
| `previous`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | The URL to the previous page of berry flavors (if any)             | <nil>                                                              |
| `results`                                                          | [components.BerryFlavor](../../models/components/berryflavor.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |