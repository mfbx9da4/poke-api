# .PokemonApi

All URIs are relative to *https://pokeapi.co*

| Method                                       | HTTP request                          | Description |
| -------------------------------------------- | ------------------------------------- | ----------- |
| [**pokemonRead**](PokemonApi.md#pokemonRead) | **GET** /api/v2/pokemon/{id_or_name}/ |

<!-- [**pokemonList**](PokemonApi.md#pokemonList) | **GET** /api/v2/pokemon/ |  -->

<!-- # **pokemonList**
> PokemonList200Response pokemonList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PokemonApi(configuration);

let body:.PokemonApiPokemonListRequest = {
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
};

apiInstance.pokemonList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined


### Return type

**PokemonList200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md) -->

# **pokemonRead**

> Pokemon pokemonRead()

### Example

```typescript
import { createConfiguration, PokemonApi } from "poke-api";

const configuration = createConfiguration();
const apiInstance = new PokemonApi(configuration);

// Get by ID
const result = await apiInstance.pokemonRead(1);

// Get by name
const result = await apiInstance.pokemonRead("bulbasaur");
```

### Parameters

| Name       | Type             | Description                                              |
| ---------- | ---------------- | -------------------------------------------------------- |
| `idOrName` | `string\|number` | A unique integer value identifying this stat or by name. |

### Return type

**Pokemon**

| Name                       | Type                                                                         | Nullable | Description                                                                                         |
| -------------------------- | ---------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| **id**                     | **number**                                                                   |          | The identifier for this resource                                                                    |
| **name**                   | **string**                                                                   |          | The name for this resource                                                                          |
| **baseExperience**         | **number**                                                                   |          | The base experience gained for defeating this Pokémon                                               |
| **height**                 | **number**                                                                   |          | The height of this Pokémon in decimetres                                                            |
| **isDefault**              | **boolean**                                                                  |          | Set for exactly one Pokémon used as the default for each species.                                   |
| **order**                  | **number**                                                                   |          | Order for sorting. Almost national order, except families are grouped together and sorted by stage. |
| **weight**                 | **number**                                                                   |          | The weight of this Pokémon in hectograms                                                            |
| **abilities**              | [**PokemonApiPokemonAbility**](PokemonApi.md#pokemonapipokemonability)       |          | A list of abilities this Pokémon could potentially have.                                            |
| **forms**                  | [**NamedApiResource**](NamedApiResource.md)[]                                |          | A list of forms this Pokémon can take on.                                                           |
| **gameIndices**            | [**PokemonApiVersionGameIndex**](PokemonApi.md#pokemonapiversiongameindex)[] |          | A list of game indices relevent to Pokémon item by generation.                                      |
| **heldItems**              | [**PokemonApiPokemonHeldItem**](PokemonApi.md#pokemonapipokemonhelditem)[]   |          | A list of items this Pokémon may be holding when encountered.                                       |
| **locationAreaEncounters** | **string**                                                                   |          | A link to a list of location areas, as well as encounter details pertaining to specific versions.   |
| **moves**                  | [**PokemonApiPokemonMove**](PokemonApi.md#pokemonapipokemonmove)[]           |          | A list of moves along with learn methods and level details pertaining to specific version groups.   |
| **sprites**                | [**PokemonApiPokemonSprites**](PokemonApi.md#pokemonapipokemonsprites)       |          | A set of sprites used to depict this Pokémon in the game.                                           |
| **species**                | [**NamedApiResource**](NamedApiResource.md)                                  |          | The species this Pokémon belongs to                                                                 |
| **stats**                  | [**PokemonApiPokemonStat**](PokemonApi.md#pokemonapipokemonstat)[]           |          | A list of base stat values for this Pokémon                                                         |
| **types**                  | [**PokemonApiPokemonType**](PokemonApi.md#pokemonapipokemontype)[]           |          | A list of details showing types this Pokémon has                                                    |

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Successful response | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
