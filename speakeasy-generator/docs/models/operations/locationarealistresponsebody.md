# LocationAreaListResponseBody

OK


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | The total number of location areas.                                  | 3                                                                    |
| `next`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the next page of location areas.                     | https://pokeapi.co/api/v2/location-area/?offset=20&limit=20          |
| `previous`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | URL to retrieve the previous page of location areas.                 |                                                                      |
| `results`                                                            | [components.LocationArea](../../models/components/locationarea.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |