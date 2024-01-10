import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { IDOrName2 } from '../models/IDOrName2';
import { Stat } from '../models/Stat';
import { StatList200Response } from '../models/StatList200Response';
export declare class StatApiRequestFactory extends BaseAPIRequestFactory {
    statList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    statRead(idOrName: IDOrName2, _options?: Configuration): Promise<RequestContext>;
}
export declare class StatApiResponseProcessor {
    statListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatList200Response>>;
    statReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Stat>>;
}
