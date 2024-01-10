import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { MoveLearnMethod } from '../models/MoveLearnMethod';
import { MoveLearnMethodList200Response } from '../models/MoveLearnMethodList200Response';
export declare class MoveLearnMethodApiRequestFactory extends BaseAPIRequestFactory {
    moveLearnMethodList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    moveLearnMethodRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class MoveLearnMethodApiResponseProcessor {
    moveLearnMethodListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveLearnMethodList200Response>>;
    moveLearnMethodReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveLearnMethod>>;
}
