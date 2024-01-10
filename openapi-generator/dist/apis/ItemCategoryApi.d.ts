import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ItemCategory } from '../models/ItemCategory';
import { ItemCategoryList200Response } from '../models/ItemCategoryList200Response';
export declare class ItemCategoryApiRequestFactory extends BaseAPIRequestFactory {
    itemCategoryList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    itemCategoryRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class ItemCategoryApiResponseProcessor {
    itemCategoryListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ItemCategoryList200Response>>;
    itemCategoryReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ItemCategory>>;
}
