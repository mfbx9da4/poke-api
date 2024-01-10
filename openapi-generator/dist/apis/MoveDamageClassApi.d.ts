import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { MoveDamageClass } from '../models/MoveDamageClass';
import { MoveDamageClassList200Response } from '../models/MoveDamageClassList200Response';
export declare class MoveDamageClassApiRequestFactory extends BaseAPIRequestFactory {
    moveDamageClassList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    moveDamageClassRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class MoveDamageClassApiResponseProcessor {
    moveDamageClassListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveDamageClassList200Response>>;
    moveDamageClassReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveDamageClass>>;
}
