import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ItemAttribute } from '../models/ItemAttribute';
import { ItemAttributeList200Response } from '../models/ItemAttributeList200Response';
export declare class ItemAttributeApiRequestFactory extends BaseAPIRequestFactory {
    itemAttributeList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    itemAttributeRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class ItemAttributeApiResponseProcessor {
    itemAttributeListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ItemAttributeList200Response>>;
    itemAttributeReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ItemAttribute>>;
}
