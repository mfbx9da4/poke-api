# .MoveTargetApi

All URIs are relative to *https://pokeapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**moveTargetList**](MoveTargetApi.md#moveTargetList) | **GET** /api/v2/move-target/ | 
[**moveTargetRead**](MoveTargetApi.md#moveTargetRead) | **GET** /api/v2/move-target/{id}/ | 


# **moveTargetList**
> MoveTargetList200Response moveTargetList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MoveTargetApi(configuration);

let body:.MoveTargetApiMoveTargetListRequest = {
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
};

apiInstance.moveTargetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined


### Return type

**MoveTargetList200Response**

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

# **moveTargetRead**
> MoveTarget moveTargetRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MoveTargetApi(configuration);

let body:.MoveTargetApiMoveTargetReadRequest = {
  // number
  id: 1,
};

apiInstance.moveTargetRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**MoveTarget**

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


