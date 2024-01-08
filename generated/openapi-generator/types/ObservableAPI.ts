import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { APIResource } from '../models/APIResource';
import { Ability } from '../models/Ability';
import { AbilityEffectChange } from '../models/AbilityEffectChange';
import { AbilityGeneration } from '../models/AbilityGeneration';
import { AbilityNamesInner } from '../models/AbilityNamesInner';
import { AbilityNamesInnerLanguage } from '../models/AbilityNamesInnerLanguage';
import { Berry } from '../models/Berry';
import { BerryFirmness } from '../models/BerryFirmness';
import { BerryFlavor } from '../models/BerryFlavor';
import { BerryFlavorMap } from '../models/BerryFlavorMap';
import { Characteristic } from '../models/Characteristic';
import { ContestComboDetail } from '../models/ContestComboDetail';
import { ContestComboSets } from '../models/ContestComboSets';
import { ContestEffect } from '../models/ContestEffect';
import { ContestName } from '../models/ContestName';
import { ContestType } from '../models/ContestType';
import { Description } from '../models/Description';
import { Effect } from '../models/Effect';
import { EffectEffect } from '../models/EffectEffect';
import { EggGroup } from '../models/EggGroup';
import { Encounter } from '../models/Encounter';
import { EncounterCondition } from '../models/EncounterCondition';
import { EncounterConditionValue } from '../models/EncounterConditionValue';
import { EncounterMethod } from '../models/EncounterMethod';
import { EncounterMethodRate } from '../models/EncounterMethodRate';
import { EncounterVersionDetails } from '../models/EncounterVersionDetails';
import { EvolutionChain } from '../models/EvolutionChain';
import { EvolutionChainBabyTriggerItem } from '../models/EvolutionChainBabyTriggerItem';
import { EvolutionChainChain } from '../models/EvolutionChainChain';
import { EvolutionChainChainEvolutionDetailsInner } from '../models/EvolutionChainChainEvolutionDetailsInner';
import { EvolutionChainChainEvolutionDetailsInnerItem } from '../models/EvolutionChainChainEvolutionDetailsInnerItem';
import { EvolutionChainChainEvolutionDetailsInnerKnownMove } from '../models/EvolutionChainChainEvolutionDetailsInnerKnownMove';
import { EvolutionChainChainEvolutionDetailsInnerKnownMoveType } from '../models/EvolutionChainChainEvolutionDetailsInnerKnownMoveType';
import { EvolutionChainChainEvolutionDetailsInnerLocation } from '../models/EvolutionChainChainEvolutionDetailsInnerLocation';
import { EvolutionChainChainEvolutionDetailsInnerPartySpecies } from '../models/EvolutionChainChainEvolutionDetailsInnerPartySpecies';
import { EvolutionTrigger } from '../models/EvolutionTrigger';
import { FlavorText } from '../models/FlavorText';
import { Gender } from '../models/Gender';
import { GenderPokemonSpeciesDetailsInner } from '../models/GenderPokemonSpeciesDetailsInner';
import { Generation } from '../models/Generation';
import { GenerationAbilitiesInner } from '../models/GenerationAbilitiesInner';
import { GenerationGameIndex } from '../models/GenerationGameIndex';
import { GenerationNamesInner } from '../models/GenerationNamesInner';
import { Genus } from '../models/Genus';
import { GrowthRate } from '../models/GrowthRate';
import { Item } from '../models/Item';
import { ItemAttribute } from '../models/ItemAttribute';
import { ItemCategory } from '../models/ItemCategory';
import { ItemFlingEffect } from '../models/ItemFlingEffect';
import { ItemPocket } from '../models/ItemPocket';
import { Language } from '../models/Language';
import { Location } from '../models/Location';
import { LocationArea } from '../models/LocationArea';
import { Machine } from '../models/Machine';
import { MachineVersionDetail } from '../models/MachineVersionDetail';
import { Move } from '../models/Move';
import { MoveAilment } from '../models/MoveAilment';
import { MoveBattleStyle } from '../models/MoveBattleStyle';
import { MoveBattleStylePreference } from '../models/MoveBattleStylePreference';
import { MoveCategory } from '../models/MoveCategory';
import { MoveContestEffect } from '../models/MoveContestEffect';
import { MoveContestType } from '../models/MoveContestType';
import { MoveDamageClass } from '../models/MoveDamageClass';
import { MoveLearnMethod } from '../models/MoveLearnMethod';
import { MoveMetaData } from '../models/MoveMetaData';
import { MoveStatAffect } from '../models/MoveStatAffect';
import { MoveStatAffectSets } from '../models/MoveStatAffectSets';
import { MoveStatChange } from '../models/MoveStatChange';
import { MoveTarget } from '../models/MoveTarget';
import { Name } from '../models/Name';
import { NamedAPIResource } from '../models/NamedAPIResource';
import { Nature } from '../models/Nature';
import { NatureList200Response } from '../models/NatureList200Response';
import { NaturePokeathlonStatAffectSets } from '../models/NaturePokeathlonStatAffectSets';
import { NatureStatAffect } from '../models/NatureStatAffect';
import { NatureStatAffectSets } from '../models/NatureStatAffectSets';
import { NatureStatChange } from '../models/NatureStatChange';
import { PalParkArea } from '../models/PalParkArea';
import { PalParkEncounterArea } from '../models/PalParkEncounterArea';
import { PastMoveStatValues } from '../models/PastMoveStatValues';
import { PastMoveStatValuesEffectEntriesInner } from '../models/PastMoveStatValuesEffectEntriesInner';
import { PokeAthlon } from '../models/PokeAthlon';
import { PokeathlonStat } from '../models/PokeathlonStat';
import { PokeathlonStatAffect } from '../models/PokeathlonStatAffect';
import { PokeathlonStatAffectingNatures } from '../models/PokeathlonStatAffectingNatures';
import { PokeathlonStatName } from '../models/PokeathlonStatName';
import { Pokedex } from '../models/Pokedex';
import { Pokemon } from '../models/Pokemon';
import { PokemonAbility } from '../models/PokemonAbility';
import { PokemonColor } from '../models/PokemonColor';
import { PokemonEncounter } from '../models/PokemonEncounter';
import { PokemonEntry } from '../models/PokemonEntry';
import { PokemonForm } from '../models/PokemonForm';
import { PokemonHabitat } from '../models/PokemonHabitat';
import { PokemonHeldItem } from '../models/PokemonHeldItem';
import { PokemonHeldItemVersionDetailsInner } from '../models/PokemonHeldItemVersionDetailsInner';
import { PokemonList200Response } from '../models/PokemonList200Response';
import { PokemonMove } from '../models/PokemonMove';
import { PokemonMoveVersionGroupDetailsInner } from '../models/PokemonMoveVersionGroupDetailsInner';
import { PokemonShape } from '../models/PokemonShape';
import { PokemonSpecies } from '../models/PokemonSpecies';
import { PokemonSpeciesDexEntry } from '../models/PokemonSpeciesDexEntry';
import { PokemonSpeciesVariety } from '../models/PokemonSpeciesVariety';
import { PokemonSprites } from '../models/PokemonSprites';
import { PokemonStat } from '../models/PokemonStat';
import { PokemonType } from '../models/PokemonType';
import { Region } from '../models/Region';
import { Stat } from '../models/Stat';
import { StatList200Response } from '../models/StatList200Response';
import { SuperContestEffect } from '../models/SuperContestEffect';
import { Type } from '../models/Type';
import { TypeDamageRelations } from '../models/TypeDamageRelations';
import { TypeDamageRelationsDoubleDamageFromInner } from '../models/TypeDamageRelationsDoubleDamageFromInner';
import { TypeGameIndicesInner } from '../models/TypeGameIndicesInner';
import { TypeGameIndicesInnerGeneration } from '../models/TypeGameIndicesInnerGeneration';
import { TypeGeneration } from '../models/TypeGeneration';
import { TypeMoveDamageClass } from '../models/TypeMoveDamageClass';
import { TypePokemonInner } from '../models/TypePokemonInner';
import { VerboseEffect } from '../models/VerboseEffect';
import { Version } from '../models/Version';
import { VersionGameIndex } from '../models/VersionGameIndex';
import { VersionGroup } from '../models/VersionGroup';

