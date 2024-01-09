# LanguageListResponseBody

OK


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `count`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The total number of languages.                               | 3                                                            |
| `next`                                                       | *string*                                                     | :heavy_minus_sign:                                           | URL to retrieve the next page of languages.                  | https://pokeapi.co/api/v2/language/?offset=20&limit=20       |
| `previous`                                                   | *string*                                                     | :heavy_minus_sign:                                           | URL to retrieve the previous page of languages.              |                                                              |
| `results`                                                    | [components.Language](../../models/components/language.md)[] | :heavy_minus_sign:                                           | N/A                                                          |                                                              |