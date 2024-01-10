import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ItemPocket } from '../models/ItemPocket';
import { ItemPocketList200Response } from '../models/ItemPocketList200Response';
export declare class ItemPocketApiRequestFactory extends BaseAPIRequestFactory {
    itemPocketList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    itemPocketRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class ItemPocketApiResponseProcessor {
    itemPocketListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ItemPocketList200Response>>;
    itemPocketReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ItemPocket>>;
}