import { NatureApiRequestFactory, NatureApiResponseProcessor} from "../apis/NatureApi";
export class ObservableNatureApi {
    private requestFactory: NatureApiRequestFactory;
    private responseProcessor: NatureApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NatureApiRequestFactory,
        responseProcessor?: NatureApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NatureApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NatureApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public natureListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<NatureList200Response>> {
        const requestContextPromise = this.requestFactory.natureList(limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.natureListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public natureList(limit?: number, offset?: number, _options?: Configuration): Observable<NatureList200Response> {
        return this.natureListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<NatureList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public natureReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Nature>> {
        const requestContextPromise = this.requestFactory.natureRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.natureReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public natureRead(id: number, _options?: Configuration): Observable<Nature> {
        return this.natureReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Nature>) => apiResponse.data));
    }

}

import { PokemonApiRequestFactory, PokemonApiResponseProcessor} from "../apis/PokemonApi";
export class ObservablePokemonApi {
    private requestFactory: PokemonApiRequestFactory;
    private responseProcessor: PokemonApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonApiRequestFactory,
        responseProcessor?: PokemonApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonList200Response>> {
        const requestContextPromise = this.requestFactory.pokemonList(limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonList200Response> {
        return this.pokemonListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<PokemonList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public pokemonReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Pokemon>> {
        const requestContextPromise = this.requestFactory.pokemonRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public pokemonRead(id: number, _options?: Configuration): Observable<Pokemon> {
        return this.pokemonReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Pokemon>) => apiResponse.data));
    }

}

import { StatApiRequestFactory, StatApiResponseProcessor} from "../apis/StatApi";
export class ObservableStatApi {
    private requestFactory: StatApiRequestFactory;
    private responseProcessor: StatApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatApiRequestFactory,
        responseProcessor?: StatApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public statListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<StatList200Response>> {
        const requestContextPromise = this.requestFactory.statList(limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public statList(limit?: number, offset?: number, _options?: Configuration): Observable<StatList200Response> {
        return this.statListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<StatList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public statReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Stat>> {
        const requestContextPromise = this.requestFactory.statRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public statRead(id: number, _options?: Configuration): Observable<Stat> {
        return this.statReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Stat>) => apiResponse.data));
    }

}
