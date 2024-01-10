import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { MoveBattleStyle } from '../models/MoveBattleStyle';
import { MoveBattleStyleList200Response } from '../models/MoveBattleStyleList200Response';
export declare class MoveBattleStyleApiRequestFactory extends BaseAPIRequestFactory {
    moveBattleStyleList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    moveBattleStyleRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class MoveBattleStyleApiResponseProcessor {
    moveBattleStyleListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveBattleStyleList200Response>>;
    moveBattleStyleReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveBattleStyle>>;
}
