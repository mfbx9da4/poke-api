# EncounterCondition


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | The identifier for this encounter condition resource                         |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name for this encounter condition resource                               |
| `values`                                                                     | [components.NamedAPIResource](../../models/components/namedapiresource.md)[] | :heavy_check_mark:                                                           | A list of values that are used with this encounter condition                 |
| `names`                                                                      | [components.Name](../../models/components/name.md)[]                         | :heavy_check_mark:                                                           | The name of this encounter condition listed in different languages           |