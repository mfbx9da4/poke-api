# TypeListResponseBody

OK


## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `count`                                                | *number*                                               | :heavy_minus_sign:                                     | The total number of types.                             | 3                                                      |
| `next`                                                 | *string*                                               | :heavy_minus_sign:                                     | URL to retrieve the next page of types.                | https://pokeapi.co/api/v2/type/?offset=20&limit=20     |
| `previous`                                             | *string*                                               | :heavy_minus_sign:                                     | URL to retrieve the previous page of types.            |                                                        |
| `results`                                              | [components.TypeT](../../models/components/typet.md)[] | :heavy_minus_sign:                                     | N/A                                                    |                                                        |