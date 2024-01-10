import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GrowthRate } from '../models/GrowthRate';
import { GrowthRateList200Response } from '../models/GrowthRateList200Response';
export declare class GrowthRateApiRequestFactory extends BaseAPIRequestFactory {
    growthRateList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    growthRateRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class GrowthRateApiResponseProcessor {
    growthRateListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GrowthRateList200Response>>;
    growthRateReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GrowthRate>>;
}
