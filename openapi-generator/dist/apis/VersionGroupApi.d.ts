import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { VersionGroup } from '../models/VersionGroup';
import { VersionGroupList200Response } from '../models/VersionGroupList200Response';
export declare class VersionGroupApiRequestFactory extends BaseAPIRequestFactory {
    versionGroupList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    versionGroupRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class VersionGroupApiResponseProcessor {
    versionGroupListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VersionGroupList200Response>>;
    versionGroupReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VersionGroup>>;
}
