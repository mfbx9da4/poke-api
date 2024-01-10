import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { EncounterCondition } from '../models/EncounterCondition';
import { EncounterConditionList200Response } from '../models/EncounterConditionList200Response';
export declare class EncounterConditionApiRequestFactory extends BaseAPIRequestFactory {
    encounterConditionList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    encounterConditionRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class EncounterConditionApiResponseProcessor {
    encounterConditionListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EncounterConditionList200Response>>;
    encounterConditionReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EncounterCondition>>;
}
