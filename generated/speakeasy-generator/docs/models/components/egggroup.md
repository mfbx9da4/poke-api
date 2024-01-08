# EggGroup


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | The identifier for this egg group resource                                   |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name for this egg group resource                                         |
| `names`                                                                      | [components.Name](../../models/components/name.md)[]                         | :heavy_check_mark:                                                           | The name of this egg group listed in different languages                     |
| `pokemonSpecies`                                                             | [components.NamedAPIResource](../../models/components/namedapiresource.md)[] | :heavy_check_mark:                                                           | A list of all Pokemon species that are members of this egg group             |