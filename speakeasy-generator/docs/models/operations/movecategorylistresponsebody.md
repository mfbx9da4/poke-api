# MoveCategoryListResponseBody

OK


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | The total number of move categories.                                 | 3                                                                    |
| `next`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the next page of move categories.                    | https://pokeapi.co/api/v2/move-category/?offset=20&limit=20          |
| `previous`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the previous page of move categories.                |                                                                      |
| `results`                                                            | [components.MoveCategory](../../models/components/movecategory.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |