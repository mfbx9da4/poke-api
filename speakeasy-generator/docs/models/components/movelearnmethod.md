# MoveLearnMethod

Methods by which Pokémon can learn moves.


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *number*                                                                 | :heavy_check_mark:                                                       | The identifier for this move learn method resource.                      | 1                                                                        |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The name for this move learn method resource.                            | level-up                                                                 |
| `descriptions`                                                           | [components.Description](../../models/components/description.md)[]       | :heavy_minus_sign:                                                       | The description of this move learn method listed in different languages. |                                                                          |
| `names`                                                                  | [components.Name](../../models/components/name.md)[]                     | :heavy_minus_sign:                                                       | The name of this move learn method listed in different languages.        |                                                                          |