# StatListResponseBody

OK


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `count`                                              | *number*                                             | :heavy_minus_sign:                                   | The total number of stats.                           | 3                                                    |
| `next`                                               | *string*                                             | :heavy_minus_sign:                                   | URL to retrieve the next page of stats.              | https://pokeapi.co/api/v2/stat/?offset=20&limit=20   |
| `previous`                                           | *string*                                             | :heavy_minus_sign:                                   | URL to retrieve the previous page of stats.          |                                                      |
| `results`                                            | [components.Stat](../../models/components/stat.md)[] | :heavy_minus_sign:                                   | N/A                                                  |                                                      |