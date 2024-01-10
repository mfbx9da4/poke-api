# NatureApi

All URIs are relative to *https://pokeapi.co*

| Method                                    | HTTP request                         | Description |
| ----------------------------------------- | ------------------------------------ | ----------- |
| [**natureRead**](NatureApi.md#natureRead) | **GET** /api/v2/nature/{id_or_name}/ |

<!-- [**natureList**](NatureApi.md#natureList) | **GET** /api/v2/nature/ |  -->

<!-- # **natureList**

> NatureList200Response natureList()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NatureApi(configuration);

let body:.NatureApiNatureListRequest = {
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
};

apiInstance.natureList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name       | Type         | Description | Notes                            |
| ---------- | ------------ | ----------- | -------------------------------- |
| **limit**  | [**number**] |             | (optional) defaults to undefined |
| **offset** | [**number**] |             | (optional) defaults to undefined |

### Return type

**NatureList200Response**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md) -->

# **natureRead**

> Nature natureRead()

### Example

```typescript
import { createConfiguration, NatureApi } from "poke-api";

const configuration = createConfiguration();
const apiInstance = new NatureApi(configuration);

// Get by ID
const result = await apiInstance.natureRead(1);

// Get by name
const result = await apiInstance.natureRead("adamant");
```

### Parameters

| Name       | Type             | Description                                              |
| ---------- | ---------------- | -------------------------------------------------------- |
| `idOrName` | `string\|number` | A unique integer value identifying this stat or by name. |

### Return type

**Nature**
| Name | Type | Nullable | Description |
| ---- | ---- | -------- | ----------- |
| **id** | **number** | | The identifier for this nature resource |
| **name** | **string** | | The name for this nature resource |
| **decreasedStat** | [**NamedApiResource**](NamedApiResource.md) | | The stat decreased by 10% in Pokémon with this nature |
| **increasedStat** | [**NamedApiResource**](NamedApiResource.md) | | The stat increased by 10% in Pokémon with this nature |
| **hatesFlavor** | [**NamedApiResource**](NamedApiResource.md) | | The flavor hated by Pokémon with this nature |
| **likesFlavor** | [**NamedApiResource**](NamedApiResource.md) | | The flavor liked by Pokémon with this nature |
| **pokeathlonStatChanges** | [**NatureStatChange**](NatureStatChange.md) | | A list of Pokéathlon stats this nature effects and how much it effects them |
| **moveBattleStylePreferences** | [**MoveBattleStylePreference**](MoveBattleStylePreference.md) | | A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. |
| **names** | [**Name**](Name.md) | | The name of this nature listed in different languages. |

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
