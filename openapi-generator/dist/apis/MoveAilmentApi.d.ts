import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { MoveAilment } from '../models/MoveAilment';
import { MoveAilmentList200Response } from '../models/MoveAilmentList200Response';
export declare class MoveAilmentApiRequestFactory extends BaseAPIRequestFactory {
    moveAilmentList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    moveAilmentRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class MoveAilmentApiResponseProcessor {
    moveAilmentListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveAilmentList200Response>>;
    moveAilmentReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveAilment>>;
}
