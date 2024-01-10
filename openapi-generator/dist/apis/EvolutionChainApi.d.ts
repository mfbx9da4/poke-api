import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { EvolutionChain } from '../models/EvolutionChain';
import { EvolutionChainList200Response } from '../models/EvolutionChainList200Response';
export declare class EvolutionChainApiRequestFactory extends BaseAPIRequestFactory {
    evolutionChainList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    evolutionChainRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class EvolutionChainApiResponseProcessor {
    evolutionChainListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EvolutionChainList200Response>>;
    evolutionChainReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EvolutionChain>>;
}
