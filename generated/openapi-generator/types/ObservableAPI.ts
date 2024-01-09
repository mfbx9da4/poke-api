import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { APIResource } from '../models/APIResource';
import { Ability } from '../models/Ability';
import { AbilityEffectChange } from '../models/AbilityEffectChange';
import { AbilityGeneration } from '../models/AbilityGeneration';
import { AbilityList200Response } from '../models/AbilityList200Response';
import { AbilityNamesInner } from '../models/AbilityNamesInner';
import { AbilityNamesInnerLanguage } from '../models/AbilityNamesInnerLanguage';
import { Berry } from '../models/Berry';
import { BerryFirmness } from '../models/BerryFirmness';
import { BerryFirmnessList200Response } from '../models/BerryFirmnessList200Response';
import { BerryFlavor } from '../models/BerryFlavor';
import { BerryFlavorList200Response } from '../models/BerryFlavorList200Response';
import { BerryFlavorMap } from '../models/BerryFlavorMap';
import { Characteristic } from '../models/Characteristic';
import { ContestComboDetail } from '../models/ContestComboDetail';
import { ContestComboSets } from '../models/ContestComboSets';
import { ContestEffect } from '../models/ContestEffect';
import { ContestEffectList200Response } from '../models/ContestEffectList200Response';
import { ContestName } from '../models/ContestName';
import { ContestType } from '../models/ContestType';
import { ContestTypeList200Response } from '../models/ContestTypeList200Response';
import { Description } from '../models/Description';
import { Effect } from '../models/Effect';
import { EffectEffect } from '../models/EffectEffect';
import { EggGroup } from '../models/EggGroup';
import { Encounter } from '../models/Encounter';
import { EncounterCondition } from '../models/EncounterCondition';
import { EncounterConditionList200Response } from '../models/EncounterConditionList200Response';
import { EncounterConditionValue } from '../models/EncounterConditionValue';
import { EncounterMethod } from '../models/EncounterMethod';
import { EncounterMethodList200Response } from '../models/EncounterMethodList200Response';
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
import { EvolutionChainList200Response } from '../models/EvolutionChainList200Response';
import { EvolutionTrigger } from '../models/EvolutionTrigger';
import { EvolutionTriggerList200Response } from '../models/EvolutionTriggerList200Response';
import { FlavorText } from '../models/FlavorText';
import { Gender } from '../models/Gender';
import { GenderList200Response } from '../models/GenderList200Response';
import { GenderPokemonSpeciesDetailsInner } from '../models/GenderPokemonSpeciesDetailsInner';
import { Generation } from '../models/Generation';
import { GenerationAbilitiesInner } from '../models/GenerationAbilitiesInner';
import { GenerationGameIndex } from '../models/GenerationGameIndex';
import { GenerationList200Response } from '../models/GenerationList200Response';
import { GenerationNamesInner } from '../models/GenerationNamesInner';
import { Genus } from '../models/Genus';
import { GrowthRate } from '../models/GrowthRate';
import { GrowthRateList200Response } from '../models/GrowthRateList200Response';
import { IDOrName } from '../models/IDOrName';
import { IDOrName1 } from '../models/IDOrName1';
import { IDOrName2 } from '../models/IDOrName2';
import { Item } from '../models/Item';
import { ItemAttribute } from '../models/ItemAttribute';
import { ItemAttributeList200Response } from '../models/ItemAttributeList200Response';
import { ItemCategory } from '../models/ItemCategory';
import { ItemCategoryList200Response } from '../models/ItemCategoryList200Response';
import { ItemFlingEffect } from '../models/ItemFlingEffect';
import { ItemFlingEffectList200Response } from '../models/ItemFlingEffectList200Response';
import { ItemList200Response } from '../models/ItemList200Response';
import { ItemPocket } from '../models/ItemPocket';
import { ItemPocketList200Response } from '../models/ItemPocketList200Response';
import { Language } from '../models/Language';
import { LanguageList200Response } from '../models/LanguageList200Response';
import { Location } from '../models/Location';
import { LocationArea } from '../models/LocationArea';
import { LocationAreaList200Response } from '../models/LocationAreaList200Response';
import { LocationList200Response } from '../models/LocationList200Response';
import { Machine } from '../models/Machine';
import { MachineList200Response } from '../models/MachineList200Response';
import { MachineVersionDetail } from '../models/MachineVersionDetail';
import { Move } from '../models/Move';
import { MoveAilment } from '../models/MoveAilment';
import { MoveAilmentList200Response } from '../models/MoveAilmentList200Response';
import { MoveBattleStyle } from '../models/MoveBattleStyle';
import { MoveBattleStyleList200Response } from '../models/MoveBattleStyleList200Response';
import { MoveBattleStylePreference } from '../models/MoveBattleStylePreference';
import { MoveCategory } from '../models/MoveCategory';
import { MoveCategoryList200Response } from '../models/MoveCategoryList200Response';
import { MoveContestEffect } from '../models/MoveContestEffect';
import { MoveContestType } from '../models/MoveContestType';
import { MoveDamageClass } from '../models/MoveDamageClass';
import { MoveDamageClassList200Response } from '../models/MoveDamageClassList200Response';
import { MoveLearnMethod } from '../models/MoveLearnMethod';
import { MoveLearnMethodList200Response } from '../models/MoveLearnMethodList200Response';
import { MoveList200Response } from '../models/MoveList200Response';
import { MoveMetaData } from '../models/MoveMetaData';
import { MoveStatAffect } from '../models/MoveStatAffect';
import { MoveStatAffectSets } from '../models/MoveStatAffectSets';
import { MoveStatChange } from '../models/MoveStatChange';
import { MoveTarget } from '../models/MoveTarget';
import { MoveTargetList200Response } from '../models/MoveTargetList200Response';
import { Name } from '../models/Name';
import { NamedAPIResource } from '../models/NamedAPIResource';
import { Nature } from '../models/Nature';
import { NatureList200Response } from '../models/NatureList200Response';
import { NaturePokeathlonStatAffectSets } from '../models/NaturePokeathlonStatAffectSets';
import { NatureStatAffect } from '../models/NatureStatAffect';
import { NatureStatAffectSets } from '../models/NatureStatAffectSets';
import { NatureStatChange } from '../models/NatureStatChange';
import { PalParkArea } from '../models/PalParkArea';
import { PalParkAreaList200Response } from '../models/PalParkAreaList200Response';
import { PalParkEncounterArea } from '../models/PalParkEncounterArea';
import { PastMoveStatValues } from '../models/PastMoveStatValues';
import { PastMoveStatValuesEffectEntriesInner } from '../models/PastMoveStatValuesEffectEntriesInner';
import { PokeAthlon } from '../models/PokeAthlon';
import { PokeathlonStat } from '../models/PokeathlonStat';
import { PokeathlonStatAffect } from '../models/PokeathlonStatAffect';
import { PokeathlonStatAffectingNatures } from '../models/PokeathlonStatAffectingNatures';
import { PokeathlonStatList200Response } from '../models/PokeathlonStatList200Response';
import { PokeathlonStatName } from '../models/PokeathlonStatName';
import { Pokedex } from '../models/Pokedex';
import { PokedexList200Response } from '../models/PokedexList200Response';
import { Pokemon } from '../models/Pokemon';
import { PokemonAbility } from '../models/PokemonAbility';
import { PokemonColor } from '../models/PokemonColor';
import { PokemonColorList200Response } from '../models/PokemonColorList200Response';
import { PokemonEncounter } from '../models/PokemonEncounter';
import { PokemonEntry } from '../models/PokemonEntry';
import { PokemonForm } from '../models/PokemonForm';
import { PokemonFormList200Response } from '../models/PokemonFormList200Response';
import { PokemonHabitat } from '../models/PokemonHabitat';
import { PokemonHabitatList200Response } from '../models/PokemonHabitatList200Response';
import { PokemonHeldItem } from '../models/PokemonHeldItem';
import { PokemonHeldItemVersionDetailsInner } from '../models/PokemonHeldItemVersionDetailsInner';
import { PokemonList200Response } from '../models/PokemonList200Response';
import { PokemonMove } from '../models/PokemonMove';
import { PokemonMoveVersionGroupDetailsInner } from '../models/PokemonMoveVersionGroupDetailsInner';
import { PokemonShape } from '../models/PokemonShape';
import { PokemonShapeList200Response } from '../models/PokemonShapeList200Response';
import { PokemonSpecies } from '../models/PokemonSpecies';
import { PokemonSpeciesDexEntry } from '../models/PokemonSpeciesDexEntry';
import { PokemonSpeciesList200Response } from '../models/PokemonSpeciesList200Response';
import { PokemonSpeciesVariety } from '../models/PokemonSpeciesVariety';
import { PokemonSprites } from '../models/PokemonSprites';
import { PokemonStat } from '../models/PokemonStat';
import { PokemonType } from '../models/PokemonType';
import { Region } from '../models/Region';
import { RegionList200Response } from '../models/RegionList200Response';
import { Stat } from '../models/Stat';
import { StatList200Response } from '../models/StatList200Response';
import { SuperContestEffect } from '../models/SuperContestEffect';
import { SuperContestEffectList200Response } from '../models/SuperContestEffectList200Response';
import { Type } from '../models/Type';
import { TypeDamageRelations } from '../models/TypeDamageRelations';
import { TypeDamageRelationsDoubleDamageFromInner } from '../models/TypeDamageRelationsDoubleDamageFromInner';
import { TypeGameIndicesInner } from '../models/TypeGameIndicesInner';
import { TypeGameIndicesInnerGeneration } from '../models/TypeGameIndicesInnerGeneration';
import { TypeGeneration } from '../models/TypeGeneration';
import { TypeList200Response } from '../models/TypeList200Response';
import { TypeMoveDamageClass } from '../models/TypeMoveDamageClass';
import { TypePokemonInner } from '../models/TypePokemonInner';
import { VerboseEffect } from '../models/VerboseEffect';
import { Version } from '../models/Version';
import { VersionGameIndex } from '../models/VersionGameIndex';
import { VersionGroup } from '../models/VersionGroup';
import { VersionGroupList200Response } from '../models/VersionGroupList200Response';
import { VersionList200Response } from '../models/VersionList200Response';

import { AbilityApiRequestFactory, AbilityApiResponseProcessor} from "../apis/AbilityApi";
export class ObservableAbilityApi {
    private requestFactory: AbilityApiRequestFactory;
    private responseProcessor: AbilityApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AbilityApiRequestFactory,
        responseProcessor?: AbilityApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AbilityApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AbilityApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public abilityListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<AbilityList200Response>> {
        const requestContextPromise = this.requestFactory.abilityList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.abilityListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public abilityList(limit?: number, offset?: number, _options?: Configuration): Observable<AbilityList200Response> {
        return this.abilityListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<AbilityList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public abilityReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Ability>> {
        const requestContextPromise = this.requestFactory.abilityRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.abilityReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public abilityRead(id: number, _options?: Configuration): Observable<Ability> {
        return this.abilityReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Ability>) => apiResponse.data));
    }

}

import { BerryApiRequestFactory, BerryApiResponseProcessor} from "../apis/BerryApi";
export class ObservableBerryApi {
    private requestFactory: BerryApiRequestFactory;
    private responseProcessor: BerryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BerryApiRequestFactory,
        responseProcessor?: BerryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BerryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BerryApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<Array<Berry>>> {
        const requestContextPromise = this.requestFactory.berryList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.berryListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryList(limit?: number, offset?: number, _options?: Configuration): Observable<Array<Berry>> {
        return this.berryListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<Berry>>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public berryReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Berry>> {
        const requestContextPromise = this.requestFactory.berryRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.berryReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public berryRead(id: number, _options?: Configuration): Observable<Berry> {
        return this.berryReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Berry>) => apiResponse.data));
    }

}

import { BerryFirmnessApiRequestFactory, BerryFirmnessApiResponseProcessor} from "../apis/BerryFirmnessApi";
export class ObservableBerryFirmnessApi {
    private requestFactory: BerryFirmnessApiRequestFactory;
    private responseProcessor: BerryFirmnessApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BerryFirmnessApiRequestFactory,
        responseProcessor?: BerryFirmnessApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BerryFirmnessApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BerryFirmnessApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryFirmnessListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<BerryFirmnessList200Response>> {
        const requestContextPromise = this.requestFactory.berryFirmnessList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.berryFirmnessListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryFirmnessList(limit?: number, offset?: number, _options?: Configuration): Observable<BerryFirmnessList200Response> {
        return this.berryFirmnessListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<BerryFirmnessList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public berryFirmnessReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<BerryFirmness>> {
        const requestContextPromise = this.requestFactory.berryFirmnessRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.berryFirmnessReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public berryFirmnessRead(id: number, _options?: Configuration): Observable<BerryFirmness> {
        return this.berryFirmnessReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<BerryFirmness>) => apiResponse.data));
    }

}

import { BerryFlavorApiRequestFactory, BerryFlavorApiResponseProcessor} from "../apis/BerryFlavorApi";
export class ObservableBerryFlavorApi {
    private requestFactory: BerryFlavorApiRequestFactory;
    private responseProcessor: BerryFlavorApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BerryFlavorApiRequestFactory,
        responseProcessor?: BerryFlavorApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BerryFlavorApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BerryFlavorApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryFlavorListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<BerryFlavorList200Response>> {
        const requestContextPromise = this.requestFactory.berryFlavorList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.berryFlavorListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryFlavorList(limit?: number, offset?: number, _options?: Configuration): Observable<BerryFlavorList200Response> {
        return this.berryFlavorListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<BerryFlavorList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public berryFlavorReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<BerryFlavor>> {
        const requestContextPromise = this.requestFactory.berryFlavorRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.berryFlavorReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public berryFlavorRead(id: number, _options?: Configuration): Observable<BerryFlavor> {
        return this.berryFlavorReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<BerryFlavor>) => apiResponse.data));
    }

}

