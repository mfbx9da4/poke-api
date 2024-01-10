import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { SuperContestEffect } from '../models/SuperContestEffect';
import { SuperContestEffectList200Response } from '../models/SuperContestEffectList200Response';
export declare class SuperContestEffectApiRequestFactory extends BaseAPIRequestFactory {
    superContestEffectList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    superContestEffectRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class SuperContestEffectApiResponseProcessor {
    superContestEffectListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuperContestEffectList200Response>>;
    superContestEffectReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuperContestEffect>>;
}
