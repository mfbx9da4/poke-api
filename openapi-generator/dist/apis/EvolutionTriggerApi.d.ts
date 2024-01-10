import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { EvolutionTrigger } from '../models/EvolutionTrigger';
import { EvolutionTriggerList200Response } from '../models/EvolutionTriggerList200Response';
export declare class EvolutionTriggerApiRequestFactory extends BaseAPIRequestFactory {
    evolutionTriggerList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    evolutionTriggerRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class EvolutionTriggerApiResponseProcessor {
    evolutionTriggerListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EvolutionTriggerList200Response>>;
    evolutionTriggerReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EvolutionTrigger>>;
}
