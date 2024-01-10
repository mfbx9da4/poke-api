import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { EncounterConditionValue } from '../models/EncounterConditionValue';
export declare class EncounterConditionValueApiRequestFactory extends BaseAPIRequestFactory {
    encounterConditionValueList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    encounterConditionValueRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class EncounterConditionValueApiResponseProcessor {
    encounterConditionValueListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<EncounterConditionValue>>>;
    encounterConditionValueReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EncounterConditionValue>>;
}
