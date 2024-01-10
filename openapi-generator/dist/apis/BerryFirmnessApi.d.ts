import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { BerryFirmness } from '../models/BerryFirmness';
import { BerryFirmnessList200Response } from '../models/BerryFirmnessList200Response';
export declare class BerryFirmnessApiRequestFactory extends BaseAPIRequestFactory {
    berryFirmnessList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    berryFirmnessRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class BerryFirmnessApiResponseProcessor {
    berryFirmnessListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BerryFirmnessList200Response>>;
    berryFirmnessReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BerryFirmness>>;
}
