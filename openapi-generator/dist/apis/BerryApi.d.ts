import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Berry } from '../models/Berry';
export declare class BerryApiRequestFactory extends BaseAPIRequestFactory {
    berryList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    berryRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class BerryApiResponseProcessor {
    berryListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Berry>>>;
    berryReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Berry>>;
}
