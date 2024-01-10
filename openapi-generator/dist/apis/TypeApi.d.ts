import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Type } from '../models/Type';
import { TypeList200Response } from '../models/TypeList200Response';
export declare class TypeApiRequestFactory extends BaseAPIRequestFactory {
    typeList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    typeRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class TypeApiResponseProcessor {
    typeListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TypeList200Response>>;
    typeReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Type>>;
}
