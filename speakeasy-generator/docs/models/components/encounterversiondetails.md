# EncounterVersionDetails

Version details of an encounter.


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `version`                                                                  | [components.NamedAPIResource](../../models/components/namedapiresource.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `maxChance`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | The total percentage of all encounter potential.                           |
| `encounterDetails`                                                         | [components.Encounter](../../models/components/encounter.md)[]             | :heavy_minus_sign:                                                         | A list of encounters and their specifics.                                  |