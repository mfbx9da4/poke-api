# ContestEffect


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *number*                                                               | :heavy_check_mark:                                                     | The identifier for this contest effect resource                        |
| `appeal`                                                               | *number*                                                               | :heavy_check_mark:                                                     | The base number of hearts the user of this move gets                   |
| `jam`                                                                  | *number*                                                               | :heavy_check_mark:                                                     | The base number of hearts the user's opponent loses                    |
| `effectEntries`                                                        | [components.VerboseEffect](../../models/components/verboseeffect.md)[] | :heavy_check_mark:                                                     | The flavor text of this contest effect listed in different languages   |
| `flavorTextEntries`                                                    | [components.FlavorText](../../models/components/flavortext.md)[]       | :heavy_check_mark:                                                     | The flavor text of this contest effect listed in different languages   |