# MoveDamageClassListResponseBody

OK


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `count`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | The total number of move damage classes.                                   | 3                                                                          |
| `next`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | URL to retrieve the next page of move damage classes.                      | https://pokeapi.co/api/v2/move-damage-class/?offset=20&limit=20            |
| `previous`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | URL to retrieve the previous page of move damage classes.                  |                                                                            |
| `results`                                                                  | [components.MoveDamageClass](../../models/components/movedamageclass.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |