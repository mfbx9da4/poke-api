import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { MoveTarget } from '../models/MoveTarget';
import { MoveTargetList200Response } from '../models/MoveTargetList200Response';
export declare class MoveTargetApiRequestFactory extends BaseAPIRequestFactory {
    moveTargetList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    moveTargetRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class MoveTargetApiResponseProcessor {
    moveTargetListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveTargetList200Response>>;
    moveTargetReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveTarget>>;
}
