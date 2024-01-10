import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { LocationArea } from '../models/LocationArea';
import { LocationAreaList200Response } from '../models/LocationAreaList200Response';
export declare class LocationAreaApiRequestFactory extends BaseAPIRequestFactory {
    locationAreaList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    locationAreaRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class LocationAreaApiResponseProcessor {
    locationAreaListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LocationAreaList200Response>>;
    locationAreaReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LocationArea>>;
}
