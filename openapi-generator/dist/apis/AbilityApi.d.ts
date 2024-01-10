import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Ability } from '../models/Ability';
import { AbilityList200Response } from '../models/AbilityList200Response';
export declare class AbilityApiRequestFactory extends BaseAPIRequestFactory {
    abilityList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    abilityRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class AbilityApiResponseProcessor {
    abilityListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AbilityList200Response>>;
    abilityReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Ability>>;
}
