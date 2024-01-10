import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { PokemonHabitat } from '../models/PokemonHabitat';
import { PokemonHabitatList200Response } from '../models/PokemonHabitatList200Response';
export declare class PokemonHabitatApiRequestFactory extends BaseAPIRequestFactory {
    pokemonHabitatList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    pokemonHabitatRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class PokemonHabitatApiResponseProcessor {
    pokemonHabitatListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonHabitatList200Response>>;
    pokemonHabitatReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonHabitat>>;
}
