# .PokemonApi

All URIs are relative to *https://pokeapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pokemonList**](PokemonApi.md#pokemonList) | **GET** /api/v2/pokemon/ | 
[**pokemonRead**](PokemonApi.md#pokemonRead) | **GET** /api/v2/pokemon/{id_or_name}/ | 


# **pokemonList**
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pokemonRead**
> Pokemon pokemonRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PokemonApi(configuration);

let body:.PokemonApiPokemonReadRequest = {
  // IDOrName1
  idOrName: null,
};

apiInstance.pokemonRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idOrName** | **IDOrName1** |  | defaults to undefined


### Return type

**Pokemon**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


