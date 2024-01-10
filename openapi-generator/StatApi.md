# StatApi

All URIs are relative to *https://pokeapi.co*

| Method                              | HTTP request                       | Description |
| ----------------------------------- | ---------------------------------- | ----------- |
| [**statRead**](StatApi.md#statRead) | **GET** /api/v2/stat/{id_or_name}/ |

<!-- | [**statList**](StatApi.md#statList) | **GET** /api/v2/stat/ | -->

<!-- # **statList**

> StatList200Response statList()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatApi(configuration);

let body:.StatApiStatListRequest = {
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
};

apiInstance.statList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name       | Type         | Description | Notes                            |
| ---------- | ------------ | ----------- | -------------------------------- |
| **limit**  | [**number**] |             | (optional) defaults to undefined |
| **offset** | [**number**] |             | (optional) defaults to undefined |

### Return type

**StatList200Response**

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

# **statRead**

> Stat statRead()

### Example

```typescript
import { createConfiguration, StatApi } from "";

const configuration = createConfiguration();
const apiInstance = new StatApi(configuration);

// Get stat by ID
const result = await apiInstance.statRead(1);

// Get stat by name
const result = await apiInstance.statRead("hp");
```

### Parameters

| Name       | Type             | Description                                              |
| ---------- | ---------------- | -------------------------------------------------------- |
| `idOrName` | `string\|number` | A unique integer value identifying this stat or by name. |

### Return type

**Stat**

| Name                | Type                                    | Nullable | Description                                                                                 |
| ------------------- | --------------------------------------- | -------- | ------------------------------------------------------------------------------------------- |
| **id**              | **number**                              |          | The identifier for this stat resource                                                       |
| **name**            | **string**                              |          | The name for this stat resource                                                             |
| **gameIndex**       | **number**                              |          | ID the games use for this stat                                                              |
| **isBattleOnly**    | **boolean**                             |          | Whether this stat only exists within a battle                                               |
| **affectingMoves**  | [**StatAffectSets**](StatAffectSets.md) |          | A detail of moves which affect this stat positively or negatively                           |
| **characteristics** | [**ApiResource**](ApiResource.md)       |          | A list of characteristics that are set on a Pokémon when its highest base stat is this stat |
| **moveDamageClass** | [**ApiResource**](ApiResource.md)       |          | The class of damage this stat is directly related to                                        |
| **names**           | [**Name**](Name.md)                     |          | The name of this region listed in different languages                                       |

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Successful response | -                |
