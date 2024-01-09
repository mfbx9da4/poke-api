# ContestTypeListResponseBody

Successful response containing a list of contest types


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `count`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The total number of contest types returned                         |
| `next`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | URL to the next page of contest types, if any                      |
| `previous`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | URL to the previous page of contest types, if any                  |
| `results`                                                          | [components.ContestType](../../models/components/contesttype.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |