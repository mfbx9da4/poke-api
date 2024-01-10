import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Move } from '../models/Move';
import { MoveList200Response } from '../models/MoveList200Response';
export declare class MoveApiRequestFactory extends BaseAPIRequestFactory {
    moveList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    moveRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class MoveApiResponseProcessor {
    moveListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveList200Response>>;
    moveReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Move>>;
}
