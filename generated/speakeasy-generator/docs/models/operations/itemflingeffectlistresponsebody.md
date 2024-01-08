# ItemFlingEffectListResponseBody

OK


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `count`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | The total number of item fling effects.                                    | 3                                                                          |
| `next`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | URL to retrieve the next page of item fling effects.                       | https://pokeapi.co/api/v2/item-fling-effect/?offset=20&limit=20            |
| `previous`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | URL to retrieve the previous page of item fling effects.                   |                                                                            |
| `results`                                                                  | [components.ItemFlingEffect](../../models/components/itemflingeffect.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |