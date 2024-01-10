import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Location } from '../models/Location';
import { LocationList200Response } from '../models/LocationList200Response';
export declare class LocationApiRequestFactory extends BaseAPIRequestFactory {
    locationList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    locationRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class LocationApiResponseProcessor {
    locationListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LocationList200Response>>;
    locationReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Location>>;
}
