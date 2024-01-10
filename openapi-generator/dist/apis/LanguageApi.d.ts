import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Language } from '../models/Language';
import { LanguageList200Response } from '../models/LanguageList200Response';
export declare class LanguageApiRequestFactory extends BaseAPIRequestFactory {
    languageList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    languageRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class LanguageApiResponseProcessor {
    languageListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LanguageList200Response>>;
    languageReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Language>>;
}
