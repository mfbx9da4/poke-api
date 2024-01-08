# ItemAttributeListResponseBody

OK


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `count`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | The total number of item attributes.                                   | 3                                                                      |
| `next`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | URL to retrieve the next page of item attributes.                      | https://pokeapi.co/api/v2/item-attribute/?offset=20&limit=20           |
| `previous`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | URL to retrieve the previous page of item attributes.                  |                                                                        |
| `results`                                                              | [components.ItemAttribute](../../models/components/itemattribute.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |