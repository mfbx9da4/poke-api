# ItemListResponseBody

OK


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `count`                                              | *number*                                             | :heavy_minus_sign:                                   | The total number of items.                           | 3                                                    |
| `next`                                               | *string*                                             | :heavy_minus_sign:                                   | URL to retrieve the next page of items.              | https://pokeapi.co/api/v2/item/?offset=20&limit=20   |
| `previous`                                           | *string*                                             | :heavy_minus_sign:                                   | URL to retrieve the previous page of items.          |                                                      |
| `results`                                            | [components.Item](../../models/components/item.md)[] | :heavy_minus_sign:                                   | N/A                                                  |                                                      |