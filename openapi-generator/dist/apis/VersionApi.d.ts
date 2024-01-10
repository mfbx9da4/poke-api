import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Version } from '../models/Version';
import { VersionList200Response } from '../models/VersionList200Response';
export declare class VersionApiRequestFactory extends BaseAPIRequestFactory {
    versionList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    versionRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class VersionApiResponseProcessor {
    versionListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VersionList200Response>>;
    versionReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Version>>;
}
