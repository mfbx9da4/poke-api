import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { EncounterMethod } from '../models/EncounterMethod';
import { EncounterMethodList200Response } from '../models/EncounterMethodList200Response';
export declare class EncounterMethodApiRequestFactory extends BaseAPIRequestFactory {
    encounterMethodList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    encounterMethodRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class EncounterMethodApiResponseProcessor {
    encounterMethodListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EncounterMethodList200Response>>;
    encounterMethodReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EncounterMethod>>;
}
