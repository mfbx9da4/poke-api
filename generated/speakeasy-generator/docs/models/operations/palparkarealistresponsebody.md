# PalParkAreaListResponseBody

OK


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `count`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The total number of pal park areas.                                | 3                                                                  |
| `next`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | URL to retrieve the next page of pal park areas.                   | https://pokeapi.co/api/v2/pal-park-area/?offset=20&limit=20        |
| `previous`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | URL to retrieve the previous page of pal park areas.               |                                                                    |
| `results`                                                          | [components.PalParkArea](../../models/components/palparkarea.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |