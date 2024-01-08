# VersionGroupListResponseBody

OK


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | The total number of version groups.                                  | 3                                                                    |
| `next`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the next page of version groups.                     | https://pokeapi.co/api/v2/version-group/?offset=20&limit=20          |
| `previous`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the previous page of version groups.                 |                                                                      |
| `results`                                                            | [components.VersionGroup](../../models/components/versiongroup.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |