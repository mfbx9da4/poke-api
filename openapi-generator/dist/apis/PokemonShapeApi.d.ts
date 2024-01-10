import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { PokemonShape } from '../models/PokemonShape';
import { PokemonShapeList200Response } from '../models/PokemonShapeList200Response';
export declare class PokemonShapeApiRequestFactory extends BaseAPIRequestFactory {
    pokemonShapeList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    pokemonShapeRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class PokemonShapeApiResponseProcessor {
    pokemonShapeListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonShapeList200Response>>;
    pokemonShapeReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonShape>>;
}
