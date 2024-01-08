# MoveAilmentListResponseBody

OK


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `count`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The total number of move ailments.                                 | 3                                                                  |
| `next`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | URL to retrieve the next page of move ailments.                    | https://pokeapi.co/api/v2/move-ailment/?offset=20&limit=20         |
| `previous`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | URL to retrieve the previous page of move ailments.                |                                                                    |
| `results`                                                          | [components.MoveAilment](../../models/components/moveailment.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |