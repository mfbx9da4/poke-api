# EvolutionTriggerListResponseBody

OK


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `count`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | The total number of evolution triggers.                                      | 3                                                                            |
| `next`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | URL to retrieve the next page of evolution triggers.                         | https://pokeapi.co/api/v2/evolution-trigger/?offset=20&limit=20              |
| `previous`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | URL to retrieve the previous page of evolution triggers.                     |                                                                              |
| `results`                                                                    | [components.EvolutionTrigger](../../models/components/evolutiontrigger.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |