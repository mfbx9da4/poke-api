# BerryFlavor


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *number*                                                                 | :heavy_check_mark:                                                       | The identifier for this berry flavor resource                            |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The name for this berry flavor resource                                  |
| `berries`                                                                | [components.BerryFlavorMap](../../models/components/berryflavormap.md)[] | :heavy_minus_sign:                                                       | A list of the berries with this flavor                                   |