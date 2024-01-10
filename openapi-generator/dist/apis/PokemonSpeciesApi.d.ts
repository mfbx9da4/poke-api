import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { PokemonSpecies } from '../models/PokemonSpecies';
import { PokemonSpeciesList200Response } from '../models/PokemonSpeciesList200Response';
export declare class PokemonSpeciesApiRequestFactory extends BaseAPIRequestFactory {
    pokemonSpeciesList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    pokemonSpeciesRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class PokemonSpeciesApiResponseProcessor {
    pokemonSpeciesListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonSpeciesList200Response>>;
    pokemonSpeciesReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonSpecies>>;
}
