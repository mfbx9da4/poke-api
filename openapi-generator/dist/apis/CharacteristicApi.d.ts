import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Characteristic } from '../models/Characteristic';
export declare class CharacteristicApiRequestFactory extends BaseAPIRequestFactory {
    characteristicList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    characteristicRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class CharacteristicApiResponseProcessor {
    characteristicListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Characteristic>>>;
    characteristicReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Characteristic>>;
}
