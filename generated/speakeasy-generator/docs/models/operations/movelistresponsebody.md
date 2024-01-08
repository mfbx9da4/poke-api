# MoveListResponseBody

OK


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `count`                                              | *number*                                             | :heavy_minus_sign:                                   | The total number of moves.                           | 3                                                    |
| `next`                                               | *string*                                             | :heavy_minus_sign:                                   | URL to retrieve the next page of moves.              | https://pokeapi.co/api/v2/move/?offset=20&limit=20   |
| `previous`                                           | *string*                                             | :heavy_minus_sign:                                   | URL to retrieve the previous page of moves.          |                                                      |
| `results`                                            | [components.Move](../../models/components/move.md)[] | :heavy_minus_sign:                                   | N/A                                                  |                                                      |