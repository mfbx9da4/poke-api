# EvolutionChainListResponseBody

OK


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `count`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | The total number of evolution chains.                                    | 3                                                                        |
| `next`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | URL to retrieve the next page of evolution chains.                       | https://pokeapi.co/api/v2/evolution-chain/?offset=20&limit=20            |
| `previous`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | URL to retrieve the previous page of evolution chains.                   |                                                                          |
| `results`                                                                | [components.EvolutionChain](../../models/components/evolutionchain.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |