import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { ObservableAbilityApi } from './ObservableAPI';

import { AbilityApiRequestFactory, AbilityApiResponseProcessor} from "../apis/AbilityApi";
export class PromiseAbilityApi {
    private api: ObservableAbilityApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AbilityApiRequestFactory,
        responseProcessor?: AbilityApiResponseProcessor
    ) {
        this.api = new ObservableAbilityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public abilityListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<AbilityList200Response>> {
        const result = this.api.abilityListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public abilityList(limit?: number, offset?: number, _options?: Configuration): Promise<AbilityList200Response> {
        const result = this.api.abilityList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public abilityReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Ability>> {
        const result = this.api.abilityReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public abilityRead(id: number, _options?: Configuration): Promise<Ability> {
        const result = this.api.abilityRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableBerryApi } from './ObservableAPI';

import { BerryApiRequestFactory, BerryApiResponseProcessor} from "../apis/BerryApi";
export class PromiseBerryApi {
    private api: ObservableBerryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BerryApiRequestFactory,
        responseProcessor?: BerryApiResponseProcessor
    ) {
        this.api = new ObservableBerryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<Berry>>> {
        const result = this.api.berryListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryList(limit?: number, offset?: number, _options?: Configuration): Promise<Array<Berry>> {
        const result = this.api.berryList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public berryReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Berry>> {
        const result = this.api.berryReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public berryRead(id: number, _options?: Configuration): Promise<Berry> {
        const result = this.api.berryRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableBerryFirmnessApi } from './ObservableAPI';

import { BerryFirmnessApiRequestFactory, BerryFirmnessApiResponseProcessor} from "../apis/BerryFirmnessApi";
export class PromiseBerryFirmnessApi {
    private api: ObservableBerryFirmnessApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BerryFirmnessApiRequestFactory,
        responseProcessor?: BerryFirmnessApiResponseProcessor
    ) {
        this.api = new ObservableBerryFirmnessApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryFirmnessListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<BerryFirmnessList200Response>> {
        const result = this.api.berryFirmnessListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryFirmnessList(limit?: number, offset?: number, _options?: Configuration): Promise<BerryFirmnessList200Response> {
        const result = this.api.berryFirmnessList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public berryFirmnessReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<BerryFirmness>> {
        const result = this.api.berryFirmnessReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public berryFirmnessRead(id: number, _options?: Configuration): Promise<BerryFirmness> {
        const result = this.api.berryFirmnessRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableBerryFlavorApi } from './ObservableAPI';

import { BerryFlavorApiRequestFactory, BerryFlavorApiResponseProcessor} from "../apis/BerryFlavorApi";
export class PromiseBerryFlavorApi {
    private api: ObservableBerryFlavorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BerryFlavorApiRequestFactory,
        responseProcessor?: BerryFlavorApiResponseProcessor
    ) {
        this.api = new ObservableBerryFlavorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryFlavorListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<BerryFlavorList200Response>> {
        const result = this.api.berryFlavorListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public berryFlavorList(limit?: number, offset?: number, _options?: Configuration): Promise<BerryFlavorList200Response> {
        const result = this.api.berryFlavorList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public berryFlavorReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<BerryFlavor>> {
        const result = this.api.berryFlavorReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public berryFlavorRead(id: number, _options?: Configuration): Promise<BerryFlavor> {
        const result = this.api.berryFlavorRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableCharacteristicApi } from './ObservableAPI';

import { CharacteristicApiRequestFactory, CharacteristicApiResponseProcessor} from "../apis/CharacteristicApi";
export class PromiseCharacteristicApi {
    private api: ObservableCharacteristicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CharacteristicApiRequestFactory,
        responseProcessor?: CharacteristicApiResponseProcessor
    ) {
        this.api = new ObservableCharacteristicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public characteristicListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<Characteristic>>> {
        const result = this.api.characteristicListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public characteristicList(limit?: number, offset?: number, _options?: Configuration): Promise<Array<Characteristic>> {
        const result = this.api.characteristicList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public characteristicReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Characteristic>> {
        const result = this.api.characteristicReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public characteristicRead(id: number, _options?: Configuration): Promise<Characteristic> {
        const result = this.api.characteristicRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableContestEffectApi } from './ObservableAPI';

import { ContestEffectApiRequestFactory, ContestEffectApiResponseProcessor} from "../apis/ContestEffectApi";
export class PromiseContestEffectApi {
    private api: ObservableContestEffectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContestEffectApiRequestFactory,
        responseProcessor?: ContestEffectApiResponseProcessor
    ) {
        this.api = new ObservableContestEffectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public contestEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ContestEffectList200Response>> {
        const result = this.api.contestEffectListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public contestEffectList(limit?: number, offset?: number, _options?: Configuration): Promise<ContestEffectList200Response> {
        const result = this.api.contestEffectList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public contestEffectReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ContestEffect>> {
        const result = this.api.contestEffectReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public contestEffectRead(id: number, _options?: Configuration): Promise<ContestEffect> {
        const result = this.api.contestEffectRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableContestTypeApi } from './ObservableAPI';

import { ContestTypeApiRequestFactory, ContestTypeApiResponseProcessor} from "../apis/ContestTypeApi";
export class PromiseContestTypeApi {
    private api: ObservableContestTypeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContestTypeApiRequestFactory,
        responseProcessor?: ContestTypeApiResponseProcessor
    ) {
        this.api = new ObservableContestTypeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public contestTypeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ContestTypeList200Response>> {
        const result = this.api.contestTypeListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public contestTypeList(limit?: number, offset?: number, _options?: Configuration): Promise<ContestTypeList200Response> {
        const result = this.api.contestTypeList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public contestTypeReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ContestType>> {
        const result = this.api.contestTypeReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public contestTypeRead(id: number, _options?: Configuration): Promise<ContestType> {
        const result = this.api.contestTypeRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableEggGroupApi } from './ObservableAPI';

import { EggGroupApiRequestFactory, EggGroupApiResponseProcessor} from "../apis/EggGroupApi";
export class PromiseEggGroupApi {
    private api: ObservableEggGroupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EggGroupApiRequestFactory,
        responseProcessor?: EggGroupApiResponseProcessor
    ) {
        this.api = new ObservableEggGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public eggGroupListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<EggGroup>>> {
        const result = this.api.eggGroupListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public eggGroupList(limit?: number, offset?: number, _options?: Configuration): Promise<Array<EggGroup>> {
        const result = this.api.eggGroupList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public eggGroupReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EggGroup>> {
        const result = this.api.eggGroupReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public eggGroupRead(id: number, _options?: Configuration): Promise<EggGroup> {
        const result = this.api.eggGroupRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableEncounterConditionApi } from './ObservableAPI';

import { EncounterConditionApiRequestFactory, EncounterConditionApiResponseProcessor} from "../apis/EncounterConditionApi";
export class PromiseEncounterConditionApi {
    private api: ObservableEncounterConditionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EncounterConditionApiRequestFactory,
        responseProcessor?: EncounterConditionApiResponseProcessor
    ) {
        this.api = new ObservableEncounterConditionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterConditionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<EncounterConditionList200Response>> {
        const result = this.api.encounterConditionListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterConditionList(limit?: number, offset?: number, _options?: Configuration): Promise<EncounterConditionList200Response> {
        const result = this.api.encounterConditionList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public encounterConditionReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EncounterCondition>> {
        const result = this.api.encounterConditionReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public encounterConditionRead(id: number, _options?: Configuration): Promise<EncounterCondition> {
        const result = this.api.encounterConditionRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableEncounterConditionValueApi } from './ObservableAPI';

import { EncounterConditionValueApiRequestFactory, EncounterConditionValueApiResponseProcessor} from "../apis/EncounterConditionValueApi";
export class PromiseEncounterConditionValueApi {
    private api: ObservableEncounterConditionValueApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EncounterConditionValueApiRequestFactory,
        responseProcessor?: EncounterConditionValueApiResponseProcessor
    ) {
        this.api = new ObservableEncounterConditionValueApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterConditionValueListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<EncounterConditionValue>>> {
        const result = this.api.encounterConditionValueListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterConditionValueList(limit?: number, offset?: number, _options?: Configuration): Promise<Array<EncounterConditionValue>> {
        const result = this.api.encounterConditionValueList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public encounterConditionValueReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EncounterConditionValue>> {
        const result = this.api.encounterConditionValueReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public encounterConditionValueRead(id: number, _options?: Configuration): Promise<EncounterConditionValue> {
        const result = this.api.encounterConditionValueRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableEncounterMethodApi } from './ObservableAPI';

import { EncounterMethodApiRequestFactory, EncounterMethodApiResponseProcessor} from "../apis/EncounterMethodApi";
export class PromiseEncounterMethodApi {
    private api: ObservableEncounterMethodApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EncounterMethodApiRequestFactory,
        responseProcessor?: EncounterMethodApiResponseProcessor
    ) {
        this.api = new ObservableEncounterMethodApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterMethodListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<EncounterMethodList200Response>> {
        const result = this.api.encounterMethodListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public encounterMethodList(limit?: number, offset?: number, _options?: Configuration): Promise<EncounterMethodList200Response> {
        const result = this.api.encounterMethodList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public encounterMethodReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EncounterMethod>> {
        const result = this.api.encounterMethodReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public encounterMethodRead(id: number, _options?: Configuration): Promise<EncounterMethod> {
        const result = this.api.encounterMethodRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableEvolutionChainApi } from './ObservableAPI';

import { EvolutionChainApiRequestFactory, EvolutionChainApiResponseProcessor} from "../apis/EvolutionChainApi";
export class PromiseEvolutionChainApi {
    private api: ObservableEvolutionChainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EvolutionChainApiRequestFactory,
        responseProcessor?: EvolutionChainApiResponseProcessor
    ) {
        this.api = new ObservableEvolutionChainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public evolutionChainListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<EvolutionChainList200Response>> {
        const result = this.api.evolutionChainListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public evolutionChainList(limit?: number, offset?: number, _options?: Configuration): Promise<EvolutionChainList200Response> {
        const result = this.api.evolutionChainList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public evolutionChainReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EvolutionChain>> {
        const result = this.api.evolutionChainReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public evolutionChainRead(id: number, _options?: Configuration): Promise<EvolutionChain> {
        const result = this.api.evolutionChainRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableEvolutionTriggerApi } from './ObservableAPI';

import { EvolutionTriggerApiRequestFactory, EvolutionTriggerApiResponseProcessor} from "../apis/EvolutionTriggerApi";
export class PromiseEvolutionTriggerApi {
    private api: ObservableEvolutionTriggerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EvolutionTriggerApiRequestFactory,
        responseProcessor?: EvolutionTriggerApiResponseProcessor
    ) {
        this.api = new ObservableEvolutionTriggerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public evolutionTriggerListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<EvolutionTriggerList200Response>> {
        const result = this.api.evolutionTriggerListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public evolutionTriggerList(limit?: number, offset?: number, _options?: Configuration): Promise<EvolutionTriggerList200Response> {
        const result = this.api.evolutionTriggerList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public evolutionTriggerReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EvolutionTrigger>> {
        const result = this.api.evolutionTriggerReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public evolutionTriggerRead(id: number, _options?: Configuration): Promise<EvolutionTrigger> {
        const result = this.api.evolutionTriggerRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableGenderApi } from './ObservableAPI';

import { GenderApiRequestFactory, GenderApiResponseProcessor} from "../apis/GenderApi";
export class PromiseGenderApi {
    private api: ObservableGenderApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GenderApiRequestFactory,
        responseProcessor?: GenderApiResponseProcessor
    ) {
        this.api = new ObservableGenderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public genderListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<GenderList200Response>> {
        const result = this.api.genderListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public genderList(limit?: number, offset?: number, _options?: Configuration): Promise<GenderList200Response> {
        const result = this.api.genderList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public genderReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Gender>> {
        const result = this.api.genderReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public genderRead(id: number, _options?: Configuration): Promise<Gender> {
        const result = this.api.genderRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableGenerationApi } from './ObservableAPI';

import { GenerationApiRequestFactory, GenerationApiResponseProcessor} from "../apis/GenerationApi";
export class PromiseGenerationApi {
    private api: ObservableGenerationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GenerationApiRequestFactory,
        responseProcessor?: GenerationApiResponseProcessor
    ) {
        this.api = new ObservableGenerationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public generationListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<GenerationList200Response>> {
        const result = this.api.generationListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public generationList(limit?: number, offset?: number, _options?: Configuration): Promise<GenerationList200Response> {
        const result = this.api.generationList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public generationReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Generation>> {
        const result = this.api.generationReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public generationRead(id: number, _options?: Configuration): Promise<Generation> {
        const result = this.api.generationRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableGrowthRateApi } from './ObservableAPI';

import { GrowthRateApiRequestFactory, GrowthRateApiResponseProcessor} from "../apis/GrowthRateApi";
export class PromiseGrowthRateApi {
    private api: ObservableGrowthRateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GrowthRateApiRequestFactory,
        responseProcessor?: GrowthRateApiResponseProcessor
    ) {
        this.api = new ObservableGrowthRateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public growthRateListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<GrowthRateList200Response>> {
        const result = this.api.growthRateListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public growthRateList(limit?: number, offset?: number, _options?: Configuration): Promise<GrowthRateList200Response> {
        const result = this.api.growthRateList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public growthRateReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<GrowthRate>> {
        const result = this.api.growthRateReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public growthRateRead(id: number, _options?: Configuration): Promise<GrowthRate> {
        const result = this.api.growthRateRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableItemApi } from './ObservableAPI';

import { ItemApiRequestFactory, ItemApiResponseProcessor} from "../apis/ItemApi";
export class PromiseItemApi {
    private api: ObservableItemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemApiRequestFactory,
        responseProcessor?: ItemApiResponseProcessor
    ) {
        this.api = new ObservableItemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ItemList200Response>> {
        const result = this.api.itemListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemList(limit?: number, offset?: number, _options?: Configuration): Promise<ItemList200Response> {
        const result = this.api.itemList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public itemReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Item>> {
        const result = this.api.itemReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public itemRead(id: number, _options?: Configuration): Promise<Item> {
        const result = this.api.itemRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableItemAttributeApi } from './ObservableAPI';

import { ItemAttributeApiRequestFactory, ItemAttributeApiResponseProcessor} from "../apis/ItemAttributeApi";
export class PromiseItemAttributeApi {
    private api: ObservableItemAttributeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemAttributeApiRequestFactory,
        responseProcessor?: ItemAttributeApiResponseProcessor
    ) {
        this.api = new ObservableItemAttributeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemAttributeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ItemAttributeList200Response>> {
        const result = this.api.itemAttributeListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemAttributeList(limit?: number, offset?: number, _options?: Configuration): Promise<ItemAttributeList200Response> {
        const result = this.api.itemAttributeList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public itemAttributeReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ItemAttribute>> {
        const result = this.api.itemAttributeReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public itemAttributeRead(id: number, _options?: Configuration): Promise<ItemAttribute> {
        const result = this.api.itemAttributeRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableItemCategoryApi } from './ObservableAPI';

import { ItemCategoryApiRequestFactory, ItemCategoryApiResponseProcessor} from "../apis/ItemCategoryApi";
export class PromiseItemCategoryApi {
    private api: ObservableItemCategoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemCategoryApiRequestFactory,
        responseProcessor?: ItemCategoryApiResponseProcessor
    ) {
        this.api = new ObservableItemCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemCategoryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ItemCategoryList200Response>> {
        const result = this.api.itemCategoryListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemCategoryList(limit?: number, offset?: number, _options?: Configuration): Promise<ItemCategoryList200Response> {
        const result = this.api.itemCategoryList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public itemCategoryReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ItemCategory>> {
        const result = this.api.itemCategoryReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public itemCategoryRead(id: number, _options?: Configuration): Promise<ItemCategory> {
        const result = this.api.itemCategoryRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableItemFlingEffectApi } from './ObservableAPI';

import { ItemFlingEffectApiRequestFactory, ItemFlingEffectApiResponseProcessor} from "../apis/ItemFlingEffectApi";
export class PromiseItemFlingEffectApi {
    private api: ObservableItemFlingEffectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemFlingEffectApiRequestFactory,
        responseProcessor?: ItemFlingEffectApiResponseProcessor
    ) {
        this.api = new ObservableItemFlingEffectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemFlingEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ItemFlingEffectList200Response>> {
        const result = this.api.itemFlingEffectListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemFlingEffectList(limit?: number, offset?: number, _options?: Configuration): Promise<ItemFlingEffectList200Response> {
        const result = this.api.itemFlingEffectList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public itemFlingEffectReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ItemFlingEffect>> {
        const result = this.api.itemFlingEffectReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public itemFlingEffectRead(id: number, _options?: Configuration): Promise<ItemFlingEffect> {
        const result = this.api.itemFlingEffectRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableItemPocketApi } from './ObservableAPI';

import { ItemPocketApiRequestFactory, ItemPocketApiResponseProcessor} from "../apis/ItemPocketApi";
export class PromiseItemPocketApi {
    private api: ObservableItemPocketApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemPocketApiRequestFactory,
        responseProcessor?: ItemPocketApiResponseProcessor
    ) {
        this.api = new ObservableItemPocketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemPocketListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ItemPocketList200Response>> {
        const result = this.api.itemPocketListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public itemPocketList(limit?: number, offset?: number, _options?: Configuration): Promise<ItemPocketList200Response> {
        const result = this.api.itemPocketList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public itemPocketReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ItemPocket>> {
        const result = this.api.itemPocketReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public itemPocketRead(id: number, _options?: Configuration): Promise<ItemPocket> {
        const result = this.api.itemPocketRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableLanguageApi } from './ObservableAPI';

import { LanguageApiRequestFactory, LanguageApiResponseProcessor} from "../apis/LanguageApi";
export class PromiseLanguageApi {
    private api: ObservableLanguageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LanguageApiRequestFactory,
        responseProcessor?: LanguageApiResponseProcessor
    ) {
        this.api = new ObservableLanguageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public languageListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<LanguageList200Response>> {
        const result = this.api.languageListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public languageList(limit?: number, offset?: number, _options?: Configuration): Promise<LanguageList200Response> {
        const result = this.api.languageList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public languageReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Language>> {
        const result = this.api.languageReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public languageRead(id: number, _options?: Configuration): Promise<Language> {
        const result = this.api.languageRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableLocationApi } from './ObservableAPI';

import { LocationApiRequestFactory, LocationApiResponseProcessor} from "../apis/LocationApi";
export class PromiseLocationApi {
    private api: ObservableLocationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationApiRequestFactory,
        responseProcessor?: LocationApiResponseProcessor
    ) {
        this.api = new ObservableLocationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public locationListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<LocationList200Response>> {
        const result = this.api.locationListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public locationList(limit?: number, offset?: number, _options?: Configuration): Promise<LocationList200Response> {
        const result = this.api.locationList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public locationReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Location>> {
        const result = this.api.locationReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public locationRead(id: number, _options?: Configuration): Promise<Location> {
        const result = this.api.locationRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableLocationAreaApi } from './ObservableAPI';

import { LocationAreaApiRequestFactory, LocationAreaApiResponseProcessor} from "../apis/LocationAreaApi";
export class PromiseLocationAreaApi {
    private api: ObservableLocationAreaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationAreaApiRequestFactory,
        responseProcessor?: LocationAreaApiResponseProcessor
    ) {
        this.api = new ObservableLocationAreaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public locationAreaListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<LocationAreaList200Response>> {
        const result = this.api.locationAreaListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public locationAreaList(limit?: number, offset?: number, _options?: Configuration): Promise<LocationAreaList200Response> {
        const result = this.api.locationAreaList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public locationAreaReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<LocationArea>> {
        const result = this.api.locationAreaReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public locationAreaRead(id: number, _options?: Configuration): Promise<LocationArea> {
        const result = this.api.locationAreaRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableMachineApi } from './ObservableAPI';

import { MachineApiRequestFactory, MachineApiResponseProcessor} from "../apis/MachineApi";
export class PromiseMachineApi {
    private api: ObservableMachineApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MachineApiRequestFactory,
        responseProcessor?: MachineApiResponseProcessor
    ) {
        this.api = new ObservableMachineApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public machineListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MachineList200Response>> {
        const result = this.api.machineListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public machineList(limit?: number, offset?: number, _options?: Configuration): Promise<MachineList200Response> {
        const result = this.api.machineList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public machineReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Machine>> {
        const result = this.api.machineReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public machineRead(id: number, _options?: Configuration): Promise<Machine> {
        const result = this.api.machineRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableMoveApi } from './ObservableAPI';

import { MoveApiRequestFactory, MoveApiResponseProcessor} from "../apis/MoveApi";
export class PromiseMoveApi {
    private api: ObservableMoveApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveApiRequestFactory,
        responseProcessor?: MoveApiResponseProcessor
    ) {
        this.api = new ObservableMoveApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveList200Response>> {
        const result = this.api.moveListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveList200Response> {
        const result = this.api.moveList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Move>> {
        const result = this.api.moveReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveRead(id: number, _options?: Configuration): Promise<Move> {
        const result = this.api.moveRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableMoveAilmentApi } from './ObservableAPI';

import { MoveAilmentApiRequestFactory, MoveAilmentApiResponseProcessor} from "../apis/MoveAilmentApi";
export class PromiseMoveAilmentApi {
    private api: ObservableMoveAilmentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveAilmentApiRequestFactory,
        responseProcessor?: MoveAilmentApiResponseProcessor
    ) {
        this.api = new ObservableMoveAilmentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveAilmentListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveAilmentList200Response>> {
        const result = this.api.moveAilmentListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveAilmentList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveAilmentList200Response> {
        const result = this.api.moveAilmentList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveAilmentReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveAilment>> {
        const result = this.api.moveAilmentReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveAilmentRead(id: number, _options?: Configuration): Promise<MoveAilment> {
        const result = this.api.moveAilmentRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableMoveBattleStyleApi } from './ObservableAPI';

import { MoveBattleStyleApiRequestFactory, MoveBattleStyleApiResponseProcessor} from "../apis/MoveBattleStyleApi";
export class PromiseMoveBattleStyleApi {
    private api: ObservableMoveBattleStyleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveBattleStyleApiRequestFactory,
        responseProcessor?: MoveBattleStyleApiResponseProcessor
    ) {
        this.api = new ObservableMoveBattleStyleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveBattleStyleListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveBattleStyleList200Response>> {
        const result = this.api.moveBattleStyleListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveBattleStyleList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveBattleStyleList200Response> {
        const result = this.api.moveBattleStyleList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveBattleStyleReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveBattleStyle>> {
        const result = this.api.moveBattleStyleReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveBattleStyleRead(id: number, _options?: Configuration): Promise<MoveBattleStyle> {
        const result = this.api.moveBattleStyleRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableMoveCategoryApi } from './ObservableAPI';

import { MoveCategoryApiRequestFactory, MoveCategoryApiResponseProcessor} from "../apis/MoveCategoryApi";
export class PromiseMoveCategoryApi {
    private api: ObservableMoveCategoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveCategoryApiRequestFactory,
        responseProcessor?: MoveCategoryApiResponseProcessor
    ) {
        this.api = new ObservableMoveCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveCategoryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveCategoryList200Response>> {
        const result = this.api.moveCategoryListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveCategoryList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveCategoryList200Response> {
        const result = this.api.moveCategoryList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveCategoryReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveCategory>> {
        const result = this.api.moveCategoryReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveCategoryRead(id: number, _options?: Configuration): Promise<MoveCategory> {
        const result = this.api.moveCategoryRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableMoveDamageClassApi } from './ObservableAPI';

import { MoveDamageClassApiRequestFactory, MoveDamageClassApiResponseProcessor} from "../apis/MoveDamageClassApi";
export class PromiseMoveDamageClassApi {
    private api: ObservableMoveDamageClassApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveDamageClassApiRequestFactory,
        responseProcessor?: MoveDamageClassApiResponseProcessor
    ) {
        this.api = new ObservableMoveDamageClassApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveDamageClassListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveDamageClassList200Response>> {
        const result = this.api.moveDamageClassListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveDamageClassList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveDamageClassList200Response> {
        const result = this.api.moveDamageClassList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveDamageClassReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveDamageClass>> {
        const result = this.api.moveDamageClassReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveDamageClassRead(id: number, _options?: Configuration): Promise<MoveDamageClass> {
        const result = this.api.moveDamageClassRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableMoveLearnMethodApi } from './ObservableAPI';

import { MoveLearnMethodApiRequestFactory, MoveLearnMethodApiResponseProcessor} from "../apis/MoveLearnMethodApi";
export class PromiseMoveLearnMethodApi {
    private api: ObservableMoveLearnMethodApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveLearnMethodApiRequestFactory,
        responseProcessor?: MoveLearnMethodApiResponseProcessor
    ) {
        this.api = new ObservableMoveLearnMethodApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveLearnMethodListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveLearnMethodList200Response>> {
        const result = this.api.moveLearnMethodListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveLearnMethodList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveLearnMethodList200Response> {
        const result = this.api.moveLearnMethodList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveLearnMethodReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveLearnMethod>> {
        const result = this.api.moveLearnMethodReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveLearnMethodRead(id: number, _options?: Configuration): Promise<MoveLearnMethod> {
        const result = this.api.moveLearnMethodRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableMoveTargetApi } from './ObservableAPI';

import { MoveTargetApiRequestFactory, MoveTargetApiResponseProcessor} from "../apis/MoveTargetApi";
export class PromiseMoveTargetApi {
    private api: ObservableMoveTargetApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MoveTargetApiRequestFactory,
        responseProcessor?: MoveTargetApiResponseProcessor
    ) {
        this.api = new ObservableMoveTargetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveTargetListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveTargetList200Response>> {
        const result = this.api.moveTargetListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public moveTargetList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveTargetList200Response> {
        const result = this.api.moveTargetList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveTargetReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveTarget>> {
        const result = this.api.moveTargetReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public moveTargetRead(id: number, _options?: Configuration): Promise<MoveTarget> {
        const result = this.api.moveTargetRead(id, _options);
        return result.toPromise();
    }


}



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
     * @param idOrName 
     */
    public natureReadWithHttpInfo(idOrName: IDOrName, _options?: Configuration): Promise<HttpInfo<Nature>> {
        const result = this.api.natureReadWithHttpInfo(idOrName, _options);
        return result.toPromise();
    }

    /**
     * @param idOrName 
     */
    public natureRead(idOrName: IDOrName, _options?: Configuration): Promise<Nature> {
        const result = this.api.natureRead(idOrName, _options);
        return result.toPromise();
    }


}



import { ObservablePalParkAreaApi } from './ObservableAPI';

import { PalParkAreaApiRequestFactory, PalParkAreaApiResponseProcessor} from "../apis/PalParkAreaApi";
export class PromisePalParkAreaApi {
    private api: ObservablePalParkAreaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PalParkAreaApiRequestFactory,
        responseProcessor?: PalParkAreaApiResponseProcessor
    ) {
        this.api = new ObservablePalParkAreaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public palParkAreaListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PalParkAreaList200Response>> {
        const result = this.api.palParkAreaListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public palParkAreaList(limit?: number, offset?: number, _options?: Configuration): Promise<PalParkAreaList200Response> {
        const result = this.api.palParkAreaList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public palParkAreaReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PalParkArea>> {
        const result = this.api.palParkAreaReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public palParkAreaRead(id: number, _options?: Configuration): Promise<PalParkArea> {
        const result = this.api.palParkAreaRead(id, _options);
        return result.toPromise();
    }


}



import { ObservablePokeathlonStatApi } from './ObservableAPI';

import { PokeathlonStatApiRequestFactory, PokeathlonStatApiResponseProcessor} from "../apis/PokeathlonStatApi";
export class PromisePokeathlonStatApi {
    private api: ObservablePokeathlonStatApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PokeathlonStatApiRequestFactory,
        responseProcessor?: PokeathlonStatApiResponseProcessor
    ) {
        this.api = new ObservablePokeathlonStatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokeathlonStatListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokeathlonStatList200Response>> {
        const result = this.api.pokeathlonStatListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokeathlonStatList(limit?: number, offset?: number, _options?: Configuration): Promise<PokeathlonStatList200Response> {
        const result = this.api.pokeathlonStatList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokeathlonStatReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokeathlonStat>> {
        const result = this.api.pokeathlonStatReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokeathlonStatRead(id: number, _options?: Configuration): Promise<PokeathlonStat> {
        const result = this.api.pokeathlonStatRead(id, _options);
        return result.toPromise();
    }


}



import { ObservablePokedexApi } from './ObservableAPI';

import { PokedexApiRequestFactory, PokedexApiResponseProcessor} from "../apis/PokedexApi";
export class PromisePokedexApi {
    private api: ObservablePokedexApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PokedexApiRequestFactory,
        responseProcessor?: PokedexApiResponseProcessor
    ) {
        this.api = new ObservablePokedexApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokedexListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokedexList200Response>> {
        const result = this.api.pokedexListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokedexList(limit?: number, offset?: number, _options?: Configuration): Promise<PokedexList200Response> {
        const result = this.api.pokedexList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokedexReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Pokedex>> {
        const result = this.api.pokedexReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokedexRead(id: number, _options?: Configuration): Promise<Pokedex> {
        const result = this.api.pokedexRead(id, _options);
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
     * @param idOrName 
     */
    public pokemonReadWithHttpInfo(idOrName: IDOrName1, _options?: Configuration): Promise<HttpInfo<Pokemon>> {
        const result = this.api.pokemonReadWithHttpInfo(idOrName, _options);
        return result.toPromise();
    }

    /**
     * @param idOrName 
     */
    public pokemonRead(idOrName: IDOrName1, _options?: Configuration): Promise<Pokemon> {
        const result = this.api.pokemonRead(idOrName, _options);
        return result.toPromise();
    }


}



import { ObservablePokemonColorApi } from './ObservableAPI';

import { PokemonColorApiRequestFactory, PokemonColorApiResponseProcessor} from "../apis/PokemonColorApi";
export class PromisePokemonColorApi {
    private api: ObservablePokemonColorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonColorApiRequestFactory,
        responseProcessor?: PokemonColorApiResponseProcessor
    ) {
        this.api = new ObservablePokemonColorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonColorListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonColorList200Response>> {
        const result = this.api.pokemonColorListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonColorList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonColorList200Response> {
        const result = this.api.pokemonColorList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonColorReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokemonColor>> {
        const result = this.api.pokemonColorReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonColorRead(id: number, _options?: Configuration): Promise<PokemonColor> {
        const result = this.api.pokemonColorRead(id, _options);
        return result.toPromise();
    }


}



import { ObservablePokemonFormApi } from './ObservableAPI';

import { PokemonFormApiRequestFactory, PokemonFormApiResponseProcessor} from "../apis/PokemonFormApi";
export class PromisePokemonFormApi {
    private api: ObservablePokemonFormApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonFormApiRequestFactory,
        responseProcessor?: PokemonFormApiResponseProcessor
    ) {
        this.api = new ObservablePokemonFormApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonFormListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonFormList200Response>> {
        const result = this.api.pokemonFormListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonFormList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonFormList200Response> {
        const result = this.api.pokemonFormList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonFormReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokemonForm>> {
        const result = this.api.pokemonFormReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonFormRead(id: number, _options?: Configuration): Promise<PokemonForm> {
        const result = this.api.pokemonFormRead(id, _options);
        return result.toPromise();
    }


}



import { ObservablePokemonHabitatApi } from './ObservableAPI';

import { PokemonHabitatApiRequestFactory, PokemonHabitatApiResponseProcessor} from "../apis/PokemonHabitatApi";
export class PromisePokemonHabitatApi {
    private api: ObservablePokemonHabitatApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonHabitatApiRequestFactory,
        responseProcessor?: PokemonHabitatApiResponseProcessor
    ) {
        this.api = new ObservablePokemonHabitatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonHabitatListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonHabitatList200Response>> {
        const result = this.api.pokemonHabitatListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonHabitatList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonHabitatList200Response> {
        const result = this.api.pokemonHabitatList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonHabitatReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokemonHabitat>> {
        const result = this.api.pokemonHabitatReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonHabitatRead(id: number, _options?: Configuration): Promise<PokemonHabitat> {
        const result = this.api.pokemonHabitatRead(id, _options);
        return result.toPromise();
    }


}



import { ObservablePokemonShapeApi } from './ObservableAPI';

import { PokemonShapeApiRequestFactory, PokemonShapeApiResponseProcessor} from "../apis/PokemonShapeApi";
export class PromisePokemonShapeApi {
    private api: ObservablePokemonShapeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonShapeApiRequestFactory,
        responseProcessor?: PokemonShapeApiResponseProcessor
    ) {
        this.api = new ObservablePokemonShapeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonShapeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonShapeList200Response>> {
        const result = this.api.pokemonShapeListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonShapeList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonShapeList200Response> {
        const result = this.api.pokemonShapeList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonShapeReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokemonShape>> {
        const result = this.api.pokemonShapeReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonShapeRead(id: number, _options?: Configuration): Promise<PokemonShape> {
        const result = this.api.pokemonShapeRead(id, _options);
        return result.toPromise();
    }


}



import { ObservablePokemonSpeciesApi } from './ObservableAPI';

import { PokemonSpeciesApiRequestFactory, PokemonSpeciesApiResponseProcessor} from "../apis/PokemonSpeciesApi";
export class PromisePokemonSpeciesApi {
    private api: ObservablePokemonSpeciesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PokemonSpeciesApiRequestFactory,
        responseProcessor?: PokemonSpeciesApiResponseProcessor
    ) {
        this.api = new ObservablePokemonSpeciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonSpeciesListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonSpeciesList200Response>> {
        const result = this.api.pokemonSpeciesListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public pokemonSpeciesList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonSpeciesList200Response> {
        const result = this.api.pokemonSpeciesList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonSpeciesReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokemonSpecies>> {
        const result = this.api.pokemonSpeciesReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public pokemonSpeciesRead(id: number, _options?: Configuration): Promise<PokemonSpecies> {
        const result = this.api.pokemonSpeciesRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableRegionApi } from './ObservableAPI';

import { RegionApiRequestFactory, RegionApiResponseProcessor} from "../apis/RegionApi";
export class PromiseRegionApi {
    private api: ObservableRegionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RegionApiRequestFactory,
        responseProcessor?: RegionApiResponseProcessor
    ) {
        this.api = new ObservableRegionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public regionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<RegionList200Response>> {
        const result = this.api.regionListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public regionList(limit?: number, offset?: number, _options?: Configuration): Promise<RegionList200Response> {
        const result = this.api.regionList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public regionReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Region>> {
        const result = this.api.regionReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public regionRead(id: number, _options?: Configuration): Promise<Region> {
        const result = this.api.regionRead(id, _options);
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
     * @param idOrName 
     */
    public statReadWithHttpInfo(idOrName: IDOrName2, _options?: Configuration): Promise<HttpInfo<Stat>> {
        const result = this.api.statReadWithHttpInfo(idOrName, _options);
        return result.toPromise();
    }

    /**
     * @param idOrName 
     */
    public statRead(idOrName: IDOrName2, _options?: Configuration): Promise<Stat> {
        const result = this.api.statRead(idOrName, _options);
        return result.toPromise();
    }


}



import { ObservableSuperContestEffectApi } from './ObservableAPI';

import { SuperContestEffectApiRequestFactory, SuperContestEffectApiResponseProcessor} from "../apis/SuperContestEffectApi";
export class PromiseSuperContestEffectApi {
    private api: ObservableSuperContestEffectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SuperContestEffectApiRequestFactory,
        responseProcessor?: SuperContestEffectApiResponseProcessor
    ) {
        this.api = new ObservableSuperContestEffectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public superContestEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<SuperContestEffectList200Response>> {
        const result = this.api.superContestEffectListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public superContestEffectList(limit?: number, offset?: number, _options?: Configuration): Promise<SuperContestEffectList200Response> {
        const result = this.api.superContestEffectList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public superContestEffectReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<SuperContestEffect>> {
        const result = this.api.superContestEffectReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public superContestEffectRead(id: number, _options?: Configuration): Promise<SuperContestEffect> {
        const result = this.api.superContestEffectRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableTypeApi } from './ObservableAPI';

import { TypeApiRequestFactory, TypeApiResponseProcessor} from "../apis/TypeApi";
export class PromiseTypeApi {
    private api: ObservableTypeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TypeApiRequestFactory,
        responseProcessor?: TypeApiResponseProcessor
    ) {
        this.api = new ObservableTypeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public typeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<TypeList200Response>> {
        const result = this.api.typeListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public typeList(limit?: number, offset?: number, _options?: Configuration): Promise<TypeList200Response> {
        const result = this.api.typeList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public typeReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Type>> {
        const result = this.api.typeReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public typeRead(id: number, _options?: Configuration): Promise<Type> {
        const result = this.api.typeRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableVersionApi } from './ObservableAPI';

import { VersionApiRequestFactory, VersionApiResponseProcessor} from "../apis/VersionApi";
export class PromiseVersionApi {
    private api: ObservableVersionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VersionApiRequestFactory,
        responseProcessor?: VersionApiResponseProcessor
    ) {
        this.api = new ObservableVersionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public versionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<VersionList200Response>> {
        const result = this.api.versionListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public versionList(limit?: number, offset?: number, _options?: Configuration): Promise<VersionList200Response> {
        const result = this.api.versionList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public versionReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Version>> {
        const result = this.api.versionReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public versionRead(id: number, _options?: Configuration): Promise<Version> {
        const result = this.api.versionRead(id, _options);
        return result.toPromise();
    }


}



import { ObservableVersionGroupApi } from './ObservableAPI';

import { VersionGroupApiRequestFactory, VersionGroupApiResponseProcessor} from "../apis/VersionGroupApi";
export class PromiseVersionGroupApi {
    private api: ObservableVersionGroupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VersionGroupApiRequestFactory,
        responseProcessor?: VersionGroupApiResponseProcessor
    ) {
        this.api = new ObservableVersionGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param limit 
     * @param offset 
     */
    public versionGroupListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<VersionGroupList200Response>> {
        const result = this.api.versionGroupListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     * @param offset 
     */
    public versionGroupList(limit?: number, offset?: number, _options?: Configuration): Promise<VersionGroupList200Response> {
        const result = this.api.versionGroupList(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public versionGroupReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<VersionGroup>> {
        const result = this.api.versionGroupReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public versionGroupRead(id: number, _options?: Configuration): Promise<VersionGroup> {
        const result = this.api.versionGroupRead(id, _options);
        return result.toPromise();
    }


}