import { CharacteristicApiRequestFactory, CharacteristicApiResponseProcessor} from "../apis/CharacteristicApi";
export class ObservableCharacteristicApi {
    private requestFactory: CharacteristicApiRequestFactory;
    private responseProcessor: CharacteristicApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CharacteristicApiRequestFactory,
        responseProcessor?: CharacteristicApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CharacteristicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CharacteristicApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public characteristicListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<Array<Characteristic>>> {
        const requestContextPromise = this.requestFactory.characteristicList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.characteristicListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public characteristicList(limit?: number, offset?: number, _options?: Configuration): Observable<Array<Characteristic>> {
        return this.characteristicListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<Characteristic>>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public characteristicReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Characteristic>> {
        const requestContextPromise = this.requestFactory.characteristicRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.characteristicReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public characteristicRead(id: number, _options?: Configuration): Observable<Characteristic> {
        return this.characteristicReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Characteristic>) => apiResponse.data));
    }

}

import { ContestEffectApiRequestFactory, ContestEffectApiResponseProcessor} from "../apis/ContestEffectApi";
export class ObservableContestEffectApi {
    private requestFactory: ContestEffectApiRequestFactory;
    private responseProcessor: ContestEffectApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContestEffectApiRequestFactory,
        responseProcessor?: ContestEffectApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContestEffectApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContestEffectApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public contestEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ContestEffectList200Response>> {
        const requestContextPromise = this.requestFactory.contestEffectList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contestEffectListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public contestEffectList(limit?: number, offset?: number, _options?: Configuration): Observable<ContestEffectList200Response> {
        return this.contestEffectListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ContestEffectList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public contestEffectReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ContestEffect>> {
        const requestContextPromise = this.requestFactory.contestEffectRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contestEffectReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public contestEffectRead(id: number, _options?: Configuration): Observable<ContestEffect> {
        return this.contestEffectReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ContestEffect>) => apiResponse.data));
    }

}

import { ContestTypeApiRequestFactory, ContestTypeApiResponseProcessor} from "../apis/ContestTypeApi";
export class ObservableContestTypeApi {
    private requestFactory: ContestTypeApiRequestFactory;
    private responseProcessor: ContestTypeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContestTypeApiRequestFactory,
        responseProcessor?: ContestTypeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContestTypeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContestTypeApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public contestTypeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ContestTypeList200Response>> {
        const requestContextPromise = this.requestFactory.contestTypeList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contestTypeListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public contestTypeList(limit?: number, offset?: number, _options?: Configuration): Observable<ContestTypeList200Response> {
        return this.contestTypeListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ContestTypeList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public contestTypeReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ContestType>> {
        const requestContextPromise = this.requestFactory.contestTypeRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contestTypeReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public contestTypeRead(id: number, _options?: Configuration): Observable<ContestType> {
        return this.contestTypeReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ContestType>) => apiResponse.data));
    }

}

import { EggGroupApiRequestFactory, EggGroupApiResponseProcessor} from "../apis/EggGroupApi";
export class ObservableEggGroupApi {
    private requestFactory: EggGroupApiRequestFactory;
    private responseProcessor: EggGroupApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EggGroupApiRequestFactory,
        responseProcessor?: EggGroupApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EggGroupApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EggGroupApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public eggGroupListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<Array<EggGroup>>> {
        const requestContextPromise = this.requestFactory.eggGroupList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eggGroupListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public eggGroupList(limit?: number, offset?: number, _options?: Configuration): Observable<Array<EggGroup>> {
        return this.eggGroupListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<EggGroup>>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public eggGroupReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EggGroup>> {
        const requestContextPromise = this.requestFactory.eggGroupRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eggGroupReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public eggGroupRead(id: number, _options?: Configuration): Observable<EggGroup> {
        return this.eggGroupReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EggGroup>) => apiResponse.data));
    }

}

import { EncounterConditionApiRequestFactory, EncounterConditionApiResponseProcessor} from "../apis/EncounterConditionApi";
export class ObservableEncounterConditionApi {
    private requestFactory: EncounterConditionApiRequestFactory;
    private responseProcessor: EncounterConditionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EncounterConditionApiRequestFactory,
        responseProcessor?: EncounterConditionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EncounterConditionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EncounterConditionApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterConditionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<EncounterConditionList200Response>> {
        const requestContextPromise = this.requestFactory.encounterConditionList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.encounterConditionListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterConditionList(limit?: number, offset?: number, _options?: Configuration): Observable<EncounterConditionList200Response> {
        return this.encounterConditionListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<EncounterConditionList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public encounterConditionReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EncounterCondition>> {
        const requestContextPromise = this.requestFactory.encounterConditionRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.encounterConditionReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public encounterConditionRead(id: number, _options?: Configuration): Observable<EncounterCondition> {
        return this.encounterConditionReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EncounterCondition>) => apiResponse.data));
    }

}

import { EncounterConditionValueApiRequestFactory, EncounterConditionValueApiResponseProcessor} from "../apis/EncounterConditionValueApi";
export class ObservableEncounterConditionValueApi {
    private requestFactory: EncounterConditionValueApiRequestFactory;
    private responseProcessor: EncounterConditionValueApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EncounterConditionValueApiRequestFactory,
        responseProcessor?: EncounterConditionValueApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EncounterConditionValueApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EncounterConditionValueApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterConditionValueListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<Array<EncounterConditionValue>>> {
        const requestContextPromise = this.requestFactory.encounterConditionValueList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.encounterConditionValueListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterConditionValueList(limit?: number, offset?: number, _options?: Configuration): Observable<Array<EncounterConditionValue>> {
        return this.encounterConditionValueListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<EncounterConditionValue>>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public encounterConditionValueReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EncounterConditionValue>> {
        const requestContextPromise = this.requestFactory.encounterConditionValueRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.encounterConditionValueReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public encounterConditionValueRead(id: number, _options?: Configuration): Observable<EncounterConditionValue> {
        return this.encounterConditionValueReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EncounterConditionValue>) => apiResponse.data));
    }

}

import { EncounterMethodApiRequestFactory, EncounterMethodApiResponseProcessor} from "../apis/EncounterMethodApi";
export class ObservableEncounterMethodApi {
    private requestFactory: EncounterMethodApiRequestFactory;
    private responseProcessor: EncounterMethodApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EncounterMethodApiRequestFactory,
        responseProcessor?: EncounterMethodApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EncounterMethodApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EncounterMethodApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterMethodListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<EncounterMethodList200Response>> {
        const requestContextPromise = this.requestFactory.encounterMethodList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.encounterMethodListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterMethodList(limit?: number, offset?: number, _options?: Configuration): Observable<EncounterMethodList200Response> {
        return this.encounterMethodListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<EncounterMethodList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public encounterMethodReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EncounterMethod>> {
        const requestContextPromise = this.requestFactory.encounterMethodRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.encounterMethodReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public encounterMethodRead(id: number, _options?: Configuration): Observable<EncounterMethod> {
        return this.encounterMethodReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EncounterMethod>) => apiResponse.data));
    }

}

import { EvolutionChainApiRequestFactory, EvolutionChainApiResponseProcessor} from "../apis/EvolutionChainApi";
export class ObservableEvolutionChainApi {
    private requestFactory: EvolutionChainApiRequestFactory;
    private responseProcessor: EvolutionChainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EvolutionChainApiRequestFactory,
        responseProcessor?: EvolutionChainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EvolutionChainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EvolutionChainApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public evolutionChainListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<EvolutionChainList200Response>> {
        const requestContextPromise = this.requestFactory.evolutionChainList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.evolutionChainListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public evolutionChainList(limit?: number, offset?: number, _options?: Configuration): Observable<EvolutionChainList200Response> {
        return this.evolutionChainListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<EvolutionChainList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public evolutionChainReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EvolutionChain>> {
        const requestContextPromise = this.requestFactory.evolutionChainRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.evolutionChainReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public evolutionChainRead(id: number, _options?: Configuration): Observable<EvolutionChain> {
        return this.evolutionChainReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EvolutionChain>) => apiResponse.data));
    }

}

import { EvolutionTriggerApiRequestFactory, EvolutionTriggerApiResponseProcessor} from "../apis/EvolutionTriggerApi";
export class ObservableEvolutionTriggerApi {
    private requestFactory: EvolutionTriggerApiRequestFactory;
    private responseProcessor: EvolutionTriggerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EvolutionTriggerApiRequestFactory,
        responseProcessor?: EvolutionTriggerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EvolutionTriggerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EvolutionTriggerApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public evolutionTriggerListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<EvolutionTriggerList200Response>> {
        const requestContextPromise = this.requestFactory.evolutionTriggerList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.evolutionTriggerListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public evolutionTriggerList(limit?: number, offset?: number, _options?: Configuration): Observable<EvolutionTriggerList200Response> {
        return this.evolutionTriggerListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<EvolutionTriggerList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public evolutionTriggerReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EvolutionTrigger>> {
        const requestContextPromise = this.requestFactory.evolutionTriggerRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.evolutionTriggerReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public evolutionTriggerRead(id: number, _options?: Configuration): Observable<EvolutionTrigger> {
        return this.evolutionTriggerReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EvolutionTrigger>) => apiResponse.data));
    }

}

import { GenderApiRequestFactory, GenderApiResponseProcessor} from "../apis/GenderApi";
export class ObservableGenderApi {
    private requestFactory: GenderApiRequestFactory;
    private responseProcessor: GenderApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GenderApiRequestFactory,
        responseProcessor?: GenderApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GenderApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GenderApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public genderListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<GenderList200Response>> {
        const requestContextPromise = this.requestFactory.genderList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.genderListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public genderList(limit?: number, offset?: number, _options?: Configuration): Observable<GenderList200Response> {
        return this.genderListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<GenderList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public genderReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Gender>> {
        const requestContextPromise = this.requestFactory.genderRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.genderReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public genderRead(id: number, _options?: Configuration): Observable<Gender> {
        return this.genderReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Gender>) => apiResponse.data));
    }

}

import { GenerationApiRequestFactory, GenerationApiResponseProcessor} from "../apis/GenerationApi";
export class ObservableGenerationApi {
    private requestFactory: GenerationApiRequestFactory;
    private responseProcessor: GenerationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GenerationApiRequestFactory,
        responseProcessor?: GenerationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GenerationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GenerationApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public generationListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<GenerationList200Response>> {
        const requestContextPromise = this.requestFactory.generationList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generationListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public generationList(limit?: number, offset?: number, _options?: Configuration): Observable<GenerationList200Response> {
        return this.generationListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<GenerationList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public generationReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Generation>> {
        const requestContextPromise = this.requestFactory.generationRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generationReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public generationRead(id: number, _options?: Configuration): Observable<Generation> {
        return this.generationReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Generation>) => apiResponse.data));
    }

}

import { GrowthRateApiRequestFactory, GrowthRateApiResponseProcessor} from "../apis/GrowthRateApi";
export class ObservableGrowthRateApi {
    private requestFactory: GrowthRateApiRequestFactory;
    private responseProcessor: GrowthRateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GrowthRateApiRequestFactory,
        responseProcessor?: GrowthRateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GrowthRateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GrowthRateApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public growthRateListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<GrowthRateList200Response>> {
        const requestContextPromise = this.requestFactory.growthRateList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.growthRateListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public growthRateList(limit?: number, offset?: number, _options?: Configuration): Observable<GrowthRateList200Response> {
        return this.growthRateListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<GrowthRateList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public growthRateReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<GrowthRate>> {
        const requestContextPromise = this.requestFactory.growthRateRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.growthRateReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public growthRateRead(id: number, _options?: Configuration): Observable<GrowthRate> {
        return this.growthRateReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<GrowthRate>) => apiResponse.data));
    }

}

import { ItemApiRequestFactory, ItemApiResponseProcessor} from "../apis/ItemApi";
export class ObservableItemApi {
    private requestFactory: ItemApiRequestFactory;
    private responseProcessor: ItemApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemApiRequestFactory,
        responseProcessor?: ItemApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ItemList200Response>> {
        const requestContextPromise = this.requestFactory.itemList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemList(limit?: number, offset?: number, _options?: Configuration): Observable<ItemList200Response> {
        return this.itemListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ItemList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public itemReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Item>> {
        const requestContextPromise = this.requestFactory.itemRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public itemRead(id: number, _options?: Configuration): Observable<Item> {
        return this.itemReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Item>) => apiResponse.data));
    }

}

import { ItemAttributeApiRequestFactory, ItemAttributeApiResponseProcessor} from "../apis/ItemAttributeApi";
export class ObservableItemAttributeApi {
    private requestFactory: ItemAttributeApiRequestFactory;
    private responseProcessor: ItemAttributeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemAttributeApiRequestFactory,
        responseProcessor?: ItemAttributeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemAttributeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemAttributeApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemAttributeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ItemAttributeList200Response>> {
        const requestContextPromise = this.requestFactory.itemAttributeList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemAttributeListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemAttributeList(limit?: number, offset?: number, _options?: Configuration): Observable<ItemAttributeList200Response> {
        return this.itemAttributeListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ItemAttributeList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public itemAttributeReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ItemAttribute>> {
        const requestContextPromise = this.requestFactory.itemAttributeRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemAttributeReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public itemAttributeRead(id: number, _options?: Configuration): Observable<ItemAttribute> {
        return this.itemAttributeReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ItemAttribute>) => apiResponse.data));
    }

}

import { ItemCategoryApiRequestFactory, ItemCategoryApiResponseProcessor} from "../apis/ItemCategoryApi";
export class ObservableItemCategoryApi {
    private requestFactory: ItemCategoryApiRequestFactory;
    private responseProcessor: ItemCategoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemCategoryApiRequestFactory,
        responseProcessor?: ItemCategoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemCategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemCategoryApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemCategoryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ItemCategoryList200Response>> {
        const requestContextPromise = this.requestFactory.itemCategoryList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemCategoryListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemCategoryList(limit?: number, offset?: number, _options?: Configuration): Observable<ItemCategoryList200Response> {
        return this.itemCategoryListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ItemCategoryList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public itemCategoryReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ItemCategory>> {
        const requestContextPromise = this.requestFactory.itemCategoryRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemCategoryReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public itemCategoryRead(id: number, _options?: Configuration): Observable<ItemCategory> {
        return this.itemCategoryReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ItemCategory>) => apiResponse.data));
    }

}

import { ItemFlingEffectApiRequestFactory, ItemFlingEffectApiResponseProcessor} from "../apis/ItemFlingEffectApi";
export class ObservableItemFlingEffectApi {
    private requestFactory: ItemFlingEffectApiRequestFactory;
    private responseProcessor: ItemFlingEffectApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemFlingEffectApiRequestFactory,
        responseProcessor?: ItemFlingEffectApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemFlingEffectApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemFlingEffectApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemFlingEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ItemFlingEffectList200Response>> {
        const requestContextPromise = this.requestFactory.itemFlingEffectList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemFlingEffectListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemFlingEffectList(limit?: number, offset?: number, _options?: Configuration): Observable<ItemFlingEffectList200Response> {
        return this.itemFlingEffectListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ItemFlingEffectList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public itemFlingEffectReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ItemFlingEffect>> {
        const requestContextPromise = this.requestFactory.itemFlingEffectRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemFlingEffectReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public itemFlingEffectRead(id: number, _options?: Configuration): Observable<ItemFlingEffect> {
        return this.itemFlingEffectReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ItemFlingEffect>) => apiResponse.data));
    }

}

import { ItemPocketApiRequestFactory, ItemPocketApiResponseProcessor} from "../apis/ItemPocketApi";
export class ObservableItemPocketApi {
    private requestFactory: ItemPocketApiRequestFactory;
    private responseProcessor: ItemPocketApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemPocketApiRequestFactory,
        responseProcessor?: ItemPocketApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemPocketApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemPocketApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemPocketListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ItemPocketList200Response>> {
        const requestContextPromise = this.requestFactory.itemPocketList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemPocketListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemPocketList(limit?: number, offset?: number, _options?: Configuration): Observable<ItemPocketList200Response> {
        return this.itemPocketListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ItemPocketList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public itemPocketReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ItemPocket>> {
        const requestContextPromise = this.requestFactory.itemPocketRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.itemPocketReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public itemPocketRead(id: number, _options?: Configuration): Observable<ItemPocket> {
        return this.itemPocketReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ItemPocket>) => apiResponse.data));
    }

}

import { LanguageApiRequestFactory, LanguageApiResponseProcessor} from "../apis/LanguageApi";
export class ObservableLanguageApi {
    private requestFactory: LanguageApiRequestFactory;
    private responseProcessor: LanguageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LanguageApiRequestFactory,
        responseProcessor?: LanguageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LanguageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LanguageApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public languageListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<LanguageList200Response>> {
        const requestContextPromise = this.requestFactory.languageList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.languageListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public languageList(limit?: number, offset?: number, _options?: Configuration): Observable<LanguageList200Response> {
        return this.languageListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<LanguageList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public languageReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Language>> {
        const requestContextPromise = this.requestFactory.languageRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.languageReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public languageRead(id: number, _options?: Configuration): Observable<Language> {
        return this.languageReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Language>) => apiResponse.data));
    }

}

import { LocationApiRequestFactory, LocationApiResponseProcessor} from "../apis/LocationApi";
export class ObservableLocationApi {
    private requestFactory: LocationApiRequestFactory;
    private responseProcessor: LocationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationApiRequestFactory,
        responseProcessor?: LocationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public locationListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<LocationList200Response>> {
        const requestContextPromise = this.requestFactory.locationList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public locationList(limit?: number, offset?: number, _options?: Configuration): Observable<LocationList200Response> {
        return this.locationListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<LocationList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public locationReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Location>> {
        const requestContextPromise = this.requestFactory.locationRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public locationRead(id: number, _options?: Configuration): Observable<Location> {
        return this.locationReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Location>) => apiResponse.data));
    }

}

import { LocationAreaApiRequestFactory, LocationAreaApiResponseProcessor} from "../apis/LocationAreaApi";
export class ObservableLocationAreaApi {
    private requestFactory: LocationAreaApiRequestFactory;
    private responseProcessor: LocationAreaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationAreaApiRequestFactory,
        responseProcessor?: LocationAreaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationAreaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationAreaApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public locationAreaListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<LocationAreaList200Response>> {
        const requestContextPromise = this.requestFactory.locationAreaList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationAreaListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public locationAreaList(limit?: number, offset?: number, _options?: Configuration): Observable<LocationAreaList200Response> {
        return this.locationAreaListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<LocationAreaList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public locationAreaReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<LocationArea>> {
        const requestContextPromise = this.requestFactory.locationAreaRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationAreaReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public locationAreaRead(id: number, _options?: Configuration): Observable<LocationArea> {
        return this.locationAreaReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<LocationArea>) => apiResponse.data));
    }

}

import { MachineApiRequestFactory, MachineApiResponseProcessor} from "../apis/MachineApi";
export class ObservableMachineApi {
    private requestFactory: MachineApiRequestFactory;
    private responseProcessor: MachineApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MachineApiRequestFactory,
        responseProcessor?: MachineApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MachineApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MachineApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public machineListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MachineList200Response>> {
        const requestContextPromise = this.requestFactory.machineList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.machineListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public machineList(limit?: number, offset?: number, _options?: Configuration): Observable<MachineList200Response> {
        return this.machineListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<MachineList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public machineReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Machine>> {
        const requestContextPromise = this.requestFactory.machineRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.machineReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public machineRead(id: number, _options?: Configuration): Observable<Machine> {
        return this.machineReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Machine>) => apiResponse.data));
    }

}

import { MoveApiRequestFactory, MoveApiResponseProcessor} from "../apis/MoveApi";
export class ObservableMoveApi {
    private requestFactory: MoveApiRequestFactory;
    private responseProcessor: MoveApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveApiRequestFactory,
        responseProcessor?: MoveApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveList200Response>> {
        const requestContextPromise = this.requestFactory.moveList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveList200Response> {
        return this.moveListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<MoveList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public moveReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Move>> {
        const requestContextPromise = this.requestFactory.moveRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public moveRead(id: number, _options?: Configuration): Observable<Move> {
        return this.moveReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Move>) => apiResponse.data));
    }

}

import { MoveAilmentApiRequestFactory, MoveAilmentApiResponseProcessor} from "../apis/MoveAilmentApi";
export class ObservableMoveAilmentApi {
    private requestFactory: MoveAilmentApiRequestFactory;
    private responseProcessor: MoveAilmentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveAilmentApiRequestFactory,
        responseProcessor?: MoveAilmentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveAilmentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveAilmentApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveAilmentListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveAilmentList200Response>> {
        const requestContextPromise = this.requestFactory.moveAilmentList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveAilmentListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveAilmentList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveAilmentList200Response> {
        return this.moveAilmentListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<MoveAilmentList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public moveAilmentReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveAilment>> {
        const requestContextPromise = this.requestFactory.moveAilmentRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveAilmentReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public moveAilmentRead(id: number, _options?: Configuration): Observable<MoveAilment> {
        return this.moveAilmentReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MoveAilment>) => apiResponse.data));
    }

}

import { MoveBattleStyleApiRequestFactory, MoveBattleStyleApiResponseProcessor} from "../apis/MoveBattleStyleApi";
export class ObservableMoveBattleStyleApi {
    private requestFactory: MoveBattleStyleApiRequestFactory;
    private responseProcessor: MoveBattleStyleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveBattleStyleApiRequestFactory,
        responseProcessor?: MoveBattleStyleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveBattleStyleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveBattleStyleApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveBattleStyleListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveBattleStyleList200Response>> {
        const requestContextPromise = this.requestFactory.moveBattleStyleList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveBattleStyleListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveBattleStyleList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveBattleStyleList200Response> {
        return this.moveBattleStyleListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<MoveBattleStyleList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public moveBattleStyleReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveBattleStyle>> {
        const requestContextPromise = this.requestFactory.moveBattleStyleRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveBattleStyleReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public moveBattleStyleRead(id: number, _options?: Configuration): Observable<MoveBattleStyle> {
        return this.moveBattleStyleReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MoveBattleStyle>) => apiResponse.data));
    }

}

import { MoveCategoryApiRequestFactory, MoveCategoryApiResponseProcessor} from "../apis/MoveCategoryApi";
export class ObservableMoveCategoryApi {
    private requestFactory: MoveCategoryApiRequestFactory;
    private responseProcessor: MoveCategoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveCategoryApiRequestFactory,
        responseProcessor?: MoveCategoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveCategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveCategoryApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveCategoryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveCategoryList200Response>> {
        const requestContextPromise = this.requestFactory.moveCategoryList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveCategoryListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveCategoryList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveCategoryList200Response> {
        return this.moveCategoryListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<MoveCategoryList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public moveCategoryReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveCategory>> {
        const requestContextPromise = this.requestFactory.moveCategoryRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveCategoryReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public moveCategoryRead(id: number, _options?: Configuration): Observable<MoveCategory> {
        return this.moveCategoryReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MoveCategory>) => apiResponse.data));
    }

}

import { MoveDamageClassApiRequestFactory, MoveDamageClassApiResponseProcessor} from "../apis/MoveDamageClassApi";
export class ObservableMoveDamageClassApi {
    private requestFactory: MoveDamageClassApiRequestFactory;
    private responseProcessor: MoveDamageClassApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveDamageClassApiRequestFactory,
        responseProcessor?: MoveDamageClassApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveDamageClassApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveDamageClassApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveDamageClassListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveDamageClassList200Response>> {
        const requestContextPromise = this.requestFactory.moveDamageClassList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveDamageClassListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveDamageClassList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveDamageClassList200Response> {
        return this.moveDamageClassListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<MoveDamageClassList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public moveDamageClassReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveDamageClass>> {
        const requestContextPromise = this.requestFactory.moveDamageClassRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveDamageClassReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public moveDamageClassRead(id: number, _options?: Configuration): Observable<MoveDamageClass> {
        return this.moveDamageClassReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MoveDamageClass>) => apiResponse.data));
    }

}

import { MoveLearnMethodApiRequestFactory, MoveLearnMethodApiResponseProcessor} from "../apis/MoveLearnMethodApi";
export class ObservableMoveLearnMethodApi {
    private requestFactory: MoveLearnMethodApiRequestFactory;
    private responseProcessor: MoveLearnMethodApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveLearnMethodApiRequestFactory,
        responseProcessor?: MoveLearnMethodApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveLearnMethodApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveLearnMethodApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveLearnMethodListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveLearnMethodList200Response>> {
        const requestContextPromise = this.requestFactory.moveLearnMethodList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveLearnMethodListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveLearnMethodList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveLearnMethodList200Response> {
        return this.moveLearnMethodListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<MoveLearnMethodList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public moveLearnMethodReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveLearnMethod>> {
        const requestContextPromise = this.requestFactory.moveLearnMethodRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveLearnMethodReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public moveLearnMethodRead(id: number, _options?: Configuration): Observable<MoveLearnMethod> {
        return this.moveLearnMethodReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MoveLearnMethod>) => apiResponse.data));
    }

}

import { MoveTargetApiRequestFactory, MoveTargetApiResponseProcessor} from "../apis/MoveTargetApi";
export class ObservableMoveTargetApi {
    private requestFactory: MoveTargetApiRequestFactory;
    private responseProcessor: MoveTargetApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveTargetApiRequestFactory,
        responseProcessor?: MoveTargetApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveTargetApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveTargetApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveTargetListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveTargetList200Response>> {
        const requestContextPromise = this.requestFactory.moveTargetList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveTargetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveTargetList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveTargetList200Response> {
        return this.moveTargetListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<MoveTargetList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public moveTargetReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveTarget>> {
        const requestContextPromise = this.requestFactory.moveTargetRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveTargetReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public moveTargetRead(id: number, _options?: Configuration): Observable<MoveTarget> {
        return this.moveTargetReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MoveTarget>) => apiResponse.data));
    }

}

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
     * @param idOrName 
     */
    public natureReadWithHttpInfo(idOrName: IDOrName, _options?: Configuration): Observable<HttpInfo<Nature>> {
        const requestContextPromise = this.requestFactory.natureRead(idOrName, _options);

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
     * @param idOrName 
     */
    public natureRead(idOrName: IDOrName, _options?: Configuration): Observable<Nature> {
        return this.natureReadWithHttpInfo(idOrName, _options).pipe(map((apiResponse: HttpInfo<Nature>) => apiResponse.data));
    }

}

import { PalParkAreaApiRequestFactory, PalParkAreaApiResponseProcessor} from "../apis/PalParkAreaApi";
export class ObservablePalParkAreaApi {
    private requestFactory: PalParkAreaApiRequestFactory;
    private responseProcessor: PalParkAreaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PalParkAreaApiRequestFactory,
        responseProcessor?: PalParkAreaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PalParkAreaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PalParkAreaApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public palParkAreaListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PalParkAreaList200Response>> {
        const requestContextPromise = this.requestFactory.palParkAreaList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.palParkAreaListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public palParkAreaList(limit?: number, offset?: number, _options?: Configuration): Observable<PalParkAreaList200Response> {
        return this.palParkAreaListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<PalParkAreaList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public palParkAreaReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PalParkArea>> {
        const requestContextPromise = this.requestFactory.palParkAreaRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.palParkAreaReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public palParkAreaRead(id: number, _options?: Configuration): Observable<PalParkArea> {
        return this.palParkAreaReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PalParkArea>) => apiResponse.data));
    }

}

import { PokeathlonStatApiRequestFactory, PokeathlonStatApiResponseProcessor} from "../apis/PokeathlonStatApi";
export class ObservablePokeathlonStatApi {
    private requestFactory: PokeathlonStatApiRequestFactory;
    private responseProcessor: PokeathlonStatApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PokeathlonStatApiRequestFactory,
        responseProcessor?: PokeathlonStatApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokeathlonStatApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokeathlonStatApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokeathlonStatListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokeathlonStatList200Response>> {
        const requestContextPromise = this.requestFactory.pokeathlonStatList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokeathlonStatListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokeathlonStatList(limit?: number, offset?: number, _options?: Configuration): Observable<PokeathlonStatList200Response> {
        return this.pokeathlonStatListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<PokeathlonStatList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public pokeathlonStatReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokeathlonStat>> {
        const requestContextPromise = this.requestFactory.pokeathlonStatRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokeathlonStatReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public pokeathlonStatRead(id: number, _options?: Configuration): Observable<PokeathlonStat> {
        return this.pokeathlonStatReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PokeathlonStat>) => apiResponse.data));
    }

}

import { PokedexApiRequestFactory, PokedexApiResponseProcessor} from "../apis/PokedexApi";
export class ObservablePokedexApi {
    private requestFactory: PokedexApiRequestFactory;
    private responseProcessor: PokedexApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PokedexApiRequestFactory,
        responseProcessor?: PokedexApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokedexApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokedexApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokedexListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokedexList200Response>> {
        const requestContextPromise = this.requestFactory.pokedexList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokedexListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokedexList(limit?: number, offset?: number, _options?: Configuration): Observable<PokedexList200Response> {
        return this.pokedexListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<PokedexList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public pokedexReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Pokedex>> {
        const requestContextPromise = this.requestFactory.pokedexRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokedexReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public pokedexRead(id: number, _options?: Configuration): Observable<Pokedex> {
        return this.pokedexReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Pokedex>) => apiResponse.data));
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
     * @param idOrName 
     */
    public pokemonReadWithHttpInfo(idOrName: IDOrName1, _options?: Configuration): Observable<HttpInfo<Pokemon>> {
        const requestContextPromise = this.requestFactory.pokemonRead(idOrName, _options);

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
     * @param idOrName 
     */
    public pokemonRead(idOrName: IDOrName1, _options?: Configuration): Observable<Pokemon> {
        return this.pokemonReadWithHttpInfo(idOrName, _options).pipe(map((apiResponse: HttpInfo<Pokemon>) => apiResponse.data));
    }

}

import { PokemonColorApiRequestFactory, PokemonColorApiResponseProcessor} from "../apis/PokemonColorApi";
export class ObservablePokemonColorApi {
    private requestFactory: PokemonColorApiRequestFactory;
    private responseProcessor: PokemonColorApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonColorApiRequestFactory,
        responseProcessor?: PokemonColorApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonColorApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonColorApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonColorListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonColorList200Response>> {
        const requestContextPromise = this.requestFactory.pokemonColorList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonColorListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonColorList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonColorList200Response> {
        return this.pokemonColorListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<PokemonColorList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public pokemonColorReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokemonColor>> {
        const requestContextPromise = this.requestFactory.pokemonColorRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonColorReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public pokemonColorRead(id: number, _options?: Configuration): Observable<PokemonColor> {
        return this.pokemonColorReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PokemonColor>) => apiResponse.data));
    }

}

import { PokemonFormApiRequestFactory, PokemonFormApiResponseProcessor} from "../apis/PokemonFormApi";
export class ObservablePokemonFormApi {
    private requestFactory: PokemonFormApiRequestFactory;
    private responseProcessor: PokemonFormApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonFormApiRequestFactory,
        responseProcessor?: PokemonFormApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonFormApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonFormApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonFormListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonFormList200Response>> {
        const requestContextPromise = this.requestFactory.pokemonFormList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonFormListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonFormList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonFormList200Response> {
        return this.pokemonFormListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<PokemonFormList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public pokemonFormReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokemonForm>> {
        const requestContextPromise = this.requestFactory.pokemonFormRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonFormReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public pokemonFormRead(id: number, _options?: Configuration): Observable<PokemonForm> {
        return this.pokemonFormReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PokemonForm>) => apiResponse.data));
    }

}

import { PokemonHabitatApiRequestFactory, PokemonHabitatApiResponseProcessor} from "../apis/PokemonHabitatApi";
export class ObservablePokemonHabitatApi {
    private requestFactory: PokemonHabitatApiRequestFactory;
    private responseProcessor: PokemonHabitatApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonHabitatApiRequestFactory,
        responseProcessor?: PokemonHabitatApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonHabitatApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonHabitatApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonHabitatListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonHabitatList200Response>> {
        const requestContextPromise = this.requestFactory.pokemonHabitatList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonHabitatListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonHabitatList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonHabitatList200Response> {
        return this.pokemonHabitatListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<PokemonHabitatList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public pokemonHabitatReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokemonHabitat>> {
        const requestContextPromise = this.requestFactory.pokemonHabitatRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonHabitatReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public pokemonHabitatRead(id: number, _options?: Configuration): Observable<PokemonHabitat> {
        return this.pokemonHabitatReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PokemonHabitat>) => apiResponse.data));
    }

}

import { PokemonShapeApiRequestFactory, PokemonShapeApiResponseProcessor} from "../apis/PokemonShapeApi";
export class ObservablePokemonShapeApi {
    private requestFactory: PokemonShapeApiRequestFactory;
    private responseProcessor: PokemonShapeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonShapeApiRequestFactory,
        responseProcessor?: PokemonShapeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonShapeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonShapeApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonShapeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonShapeList200Response>> {
        const requestContextPromise = this.requestFactory.pokemonShapeList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonShapeListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonShapeList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonShapeList200Response> {
        return this.pokemonShapeListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<PokemonShapeList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public pokemonShapeReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokemonShape>> {
        const requestContextPromise = this.requestFactory.pokemonShapeRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonShapeReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public pokemonShapeRead(id: number, _options?: Configuration): Observable<PokemonShape> {
        return this.pokemonShapeReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PokemonShape>) => apiResponse.data));
    }

}

import { PokemonSpeciesApiRequestFactory, PokemonSpeciesApiResponseProcessor} from "../apis/PokemonSpeciesApi";
export class ObservablePokemonSpeciesApi {
    private requestFactory: PokemonSpeciesApiRequestFactory;
    private responseProcessor: PokemonSpeciesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonSpeciesApiRequestFactory,
        responseProcessor?: PokemonSpeciesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonSpeciesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonSpeciesApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonSpeciesListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonSpeciesList200Response>> {
        const requestContextPromise = this.requestFactory.pokemonSpeciesList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonSpeciesListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonSpeciesList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonSpeciesList200Response> {
        return this.pokemonSpeciesListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<PokemonSpeciesList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public pokemonSpeciesReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokemonSpecies>> {
        const requestContextPromise = this.requestFactory.pokemonSpeciesRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pokemonSpeciesReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public pokemonSpeciesRead(id: number, _options?: Configuration): Observable<PokemonSpecies> {
        return this.pokemonSpeciesReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PokemonSpecies>) => apiResponse.data));
    }

}

import { RegionApiRequestFactory, RegionApiResponseProcessor} from "../apis/RegionApi";
export class ObservableRegionApi {
    private requestFactory: RegionApiRequestFactory;
    private responseProcessor: RegionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RegionApiRequestFactory,
        responseProcessor?: RegionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RegionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RegionApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public regionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<RegionList200Response>> {
        const requestContextPromise = this.requestFactory.regionList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.regionListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public regionList(limit?: number, offset?: number, _options?: Configuration): Observable<RegionList200Response> {
        return this.regionListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<RegionList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public regionReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Region>> {
        const requestContextPromise = this.requestFactory.regionRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.regionReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public regionRead(id: number, _options?: Configuration): Observable<Region> {
        return this.regionReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Region>) => apiResponse.data));
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
     * @param idOrName 
     */
    public statReadWithHttpInfo(idOrName: IDOrName2, _options?: Configuration): Observable<HttpInfo<Stat>> {
        const requestContextPromise = this.requestFactory.statRead(idOrName, _options);

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
     * @param idOrName 
     */
    public statRead(idOrName: IDOrName2, _options?: Configuration): Observable<Stat> {
        return this.statReadWithHttpInfo(idOrName, _options).pipe(map((apiResponse: HttpInfo<Stat>) => apiResponse.data));
    }

}

import { SuperContestEffectApiRequestFactory, SuperContestEffectApiResponseProcessor} from "../apis/SuperContestEffectApi";
export class ObservableSuperContestEffectApi {
    private requestFactory: SuperContestEffectApiRequestFactory;
    private responseProcessor: SuperContestEffectApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SuperContestEffectApiRequestFactory,
        responseProcessor?: SuperContestEffectApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SuperContestEffectApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SuperContestEffectApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public superContestEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<SuperContestEffectList200Response>> {
        const requestContextPromise = this.requestFactory.superContestEffectList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.superContestEffectListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public superContestEffectList(limit?: number, offset?: number, _options?: Configuration): Observable<SuperContestEffectList200Response> {
        return this.superContestEffectListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<SuperContestEffectList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public superContestEffectReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<SuperContestEffect>> {
        const requestContextPromise = this.requestFactory.superContestEffectRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.superContestEffectReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public superContestEffectRead(id: number, _options?: Configuration): Observable<SuperContestEffect> {
        return this.superContestEffectReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<SuperContestEffect>) => apiResponse.data));
    }

}

import { TypeApiRequestFactory, TypeApiResponseProcessor} from "../apis/TypeApi";
export class ObservableTypeApi {
    private requestFactory: TypeApiRequestFactory;
    private responseProcessor: TypeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TypeApiRequestFactory,
        responseProcessor?: TypeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TypeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TypeApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public typeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<TypeList200Response>> {
        const requestContextPromise = this.requestFactory.typeList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.typeListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public typeList(limit?: number, offset?: number, _options?: Configuration): Observable<TypeList200Response> {
        return this.typeListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<TypeList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public typeReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Type>> {
        const requestContextPromise = this.requestFactory.typeRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.typeReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public typeRead(id: number, _options?: Configuration): Observable<Type> {
        return this.typeReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Type>) => apiResponse.data));
    }

}

import { VersionApiRequestFactory, VersionApiResponseProcessor} from "../apis/VersionApi";
export class ObservableVersionApi {
    private requestFactory: VersionApiRequestFactory;
    private responseProcessor: VersionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VersionApiRequestFactory,
        responseProcessor?: VersionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VersionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VersionApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public versionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<VersionList200Response>> {
        const requestContextPromise = this.requestFactory.versionList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.versionListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public versionList(limit?: number, offset?: number, _options?: Configuration): Observable<VersionList200Response> {
        return this.versionListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<VersionList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public versionReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Version>> {
        const requestContextPromise = this.requestFactory.versionRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.versionReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public versionRead(id: number, _options?: Configuration): Observable<Version> {
        return this.versionReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Version>) => apiResponse.data));
    }

}

import { VersionGroupApiRequestFactory, VersionGroupApiResponseProcessor} from "../apis/VersionGroupApi";
export class ObservableVersionGroupApi {
    private requestFactory: VersionGroupApiRequestFactory;
    private responseProcessor: VersionGroupApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VersionGroupApiRequestFactory,
        responseProcessor?: VersionGroupApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VersionGroupApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VersionGroupApiResponseProcessor();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public versionGroupListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<VersionGroupList200Response>> {
        const requestContextPromise = this.requestFactory.versionGroupList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.versionGroupListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit 
     * @param offset 
     */
    public versionGroupList(limit?: number, offset?: number, _options?: Configuration): Observable<VersionGroupList200Response> {
        return this.versionGroupListWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<VersionGroupList200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public versionGroupReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<VersionGroup>> {
        const requestContextPromise = this.requestFactory.versionGroupRead(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.versionGroupReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public versionGroupRead(id: number, _options?: Configuration): Observable<VersionGroup> {
        return this.versionGroupReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<VersionGroup>) => apiResponse.data));
    }

}
