import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { PokemonForm } from '../models/PokemonForm';
import { PokemonFormList200Response } from '../models/PokemonFormList200Response';
export declare class PokemonFormApiRequestFactory extends BaseAPIRequestFactory {
    pokemonFormList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    pokemonFormRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class PokemonFormApiResponseProcessor {
    pokemonFormListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonFormList200Response>>;
    pokemonFormReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PokemonForm>>;
}
