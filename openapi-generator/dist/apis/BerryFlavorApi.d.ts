import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { BerryFlavor } from '../models/BerryFlavor';
import { BerryFlavorList200Response } from '../models/BerryFlavorList200Response';
export declare class BerryFlavorApiRequestFactory extends BaseAPIRequestFactory {
    berryFlavorList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    berryFlavorRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class BerryFlavorApiResponseProcessor {
    berryFlavorListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BerryFlavorList200Response>>;
    berryFlavorReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BerryFlavor>>;
}
