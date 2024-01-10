import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ContestEffect } from '../models/ContestEffect';
import { ContestEffectList200Response } from '../models/ContestEffectList200Response';
export declare class ContestEffectApiRequestFactory extends BaseAPIRequestFactory {
    contestEffectList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    contestEffectRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class ContestEffectApiResponseProcessor {
    contestEffectListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ContestEffectList200Response>>;
    contestEffectReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ContestEffect>>;
}
