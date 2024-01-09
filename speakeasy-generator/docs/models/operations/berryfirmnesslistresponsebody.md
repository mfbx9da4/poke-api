# BerryFirmnessListResponseBody

OK


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `count`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | The total number of berry firmnesses available from this API.                | 5                                                                            |
| `next`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The URL for the next page of results, or null if there are no more results.  |                                                                              |
| `previous`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | The URL for the previous page of results, or null if this is the first page. |                                                                              |
| `results`                                                                    | [components.BerryFirmness](../../models/components/berryfirmness.md)[]       | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |