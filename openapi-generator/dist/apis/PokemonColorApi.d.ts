import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { PokemonColor } from '../models/PokemonColor';
import { PokemonColorList200Response } from '../models/PokemonColorList200Response';
export declare class PokemonColorApiRequestFactory extends BaseAPIRequestFactory {
    pokemonColorList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    pokemonColorRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class PokemonColorApiResponseProcessor {
    pokemonColorListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonColorList200Response>>;
    pokemonColorReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonColor>>;
}
