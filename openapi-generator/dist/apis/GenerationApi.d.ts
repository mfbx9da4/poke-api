import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Generation } from '../models/Generation';
import { GenerationList200Response } from '../models/GenerationList200Response';
export declare class GenerationApiRequestFactory extends BaseAPIRequestFactory {
    generationList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    generationRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class GenerationApiResponseProcessor {
    generationListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GenerationList200Response>>;
    generationReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Generation>>;
}
