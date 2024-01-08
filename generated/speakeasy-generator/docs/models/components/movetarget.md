# MoveTarget

Targets moves can be directed at during battle. Targets can be Pokémon, adjacent positions, all opponents, etc.


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *number*                                                           | :heavy_check_mark:                                                 | The identifier for this move target resource                       | 1                                                                  |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The name for this move target resource                             | specific-move                                                      |
| `descriptions`                                                     | [components.Description](../../models/components/description.md)[] | :heavy_check_mark:                                                 | The description of this move target listed in different languages  |                                                                    |