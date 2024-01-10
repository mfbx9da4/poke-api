import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ItemFlingEffect } from '../models/ItemFlingEffect';
import { ItemFlingEffectList200Response } from '../models/ItemFlingEffectList200Response';
export declare class ItemFlingEffectApiRequestFactory extends BaseAPIRequestFactory {
    itemFlingEffectList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    itemFlingEffectRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class ItemFlingEffectApiResponseProcessor {
    itemFlingEffectListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ItemFlingEffectList200Response>>;
    itemFlingEffectReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ItemFlingEffect>>;
}
