import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { MoveCategory } from '../models/MoveCategory';
import { MoveCategoryList200Response } from '../models/MoveCategoryList200Response';
export declare class MoveCategoryApiRequestFactory extends BaseAPIRequestFactory {
    moveCategoryList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    moveCategoryRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class MoveCategoryApiResponseProcessor {
    moveCategoryListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveCategoryList200Response>>;
    moveCategoryReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MoveCategory>>;
}
