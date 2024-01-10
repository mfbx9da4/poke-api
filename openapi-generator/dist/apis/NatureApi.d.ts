import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { IDOrName } from '../models/IDOrName';
import { Nature } from '../models/Nature';
import { NatureList200Response } from '../models/NatureList200Response';
export declare class NatureApiRequestFactory extends BaseAPIRequestFactory {
    natureList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    natureRead(idOrName: IDOrName, _options?: Configuration): Promise<RequestContext>;
}
export declare class NatureApiResponseProcessor {
    natureListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NatureList200Response>>;
    natureReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Nature>>;
}
