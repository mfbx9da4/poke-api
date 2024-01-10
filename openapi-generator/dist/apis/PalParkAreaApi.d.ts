import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { PalParkArea } from '../models/PalParkArea';
import { PalParkAreaList200Response } from '../models/PalParkAreaList200Response';
export declare class PalParkAreaApiRequestFactory extends BaseAPIRequestFactory {
    palParkAreaList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    palParkAreaRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class PalParkAreaApiResponseProcessor {
    palParkAreaListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PalParkAreaList200Response>>;
    palParkAreaReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PalParkArea>>;
}
