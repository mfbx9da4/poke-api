import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ContestType } from '../models/ContestType';
import { ContestTypeList200Response } from '../models/ContestTypeList200Response';
export declare class ContestTypeApiRequestFactory extends BaseAPIRequestFactory {
    contestTypeList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    contestTypeRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class ContestTypeApiResponseProcessor {
    contestTypeListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ContestTypeList200Response>>;
    contestTypeReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ContestType>>;
}
