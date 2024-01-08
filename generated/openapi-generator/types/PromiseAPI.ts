import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { ObservableNatureApi } from './ObservableAPI';

import { NatureApiRequestFactory, NatureApiResponseProcessor} from "../apis/NatureApi";
export class PromiseNatureApi {
    private api: ObservableNatureApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NatureApiRequestFactory,
        responseProcessor?: NatureApiResponseProcessor
    ) {
        this.api = new ObservableNatureApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public natureListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<NatureList200Response>> {
        const result = this.api.natureListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public natureList(limit?: number, offset?: number, _options?: Configuration): Promise<NatureList200Response> {
        const result = this.api.natureList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public natureReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Nature>> {
        const result = this.api.natureReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public natureRead(id: number, _options?: Configuration): Promise<Nature> {
        const result = this.api.natureRead(id, _options);
        return result.toPromise();
    }


}



import { ObservablePokemonApi } from './ObservableAPI';

import { PokemonApiRequestFactory, PokemonApiResponseProcessor} from "../apis/PokemonApi";
export class PromisePokemonApi {
    private api: ObservablePokemonApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonApiRequestFactory,
        responseProcessor?: PokemonApiResponseProcessor
    ) {
        this.api = new ObservablePokemonApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonList200Response>> {
        const result = this.api.pokemonListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonList200Response> {
        const result = this.api.pokemonList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Pokemon>> {
        const result = this.api.pokemonReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonRead(id: number, _options?: Configuration): Promise<Pokemon> {
        const result = this.api.pokemonRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableStatApi } from './ObservableAPI';

import { StatApiRequestFactory, StatApiResponseProcessor} from "../apis/StatApi";
export class PromiseStatApi {
    private api: ObservableStatApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatApiRequestFactory,
        responseProcessor?: StatApiResponseProcessor
    ) {
        this.api = new ObservableStatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public statListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<StatList200Response>> {
        const result = this.api.statListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public statList(limit?: number, offset?: number, _options?: Configuration): Promise<StatList200Response> {
        const result = this.api.statList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public statReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Stat>> {
        const result = this.api.statReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public statRead(id: number, _options?: Configuration): Promise<Stat> {
        const result = this.api.statRead(id, _options);
        return result.toPromise();
    }


}



