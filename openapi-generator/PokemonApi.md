# PokemonApi

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

- Return a single [**Pokemon**](./models/Pokemon.ts)
- For more details see the [official documentation](https://pokeapi.co/docs/v2#pokemon)

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
