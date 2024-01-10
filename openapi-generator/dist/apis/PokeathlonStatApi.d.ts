import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { PokeathlonStat } from '../models/PokeathlonStat';
import { PokeathlonStatList200Response } from '../models/PokeathlonStatList200Response';
export declare class PokeathlonStatApiRequestFactory extends BaseAPIRequestFactory {
    pokeathlonStatList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    pokeathlonStatRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class PokeathlonStatApiResponseProcessor {
    pokeathlonStatListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokeathlonStatList200Response>>;
    pokeathlonStatReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokeathlonStat>>;
}
