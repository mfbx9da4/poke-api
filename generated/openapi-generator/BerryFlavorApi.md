# .BerryFlavorApi

All URIs are relative to *https://pokeapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**berryFlavorList**](BerryFlavorApi.md#berryFlavorList) | **GET** /api/v2/berry-flavor/ | 
[**berryFlavorRead**](BerryFlavorApi.md#berryFlavorRead) | **GET** /api/v2/berry-flavor/{id}/ | 


# **berryFlavorList**
> BerryFlavorList200Response berryFlavorList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BerryFlavorApi(configuration);

let body:.BerryFlavorApiBerryFlavorListRequest = {
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
};

apiInstance.berryFlavorList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined


### Return type

**BerryFlavorList200Response**

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

# **berryFlavorRead**
> BerryFlavor berryFlavorRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BerryFlavorApi(configuration);

let body:.BerryFlavorApiBerryFlavorReadRequest = {
  // number
  id: 1,
};

apiInstance.berryFlavorRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**BerryFlavor**

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


