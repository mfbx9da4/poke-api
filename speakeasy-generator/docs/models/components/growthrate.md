# GrowthRate


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *number*                                                                        | :heavy_minus_sign:                                                              | The identifier for this growth rate resource                                    |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | The name for this growth rate resource                                          |
| `formula`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | The formula used to calculate the rate at which the Pokémon species gains level |
| `descriptions`                                                                  | [components.Description](../../models/components/description.md)[]              | :heavy_minus_sign:                                                              | The description of this growth rate listed in different languages               |