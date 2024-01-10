import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Item } from '../models/Item';
import { ItemList200Response } from '../models/ItemList200Response';
export declare class ItemApiRequestFactory extends BaseAPIRequestFactory {
    itemList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    itemRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class ItemApiResponseProcessor {
    itemListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ItemList200Response>>;
    itemReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Item>>;
}
