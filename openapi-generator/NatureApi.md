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

- Returns a single [**Nature**](./models/Nature.ts)
- For more details see the [official documentation](https://pokeapi.co/docs/v2#natures)

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
