import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Gender } from '../models/Gender';
import { GenderList200Response } from '../models/GenderList200Response';
export declare class GenderApiRequestFactory extends BaseAPIRequestFactory {
    genderList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    genderRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class GenderApiResponseProcessor {
    genderListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GenderList200Response>>;
    genderReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Gender>>;
}
