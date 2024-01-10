import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { IDOrName1 } from '../models/IDOrName1';
import { Pokemon } from '../models/Pokemon';
import { PokemonList200Response } from '../models/PokemonList200Response';
export declare class PokemonApiRequestFactory extends BaseAPIRequestFactory {
    pokemonList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    pokemonRead(idOrName: IDOrName1, _options?: Configuration): Promise<RequestContext>;
}
export declare class PokemonApiResponseProcessor {
    pokemonListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonList200Response>>;
    pokemonReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Pokemon>>;
}
