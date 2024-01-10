import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { EggGroup } from '../models/EggGroup';
export declare class EggGroupApiRequestFactory extends BaseAPIRequestFactory {
    eggGroupList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    eggGroupRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class EggGroupApiResponseProcessor {
    eggGroupListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<EggGroup>>>;
    eggGroupReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EggGroup>>;
}
