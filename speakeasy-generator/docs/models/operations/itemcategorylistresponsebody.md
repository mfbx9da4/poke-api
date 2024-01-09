# ItemCategoryListResponseBody

OK


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | The total number of item categories.                                 | 3                                                                    |
| `next`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the next page of item categories.                    | https://pokeapi.co/api/v2/item-category/?offset=20&limit=20          |
| `previous`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the previous page of item categories.                |                                                                      |
| `results`                                                            | [components.ItemCategory](../../models/components/itemcategory.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |