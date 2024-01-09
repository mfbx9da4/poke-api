# .MoveCategoryApi

All URIs are relative to *https://pokeapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**moveCategoryList**](MoveCategoryApi.md#moveCategoryList) | **GET** /api/v2/move-category/ | 
[**moveCategoryRead**](MoveCategoryApi.md#moveCategoryRead) | **GET** /api/v2/move-category/{id}/ | 


# **moveCategoryList**
> MoveCategoryList200Response moveCategoryList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MoveCategoryApi(configuration);

let body:.MoveCategoryApiMoveCategoryListRequest = {
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
};

apiInstance.moveCategoryList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined


### Return type

**MoveCategoryList200Response**

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

# **moveCategoryRead**
> MoveCategory moveCategoryRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MoveCategoryApi(configuration);

let body:.MoveCategoryApiMoveCategoryReadRequest = {
  // number
  id: 1,
};

apiInstance.moveCategoryRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**MoveCategory**

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


