import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Pokedex } from '../models/Pokedex';
import { PokedexList200Response } from '../models/PokedexList200Response';
export declare class PokedexApiRequestFactory extends BaseAPIRequestFactory {
    pokedexList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    pokedexRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class PokedexApiResponseProcessor {
    pokedexListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokedexList200Response>>;
    pokedexReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Pokedex>>;
}
