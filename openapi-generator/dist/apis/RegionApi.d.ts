import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Region } from '../models/Region';
import { RegionList200Response } from '../models/RegionList200Response';
export declare class RegionApiRequestFactory extends BaseAPIRequestFactory {
    regionList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    regionRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class RegionApiResponseProcessor {
    regionListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RegionList200Response>>;
    regionReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Region>>;
}
