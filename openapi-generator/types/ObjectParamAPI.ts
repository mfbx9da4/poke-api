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

import { ObservableAbilityApi } from "./ObservableAPI";
import { AbilityApiRequestFactory, AbilityApiResponseProcessor} from "../apis/AbilityApi";

export interface AbilityApiAbilityListRequest {
    /**
     * 
     * @type number
     * @memberof AbilityApiabilityList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof AbilityApiabilityList
     */
    offset?: number
}

export interface AbilityApiAbilityReadRequest {
    /**
     * 
     * @type number
     * @memberof AbilityApiabilityRead
     */
    id: number
}

export class ObjectAbilityApi {
    private api: ObservableAbilityApi

    public constructor(configuration: Configuration, requestFactory?: AbilityApiRequestFactory, responseProcessor?: AbilityApiResponseProcessor) {
        this.api = new ObservableAbilityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public abilityListWithHttpInfo(param: AbilityApiAbilityListRequest = {}, options?: Configuration): Promise<HttpInfo<AbilityList200Response>> {
        return this.api.abilityListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public abilityList(param: AbilityApiAbilityListRequest = {}, options?: Configuration): Promise<AbilityList200Response> {
        return this.api.abilityList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public abilityReadWithHttpInfo(param: AbilityApiAbilityReadRequest, options?: Configuration): Promise<HttpInfo<Ability>> {
        return this.api.abilityReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public abilityRead(param: AbilityApiAbilityReadRequest, options?: Configuration): Promise<Ability> {
        return this.api.abilityRead(param.id,  options).toPromise();
    }

}

import { ObservableBerryApi } from "./ObservableAPI";
import { BerryApiRequestFactory, BerryApiResponseProcessor} from "../apis/BerryApi";

export interface BerryApiBerryListRequest {
    /**
     * 
     * @type number
     * @memberof BerryApiberryList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof BerryApiberryList
     */
    offset?: number
}

export interface BerryApiBerryReadRequest {
    /**
     * 
     * @type number
     * @memberof BerryApiberryRead
     */
    id: number
}

export class ObjectBerryApi {
    private api: ObservableBerryApi

    public constructor(configuration: Configuration, requestFactory?: BerryApiRequestFactory, responseProcessor?: BerryApiResponseProcessor) {
        this.api = new ObservableBerryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public berryListWithHttpInfo(param: BerryApiBerryListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Berry>>> {
        return this.api.berryListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public berryList(param: BerryApiBerryListRequest = {}, options?: Configuration): Promise<Array<Berry>> {
        return this.api.berryList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public berryReadWithHttpInfo(param: BerryApiBerryReadRequest, options?: Configuration): Promise<HttpInfo<Berry>> {
        return this.api.berryReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public berryRead(param: BerryApiBerryReadRequest, options?: Configuration): Promise<Berry> {
        return this.api.berryRead(param.id,  options).toPromise();
    }

}

import { ObservableBerryFirmnessApi } from "./ObservableAPI";
import { BerryFirmnessApiRequestFactory, BerryFirmnessApiResponseProcessor} from "../apis/BerryFirmnessApi";

export interface BerryFirmnessApiBerryFirmnessListRequest {
    /**
     * 
     * @type number
     * @memberof BerryFirmnessApiberryFirmnessList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof BerryFirmnessApiberryFirmnessList
     */
    offset?: number
}

export interface BerryFirmnessApiBerryFirmnessReadRequest {
    /**
     * 
     * @type number
     * @memberof BerryFirmnessApiberryFirmnessRead
     */
    id: number
}

export class ObjectBerryFirmnessApi {
    private api: ObservableBerryFirmnessApi

    public constructor(configuration: Configuration, requestFactory?: BerryFirmnessApiRequestFactory, responseProcessor?: BerryFirmnessApiResponseProcessor) {
        this.api = new ObservableBerryFirmnessApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public berryFirmnessListWithHttpInfo(param: BerryFirmnessApiBerryFirmnessListRequest = {}, options?: Configuration): Promise<HttpInfo<BerryFirmnessList200Response>> {
        return this.api.berryFirmnessListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public berryFirmnessList(param: BerryFirmnessApiBerryFirmnessListRequest = {}, options?: Configuration): Promise<BerryFirmnessList200Response> {
        return this.api.berryFirmnessList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public berryFirmnessReadWithHttpInfo(param: BerryFirmnessApiBerryFirmnessReadRequest, options?: Configuration): Promise<HttpInfo<BerryFirmness>> {
        return this.api.berryFirmnessReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public berryFirmnessRead(param: BerryFirmnessApiBerryFirmnessReadRequest, options?: Configuration): Promise<BerryFirmness> {
        return this.api.berryFirmnessRead(param.id,  options).toPromise();
    }

}

import { ObservableBerryFlavorApi } from "./ObservableAPI";
import { BerryFlavorApiRequestFactory, BerryFlavorApiResponseProcessor} from "../apis/BerryFlavorApi";

export interface BerryFlavorApiBerryFlavorListRequest {
    /**
     * 
     * @type number
     * @memberof BerryFlavorApiberryFlavorList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof BerryFlavorApiberryFlavorList
     */
    offset?: number
}

export interface BerryFlavorApiBerryFlavorReadRequest {
    /**
     * 
     * @type number
     * @memberof BerryFlavorApiberryFlavorRead
     */
    id: number
}

export class ObjectBerryFlavorApi {
    private api: ObservableBerryFlavorApi

    public constructor(configuration: Configuration, requestFactory?: BerryFlavorApiRequestFactory, responseProcessor?: BerryFlavorApiResponseProcessor) {
        this.api = new ObservableBerryFlavorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public berryFlavorListWithHttpInfo(param: BerryFlavorApiBerryFlavorListRequest = {}, options?: Configuration): Promise<HttpInfo<BerryFlavorList200Response>> {
        return this.api.berryFlavorListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public berryFlavorList(param: BerryFlavorApiBerryFlavorListRequest = {}, options?: Configuration): Promise<BerryFlavorList200Response> {
        return this.api.berryFlavorList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public berryFlavorReadWithHttpInfo(param: BerryFlavorApiBerryFlavorReadRequest, options?: Configuration): Promise<HttpInfo<BerryFlavor>> {
        return this.api.berryFlavorReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public berryFlavorRead(param: BerryFlavorApiBerryFlavorReadRequest, options?: Configuration): Promise<BerryFlavor> {
        return this.api.berryFlavorRead(param.id,  options).toPromise();
    }

}

import { ObservableCharacteristicApi } from "./ObservableAPI";
import { CharacteristicApiRequestFactory, CharacteristicApiResponseProcessor} from "../apis/CharacteristicApi";

export interface CharacteristicApiCharacteristicListRequest {
    /**
     * 
     * @type number
     * @memberof CharacteristicApicharacteristicList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof CharacteristicApicharacteristicList
     */
    offset?: number
}

export interface CharacteristicApiCharacteristicReadRequest {
    /**
     * 
     * @type number
     * @memberof CharacteristicApicharacteristicRead
     */
    id: number
}

export class ObjectCharacteristicApi {
    private api: ObservableCharacteristicApi

    public constructor(configuration: Configuration, requestFactory?: CharacteristicApiRequestFactory, responseProcessor?: CharacteristicApiResponseProcessor) {
        this.api = new ObservableCharacteristicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public characteristicListWithHttpInfo(param: CharacteristicApiCharacteristicListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Characteristic>>> {
        return this.api.characteristicListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public characteristicList(param: CharacteristicApiCharacteristicListRequest = {}, options?: Configuration): Promise<Array<Characteristic>> {
        return this.api.characteristicList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public characteristicReadWithHttpInfo(param: CharacteristicApiCharacteristicReadRequest, options?: Configuration): Promise<HttpInfo<Characteristic>> {
        return this.api.characteristicReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public characteristicRead(param: CharacteristicApiCharacteristicReadRequest, options?: Configuration): Promise<Characteristic> {
        return this.api.characteristicRead(param.id,  options).toPromise();
    }

}

import { ObservableContestEffectApi } from "./ObservableAPI";
import { ContestEffectApiRequestFactory, ContestEffectApiResponseProcessor} from "../apis/ContestEffectApi";

export interface ContestEffectApiContestEffectListRequest {
    /**
     * 
     * @type number
     * @memberof ContestEffectApicontestEffectList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ContestEffectApicontestEffectList
     */
    offset?: number
}

export interface ContestEffectApiContestEffectReadRequest {
    /**
     * 
     * @type number
     * @memberof ContestEffectApicontestEffectRead
     */
    id: number
}

export class ObjectContestEffectApi {
    private api: ObservableContestEffectApi

    public constructor(configuration: Configuration, requestFactory?: ContestEffectApiRequestFactory, responseProcessor?: ContestEffectApiResponseProcessor) {
        this.api = new ObservableContestEffectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public contestEffectListWithHttpInfo(param: ContestEffectApiContestEffectListRequest = {}, options?: Configuration): Promise<HttpInfo<ContestEffectList200Response>> {
        return this.api.contestEffectListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public contestEffectList(param: ContestEffectApiContestEffectListRequest = {}, options?: Configuration): Promise<ContestEffectList200Response> {
        return this.api.contestEffectList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public contestEffectReadWithHttpInfo(param: ContestEffectApiContestEffectReadRequest, options?: Configuration): Promise<HttpInfo<ContestEffect>> {
        return this.api.contestEffectReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public contestEffectRead(param: ContestEffectApiContestEffectReadRequest, options?: Configuration): Promise<ContestEffect> {
        return this.api.contestEffectRead(param.id,  options).toPromise();
    }

}

import { ObservableContestTypeApi } from "./ObservableAPI";
import { ContestTypeApiRequestFactory, ContestTypeApiResponseProcessor} from "../apis/ContestTypeApi";

export interface ContestTypeApiContestTypeListRequest {
    /**
     * 
     * @type number
     * @memberof ContestTypeApicontestTypeList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ContestTypeApicontestTypeList
     */
    offset?: number
}

export interface ContestTypeApiContestTypeReadRequest {
    /**
     * 
     * @type number
     * @memberof ContestTypeApicontestTypeRead
     */
    id: number
}

export class ObjectContestTypeApi {
    private api: ObservableContestTypeApi

    public constructor(configuration: Configuration, requestFactory?: ContestTypeApiRequestFactory, responseProcessor?: ContestTypeApiResponseProcessor) {
        this.api = new ObservableContestTypeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public contestTypeListWithHttpInfo(param: ContestTypeApiContestTypeListRequest = {}, options?: Configuration): Promise<HttpInfo<ContestTypeList200Response>> {
        return this.api.contestTypeListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public contestTypeList(param: ContestTypeApiContestTypeListRequest = {}, options?: Configuration): Promise<ContestTypeList200Response> {
        return this.api.contestTypeList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public contestTypeReadWithHttpInfo(param: ContestTypeApiContestTypeReadRequest, options?: Configuration): Promise<HttpInfo<ContestType>> {
        return this.api.contestTypeReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public contestTypeRead(param: ContestTypeApiContestTypeReadRequest, options?: Configuration): Promise<ContestType> {
        return this.api.contestTypeRead(param.id,  options).toPromise();
    }

}

import { ObservableEggGroupApi } from "./ObservableAPI";
import { EggGroupApiRequestFactory, EggGroupApiResponseProcessor} from "../apis/EggGroupApi";

export interface EggGroupApiEggGroupListRequest {
    /**
     * 
     * @type number
     * @memberof EggGroupApieggGroupList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof EggGroupApieggGroupList
     */
    offset?: number
}

export interface EggGroupApiEggGroupReadRequest {
    /**
     * 
     * @type number
     * @memberof EggGroupApieggGroupRead
     */
    id: number
}

export class ObjectEggGroupApi {
    private api: ObservableEggGroupApi

    public constructor(configuration: Configuration, requestFactory?: EggGroupApiRequestFactory, responseProcessor?: EggGroupApiResponseProcessor) {
        this.api = new ObservableEggGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public eggGroupListWithHttpInfo(param: EggGroupApiEggGroupListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<EggGroup>>> {
        return this.api.eggGroupListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eggGroupList(param: EggGroupApiEggGroupListRequest = {}, options?: Configuration): Promise<Array<EggGroup>> {
        return this.api.eggGroupList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eggGroupReadWithHttpInfo(param: EggGroupApiEggGroupReadRequest, options?: Configuration): Promise<HttpInfo<EggGroup>> {
        return this.api.eggGroupReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eggGroupRead(param: EggGroupApiEggGroupReadRequest, options?: Configuration): Promise<EggGroup> {
        return this.api.eggGroupRead(param.id,  options).toPromise();
    }

}

import { ObservableEncounterConditionApi } from "./ObservableAPI";
import { EncounterConditionApiRequestFactory, EncounterConditionApiResponseProcessor} from "../apis/EncounterConditionApi";

export interface EncounterConditionApiEncounterConditionListRequest {
    /**
     * 
     * @type number
     * @memberof EncounterConditionApiencounterConditionList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof EncounterConditionApiencounterConditionList
     */
    offset?: number
}

export interface EncounterConditionApiEncounterConditionReadRequest {
    /**
     * 
     * @type number
     * @memberof EncounterConditionApiencounterConditionRead
     */
    id: number
}

export class ObjectEncounterConditionApi {
    private api: ObservableEncounterConditionApi

    public constructor(configuration: Configuration, requestFactory?: EncounterConditionApiRequestFactory, responseProcessor?: EncounterConditionApiResponseProcessor) {
        this.api = new ObservableEncounterConditionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public encounterConditionListWithHttpInfo(param: EncounterConditionApiEncounterConditionListRequest = {}, options?: Configuration): Promise<HttpInfo<EncounterConditionList200Response>> {
        return this.api.encounterConditionListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public encounterConditionList(param: EncounterConditionApiEncounterConditionListRequest = {}, options?: Configuration): Promise<EncounterConditionList200Response> {
        return this.api.encounterConditionList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public encounterConditionReadWithHttpInfo(param: EncounterConditionApiEncounterConditionReadRequest, options?: Configuration): Promise<HttpInfo<EncounterCondition>> {
        return this.api.encounterConditionReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public encounterConditionRead(param: EncounterConditionApiEncounterConditionReadRequest, options?: Configuration): Promise<EncounterCondition> {
        return this.api.encounterConditionRead(param.id,  options).toPromise();
    }

}

import { ObservableEncounterConditionValueApi } from "./ObservableAPI";
import { EncounterConditionValueApiRequestFactory, EncounterConditionValueApiResponseProcessor} from "../apis/EncounterConditionValueApi";

export interface EncounterConditionValueApiEncounterConditionValueListRequest {
    /**
     * 
     * @type number
     * @memberof EncounterConditionValueApiencounterConditionValueList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof EncounterConditionValueApiencounterConditionValueList
     */
    offset?: number
}

export interface EncounterConditionValueApiEncounterConditionValueReadRequest {
    /**
     * 
     * @type number
     * @memberof EncounterConditionValueApiencounterConditionValueRead
     */
    id: number
}

export class ObjectEncounterConditionValueApi {
    private api: ObservableEncounterConditionValueApi

    public constructor(configuration: Configuration, requestFactory?: EncounterConditionValueApiRequestFactory, responseProcessor?: EncounterConditionValueApiResponseProcessor) {
        this.api = new ObservableEncounterConditionValueApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public encounterConditionValueListWithHttpInfo(param: EncounterConditionValueApiEncounterConditionValueListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<EncounterConditionValue>>> {
        return this.api.encounterConditionValueListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public encounterConditionValueList(param: EncounterConditionValueApiEncounterConditionValueListRequest = {}, options?: Configuration): Promise<Array<EncounterConditionValue>> {
        return this.api.encounterConditionValueList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public encounterConditionValueReadWithHttpInfo(param: EncounterConditionValueApiEncounterConditionValueReadRequest, options?: Configuration): Promise<HttpInfo<EncounterConditionValue>> {
        return this.api.encounterConditionValueReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public encounterConditionValueRead(param: EncounterConditionValueApiEncounterConditionValueReadRequest, options?: Configuration): Promise<EncounterConditionValue> {
        return this.api.encounterConditionValueRead(param.id,  options).toPromise();
    }

}

import { ObservableEncounterMethodApi } from "./ObservableAPI";
import { EncounterMethodApiRequestFactory, EncounterMethodApiResponseProcessor} from "../apis/EncounterMethodApi";

export interface EncounterMethodApiEncounterMethodListRequest {
    /**
     * 
     * @type number
     * @memberof EncounterMethodApiencounterMethodList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof EncounterMethodApiencounterMethodList
     */
    offset?: number
}

export interface EncounterMethodApiEncounterMethodReadRequest {
    /**
     * 
     * @type number
     * @memberof EncounterMethodApiencounterMethodRead
     */
    id: number
}

export class ObjectEncounterMethodApi {
    private api: ObservableEncounterMethodApi

    public constructor(configuration: Configuration, requestFactory?: EncounterMethodApiRequestFactory, responseProcessor?: EncounterMethodApiResponseProcessor) {
        this.api = new ObservableEncounterMethodApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public encounterMethodListWithHttpInfo(param: EncounterMethodApiEncounterMethodListRequest = {}, options?: Configuration): Promise<HttpInfo<EncounterMethodList200Response>> {
        return this.api.encounterMethodListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public encounterMethodList(param: EncounterMethodApiEncounterMethodListRequest = {}, options?: Configuration): Promise<EncounterMethodList200Response> {
        return this.api.encounterMethodList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public encounterMethodReadWithHttpInfo(param: EncounterMethodApiEncounterMethodReadRequest, options?: Configuration): Promise<HttpInfo<EncounterMethod>> {
        return this.api.encounterMethodReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public encounterMethodRead(param: EncounterMethodApiEncounterMethodReadRequest, options?: Configuration): Promise<EncounterMethod> {
        return this.api.encounterMethodRead(param.id,  options).toPromise();
    }

}

import { ObservableEvolutionChainApi } from "./ObservableAPI";
import { EvolutionChainApiRequestFactory, EvolutionChainApiResponseProcessor} from "../apis/EvolutionChainApi";

export interface EvolutionChainApiEvolutionChainListRequest {
    /**
     * 
     * @type number
     * @memberof EvolutionChainApievolutionChainList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof EvolutionChainApievolutionChainList
     */
    offset?: number
}

export interface EvolutionChainApiEvolutionChainReadRequest {
    /**
     * 
     * @type number
     * @memberof EvolutionChainApievolutionChainRead
     */
    id: number
}

export class ObjectEvolutionChainApi {
    private api: ObservableEvolutionChainApi

    public constructor(configuration: Configuration, requestFactory?: EvolutionChainApiRequestFactory, responseProcessor?: EvolutionChainApiResponseProcessor) {
        this.api = new ObservableEvolutionChainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public evolutionChainListWithHttpInfo(param: EvolutionChainApiEvolutionChainListRequest = {}, options?: Configuration): Promise<HttpInfo<EvolutionChainList200Response>> {
        return this.api.evolutionChainListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evolutionChainList(param: EvolutionChainApiEvolutionChainListRequest = {}, options?: Configuration): Promise<EvolutionChainList200Response> {
        return this.api.evolutionChainList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evolutionChainReadWithHttpInfo(param: EvolutionChainApiEvolutionChainReadRequest, options?: Configuration): Promise<HttpInfo<EvolutionChain>> {
        return this.api.evolutionChainReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evolutionChainRead(param: EvolutionChainApiEvolutionChainReadRequest, options?: Configuration): Promise<EvolutionChain> {
        return this.api.evolutionChainRead(param.id,  options).toPromise();
    }

}

import { ObservableEvolutionTriggerApi } from "./ObservableAPI";
import { EvolutionTriggerApiRequestFactory, EvolutionTriggerApiResponseProcessor} from "../apis/EvolutionTriggerApi";

export interface EvolutionTriggerApiEvolutionTriggerListRequest {
    /**
     * 
     * @type number
     * @memberof EvolutionTriggerApievolutionTriggerList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof EvolutionTriggerApievolutionTriggerList
     */
    offset?: number
}

export interface EvolutionTriggerApiEvolutionTriggerReadRequest {
    /**
     * 
     * @type number
     * @memberof EvolutionTriggerApievolutionTriggerRead
     */
    id: number
}

export class ObjectEvolutionTriggerApi {
    private api: ObservableEvolutionTriggerApi

    public constructor(configuration: Configuration, requestFactory?: EvolutionTriggerApiRequestFactory, responseProcessor?: EvolutionTriggerApiResponseProcessor) {
        this.api = new ObservableEvolutionTriggerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public evolutionTriggerListWithHttpInfo(param: EvolutionTriggerApiEvolutionTriggerListRequest = {}, options?: Configuration): Promise<HttpInfo<EvolutionTriggerList200Response>> {
        return this.api.evolutionTriggerListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evolutionTriggerList(param: EvolutionTriggerApiEvolutionTriggerListRequest = {}, options?: Configuration): Promise<EvolutionTriggerList200Response> {
        return this.api.evolutionTriggerList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evolutionTriggerReadWithHttpInfo(param: EvolutionTriggerApiEvolutionTriggerReadRequest, options?: Configuration): Promise<HttpInfo<EvolutionTrigger>> {
        return this.api.evolutionTriggerReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evolutionTriggerRead(param: EvolutionTriggerApiEvolutionTriggerReadRequest, options?: Configuration): Promise<EvolutionTrigger> {
        return this.api.evolutionTriggerRead(param.id,  options).toPromise();
    }

}

import { ObservableGenderApi } from "./ObservableAPI";
import { GenderApiRequestFactory, GenderApiResponseProcessor} from "../apis/GenderApi";

export interface GenderApiGenderListRequest {
    /**
     * 
     * @type number
     * @memberof GenderApigenderList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof GenderApigenderList
     */
    offset?: number
}

export interface GenderApiGenderReadRequest {
    /**
     * 
     * @type number
     * @memberof GenderApigenderRead
     */
    id: number
}

export class ObjectGenderApi {
    private api: ObservableGenderApi

    public constructor(configuration: Configuration, requestFactory?: GenderApiRequestFactory, responseProcessor?: GenderApiResponseProcessor) {
        this.api = new ObservableGenderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public genderListWithHttpInfo(param: GenderApiGenderListRequest = {}, options?: Configuration): Promise<HttpInfo<GenderList200Response>> {
        return this.api.genderListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public genderList(param: GenderApiGenderListRequest = {}, options?: Configuration): Promise<GenderList200Response> {
        return this.api.genderList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public genderReadWithHttpInfo(param: GenderApiGenderReadRequest, options?: Configuration): Promise<HttpInfo<Gender>> {
        return this.api.genderReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public genderRead(param: GenderApiGenderReadRequest, options?: Configuration): Promise<Gender> {
        return this.api.genderRead(param.id,  options).toPromise();
    }

}

import { ObservableGenerationApi } from "./ObservableAPI";
import { GenerationApiRequestFactory, GenerationApiResponseProcessor} from "../apis/GenerationApi";

export interface GenerationApiGenerationListRequest {
    /**
     * 
     * @type number
     * @memberof GenerationApigenerationList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof GenerationApigenerationList
     */
    offset?: number
}

export interface GenerationApiGenerationReadRequest {
    /**
     * 
     * @type number
     * @memberof GenerationApigenerationRead
     */
    id: number
}

export class ObjectGenerationApi {
    private api: ObservableGenerationApi

    public constructor(configuration: Configuration, requestFactory?: GenerationApiRequestFactory, responseProcessor?: GenerationApiResponseProcessor) {
        this.api = new ObservableGenerationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public generationListWithHttpInfo(param: GenerationApiGenerationListRequest = {}, options?: Configuration): Promise<HttpInfo<GenerationList200Response>> {
        return this.api.generationListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public generationList(param: GenerationApiGenerationListRequest = {}, options?: Configuration): Promise<GenerationList200Response> {
        return this.api.generationList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public generationReadWithHttpInfo(param: GenerationApiGenerationReadRequest, options?: Configuration): Promise<HttpInfo<Generation>> {
        return this.api.generationReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public generationRead(param: GenerationApiGenerationReadRequest, options?: Configuration): Promise<Generation> {
        return this.api.generationRead(param.id,  options).toPromise();
    }

}

import { ObservableGrowthRateApi } from "./ObservableAPI";
import { GrowthRateApiRequestFactory, GrowthRateApiResponseProcessor} from "../apis/GrowthRateApi";

export interface GrowthRateApiGrowthRateListRequest {
    /**
     * 
     * @type number
     * @memberof GrowthRateApigrowthRateList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof GrowthRateApigrowthRateList
     */
    offset?: number
}

export interface GrowthRateApiGrowthRateReadRequest {
    /**
     * 
     * @type number
     * @memberof GrowthRateApigrowthRateRead
     */
    id: number
}

export class ObjectGrowthRateApi {
    private api: ObservableGrowthRateApi

    public constructor(configuration: Configuration, requestFactory?: GrowthRateApiRequestFactory, responseProcessor?: GrowthRateApiResponseProcessor) {
        this.api = new ObservableGrowthRateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public growthRateListWithHttpInfo(param: GrowthRateApiGrowthRateListRequest = {}, options?: Configuration): Promise<HttpInfo<GrowthRateList200Response>> {
        return this.api.growthRateListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public growthRateList(param: GrowthRateApiGrowthRateListRequest = {}, options?: Configuration): Promise<GrowthRateList200Response> {
        return this.api.growthRateList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public growthRateReadWithHttpInfo(param: GrowthRateApiGrowthRateReadRequest, options?: Configuration): Promise<HttpInfo<GrowthRate>> {
        return this.api.growthRateReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public growthRateRead(param: GrowthRateApiGrowthRateReadRequest, options?: Configuration): Promise<GrowthRate> {
        return this.api.growthRateRead(param.id,  options).toPromise();
    }

}

import { ObservableItemApi } from "./ObservableAPI";
import { ItemApiRequestFactory, ItemApiResponseProcessor} from "../apis/ItemApi";

export interface ItemApiItemListRequest {
    /**
     * 
     * @type number
     * @memberof ItemApiitemList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ItemApiitemList
     */
    offset?: number
}

export interface ItemApiItemReadRequest {
    /**
     * 
     * @type number
     * @memberof ItemApiitemRead
     */
    id: number
}

export class ObjectItemApi {
    private api: ObservableItemApi

    public constructor(configuration: Configuration, requestFactory?: ItemApiRequestFactory, responseProcessor?: ItemApiResponseProcessor) {
        this.api = new ObservableItemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public itemListWithHttpInfo(param: ItemApiItemListRequest = {}, options?: Configuration): Promise<HttpInfo<ItemList200Response>> {
        return this.api.itemListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemList(param: ItemApiItemListRequest = {}, options?: Configuration): Promise<ItemList200Response> {
        return this.api.itemList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemReadWithHttpInfo(param: ItemApiItemReadRequest, options?: Configuration): Promise<HttpInfo<Item>> {
        return this.api.itemReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemRead(param: ItemApiItemReadRequest, options?: Configuration): Promise<Item> {
        return this.api.itemRead(param.id,  options).toPromise();
    }

}

import { ObservableItemAttributeApi } from "./ObservableAPI";
import { ItemAttributeApiRequestFactory, ItemAttributeApiResponseProcessor} from "../apis/ItemAttributeApi";

export interface ItemAttributeApiItemAttributeListRequest {
    /**
     * 
     * @type number
     * @memberof ItemAttributeApiitemAttributeList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ItemAttributeApiitemAttributeList
     */
    offset?: number
}

export interface ItemAttributeApiItemAttributeReadRequest {
    /**
     * 
     * @type number
     * @memberof ItemAttributeApiitemAttributeRead
     */
    id: number
}

export class ObjectItemAttributeApi {
    private api: ObservableItemAttributeApi

    public constructor(configuration: Configuration, requestFactory?: ItemAttributeApiRequestFactory, responseProcessor?: ItemAttributeApiResponseProcessor) {
        this.api = new ObservableItemAttributeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public itemAttributeListWithHttpInfo(param: ItemAttributeApiItemAttributeListRequest = {}, options?: Configuration): Promise<HttpInfo<ItemAttributeList200Response>> {
        return this.api.itemAttributeListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemAttributeList(param: ItemAttributeApiItemAttributeListRequest = {}, options?: Configuration): Promise<ItemAttributeList200Response> {
        return this.api.itemAttributeList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemAttributeReadWithHttpInfo(param: ItemAttributeApiItemAttributeReadRequest, options?: Configuration): Promise<HttpInfo<ItemAttribute>> {
        return this.api.itemAttributeReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemAttributeRead(param: ItemAttributeApiItemAttributeReadRequest, options?: Configuration): Promise<ItemAttribute> {
        return this.api.itemAttributeRead(param.id,  options).toPromise();
    }

}

import { ObservableItemCategoryApi } from "./ObservableAPI";
import { ItemCategoryApiRequestFactory, ItemCategoryApiResponseProcessor} from "../apis/ItemCategoryApi";

export interface ItemCategoryApiItemCategoryListRequest {
    /**
     * 
     * @type number
     * @memberof ItemCategoryApiitemCategoryList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ItemCategoryApiitemCategoryList
     */
    offset?: number
}

export interface ItemCategoryApiItemCategoryReadRequest {
    /**
     * 
     * @type number
     * @memberof ItemCategoryApiitemCategoryRead
     */
    id: number
}

export class ObjectItemCategoryApi {
    private api: ObservableItemCategoryApi

    public constructor(configuration: Configuration, requestFactory?: ItemCategoryApiRequestFactory, responseProcessor?: ItemCategoryApiResponseProcessor) {
        this.api = new ObservableItemCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public itemCategoryListWithHttpInfo(param: ItemCategoryApiItemCategoryListRequest = {}, options?: Configuration): Promise<HttpInfo<ItemCategoryList200Response>> {
        return this.api.itemCategoryListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemCategoryList(param: ItemCategoryApiItemCategoryListRequest = {}, options?: Configuration): Promise<ItemCategoryList200Response> {
        return this.api.itemCategoryList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemCategoryReadWithHttpInfo(param: ItemCategoryApiItemCategoryReadRequest, options?: Configuration): Promise<HttpInfo<ItemCategory>> {
        return this.api.itemCategoryReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemCategoryRead(param: ItemCategoryApiItemCategoryReadRequest, options?: Configuration): Promise<ItemCategory> {
        return this.api.itemCategoryRead(param.id,  options).toPromise();
    }

}

import { ObservableItemFlingEffectApi } from "./ObservableAPI";
import { ItemFlingEffectApiRequestFactory, ItemFlingEffectApiResponseProcessor} from "../apis/ItemFlingEffectApi";

export interface ItemFlingEffectApiItemFlingEffectListRequest {
    /**
     * 
     * @type number
     * @memberof ItemFlingEffectApiitemFlingEffectList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ItemFlingEffectApiitemFlingEffectList
     */
    offset?: number
}

export interface ItemFlingEffectApiItemFlingEffectReadRequest {
    /**
     * 
     * @type number
     * @memberof ItemFlingEffectApiitemFlingEffectRead
     */
    id: number
}

export class ObjectItemFlingEffectApi {
    private api: ObservableItemFlingEffectApi

    public constructor(configuration: Configuration, requestFactory?: ItemFlingEffectApiRequestFactory, responseProcessor?: ItemFlingEffectApiResponseProcessor) {
        this.api = new ObservableItemFlingEffectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public itemFlingEffectListWithHttpInfo(param: ItemFlingEffectApiItemFlingEffectListRequest = {}, options?: Configuration): Promise<HttpInfo<ItemFlingEffectList200Response>> {
        return this.api.itemFlingEffectListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemFlingEffectList(param: ItemFlingEffectApiItemFlingEffectListRequest = {}, options?: Configuration): Promise<ItemFlingEffectList200Response> {
        return this.api.itemFlingEffectList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemFlingEffectReadWithHttpInfo(param: ItemFlingEffectApiItemFlingEffectReadRequest, options?: Configuration): Promise<HttpInfo<ItemFlingEffect>> {
        return this.api.itemFlingEffectReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemFlingEffectRead(param: ItemFlingEffectApiItemFlingEffectReadRequest, options?: Configuration): Promise<ItemFlingEffect> {
        return this.api.itemFlingEffectRead(param.id,  options).toPromise();
    }

}

import { ObservableItemPocketApi } from "./ObservableAPI";
import { ItemPocketApiRequestFactory, ItemPocketApiResponseProcessor} from "../apis/ItemPocketApi";

export interface ItemPocketApiItemPocketListRequest {
    /**
     * 
     * @type number
     * @memberof ItemPocketApiitemPocketList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ItemPocketApiitemPocketList
     */
    offset?: number
}

export interface ItemPocketApiItemPocketReadRequest {
    /**
     * 
     * @type number
     * @memberof ItemPocketApiitemPocketRead
     */
    id: number
}

export class ObjectItemPocketApi {
    private api: ObservableItemPocketApi

    public constructor(configuration: Configuration, requestFactory?: ItemPocketApiRequestFactory, responseProcessor?: ItemPocketApiResponseProcessor) {
        this.api = new ObservableItemPocketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public itemPocketListWithHttpInfo(param: ItemPocketApiItemPocketListRequest = {}, options?: Configuration): Promise<HttpInfo<ItemPocketList200Response>> {
        return this.api.itemPocketListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemPocketList(param: ItemPocketApiItemPocketListRequest = {}, options?: Configuration): Promise<ItemPocketList200Response> {
        return this.api.itemPocketList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemPocketReadWithHttpInfo(param: ItemPocketApiItemPocketReadRequest, options?: Configuration): Promise<HttpInfo<ItemPocket>> {
        return this.api.itemPocketReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemPocketRead(param: ItemPocketApiItemPocketReadRequest, options?: Configuration): Promise<ItemPocket> {
        return this.api.itemPocketRead(param.id,  options).toPromise();
    }

}

import { ObservableLanguageApi } from "./ObservableAPI";
import { LanguageApiRequestFactory, LanguageApiResponseProcessor} from "../apis/LanguageApi";

export interface LanguageApiLanguageListRequest {
    /**
     * 
     * @type number
     * @memberof LanguageApilanguageList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof LanguageApilanguageList
     */
    offset?: number
}

export interface LanguageApiLanguageReadRequest {
    /**
     * 
     * @type number
     * @memberof LanguageApilanguageRead
     */
    id: number
}

export class ObjectLanguageApi {
    private api: ObservableLanguageApi

    public constructor(configuration: Configuration, requestFactory?: LanguageApiRequestFactory, responseProcessor?: LanguageApiResponseProcessor) {
        this.api = new ObservableLanguageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public languageListWithHttpInfo(param: LanguageApiLanguageListRequest = {}, options?: Configuration): Promise<HttpInfo<LanguageList200Response>> {
        return this.api.languageListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public languageList(param: LanguageApiLanguageListRequest = {}, options?: Configuration): Promise<LanguageList200Response> {
        return this.api.languageList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public languageReadWithHttpInfo(param: LanguageApiLanguageReadRequest, options?: Configuration): Promise<HttpInfo<Language>> {
        return this.api.languageReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public languageRead(param: LanguageApiLanguageReadRequest, options?: Configuration): Promise<Language> {
        return this.api.languageRead(param.id,  options).toPromise();
    }

}

import { ObservableLocationApi } from "./ObservableAPI";
import { LocationApiRequestFactory, LocationApiResponseProcessor} from "../apis/LocationApi";

export interface LocationApiLocationListRequest {
    /**
     * 
     * @type number
     * @memberof LocationApilocationList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof LocationApilocationList
     */
    offset?: number
}

export interface LocationApiLocationReadRequest {
    /**
     * 
     * @type number
     * @memberof LocationApilocationRead
     */
    id: number
}

export class ObjectLocationApi {
    private api: ObservableLocationApi

    public constructor(configuration: Configuration, requestFactory?: LocationApiRequestFactory, responseProcessor?: LocationApiResponseProcessor) {
        this.api = new ObservableLocationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public locationListWithHttpInfo(param: LocationApiLocationListRequest = {}, options?: Configuration): Promise<HttpInfo<LocationList200Response>> {
        return this.api.locationListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationList(param: LocationApiLocationListRequest = {}, options?: Configuration): Promise<LocationList200Response> {
        return this.api.locationList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationReadWithHttpInfo(param: LocationApiLocationReadRequest, options?: Configuration): Promise<HttpInfo<Location>> {
        return this.api.locationReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationRead(param: LocationApiLocationReadRequest, options?: Configuration): Promise<Location> {
        return this.api.locationRead(param.id,  options).toPromise();
    }

}

import { ObservableLocationAreaApi } from "./ObservableAPI";
import { LocationAreaApiRequestFactory, LocationAreaApiResponseProcessor} from "../apis/LocationAreaApi";

export interface LocationAreaApiLocationAreaListRequest {
    /**
     * 
     * @type number
     * @memberof LocationAreaApilocationAreaList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof LocationAreaApilocationAreaList
     */
    offset?: number
}

export interface LocationAreaApiLocationAreaReadRequest {
    /**
     * 
     * @type number
     * @memberof LocationAreaApilocationAreaRead
     */
    id: number
}

export class ObjectLocationAreaApi {
    private api: ObservableLocationAreaApi

    public constructor(configuration: Configuration, requestFactory?: LocationAreaApiRequestFactory, responseProcessor?: LocationAreaApiResponseProcessor) {
        this.api = new ObservableLocationAreaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public locationAreaListWithHttpInfo(param: LocationAreaApiLocationAreaListRequest = {}, options?: Configuration): Promise<HttpInfo<LocationAreaList200Response>> {
        return this.api.locationAreaListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationAreaList(param: LocationAreaApiLocationAreaListRequest = {}, options?: Configuration): Promise<LocationAreaList200Response> {
        return this.api.locationAreaList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationAreaReadWithHttpInfo(param: LocationAreaApiLocationAreaReadRequest, options?: Configuration): Promise<HttpInfo<LocationArea>> {
        return this.api.locationAreaReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationAreaRead(param: LocationAreaApiLocationAreaReadRequest, options?: Configuration): Promise<LocationArea> {
        return this.api.locationAreaRead(param.id,  options).toPromise();
    }

}

import { ObservableMachineApi } from "./ObservableAPI";
import { MachineApiRequestFactory, MachineApiResponseProcessor} from "../apis/MachineApi";

export interface MachineApiMachineListRequest {
    /**
     * 
     * @type number
     * @memberof MachineApimachineList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof MachineApimachineList
     */
    offset?: number
}

export interface MachineApiMachineReadRequest {
    /**
     * 
     * @type number
     * @memberof MachineApimachineRead
     */
    id: number
}

export class ObjectMachineApi {
    private api: ObservableMachineApi

    public constructor(configuration: Configuration, requestFactory?: MachineApiRequestFactory, responseProcessor?: MachineApiResponseProcessor) {
        this.api = new ObservableMachineApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public machineListWithHttpInfo(param: MachineApiMachineListRequest = {}, options?: Configuration): Promise<HttpInfo<MachineList200Response>> {
        return this.api.machineListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public machineList(param: MachineApiMachineListRequest = {}, options?: Configuration): Promise<MachineList200Response> {
        return this.api.machineList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public machineReadWithHttpInfo(param: MachineApiMachineReadRequest, options?: Configuration): Promise<HttpInfo<Machine>> {
        return this.api.machineReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public machineRead(param: MachineApiMachineReadRequest, options?: Configuration): Promise<Machine> {
        return this.api.machineRead(param.id,  options).toPromise();
    }

}

import { ObservableMoveApi } from "./ObservableAPI";
import { MoveApiRequestFactory, MoveApiResponseProcessor} from "../apis/MoveApi";

export interface MoveApiMoveListRequest {
    /**
     * 
     * @type number
     * @memberof MoveApimoveList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof MoveApimoveList
     */
    offset?: number
}

export interface MoveApiMoveReadRequest {
    /**
     * 
     * @type number
     * @memberof MoveApimoveRead
     */
    id: number
}

export class ObjectMoveApi {
    private api: ObservableMoveApi

    public constructor(configuration: Configuration, requestFactory?: MoveApiRequestFactory, responseProcessor?: MoveApiResponseProcessor) {
        this.api = new ObservableMoveApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public moveListWithHttpInfo(param: MoveApiMoveListRequest = {}, options?: Configuration): Promise<HttpInfo<MoveList200Response>> {
        return this.api.moveListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveList(param: MoveApiMoveListRequest = {}, options?: Configuration): Promise<MoveList200Response> {
        return this.api.moveList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveReadWithHttpInfo(param: MoveApiMoveReadRequest, options?: Configuration): Promise<HttpInfo<Move>> {
        return this.api.moveReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveRead(param: MoveApiMoveReadRequest, options?: Configuration): Promise<Move> {
        return this.api.moveRead(param.id,  options).toPromise();
    }

}

import { ObservableMoveAilmentApi } from "./ObservableAPI";
import { MoveAilmentApiRequestFactory, MoveAilmentApiResponseProcessor} from "../apis/MoveAilmentApi";

export interface MoveAilmentApiMoveAilmentListRequest {
    /**
     * 
     * @type number
     * @memberof MoveAilmentApimoveAilmentList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof MoveAilmentApimoveAilmentList
     */
    offset?: number
}

export interface MoveAilmentApiMoveAilmentReadRequest {
    /**
     * 
     * @type number
     * @memberof MoveAilmentApimoveAilmentRead
     */
    id: number
}

export class ObjectMoveAilmentApi {
    private api: ObservableMoveAilmentApi

    public constructor(configuration: Configuration, requestFactory?: MoveAilmentApiRequestFactory, responseProcessor?: MoveAilmentApiResponseProcessor) {
        this.api = new ObservableMoveAilmentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public moveAilmentListWithHttpInfo(param: MoveAilmentApiMoveAilmentListRequest = {}, options?: Configuration): Promise<HttpInfo<MoveAilmentList200Response>> {
        return this.api.moveAilmentListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveAilmentList(param: MoveAilmentApiMoveAilmentListRequest = {}, options?: Configuration): Promise<MoveAilmentList200Response> {
        return this.api.moveAilmentList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveAilmentReadWithHttpInfo(param: MoveAilmentApiMoveAilmentReadRequest, options?: Configuration): Promise<HttpInfo<MoveAilment>> {
        return this.api.moveAilmentReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveAilmentRead(param: MoveAilmentApiMoveAilmentReadRequest, options?: Configuration): Promise<MoveAilment> {
        return this.api.moveAilmentRead(param.id,  options).toPromise();
    }

}

import { ObservableMoveBattleStyleApi } from "./ObservableAPI";
import { MoveBattleStyleApiRequestFactory, MoveBattleStyleApiResponseProcessor} from "../apis/MoveBattleStyleApi";

export interface MoveBattleStyleApiMoveBattleStyleListRequest {
    /**
     * 
     * @type number
     * @memberof MoveBattleStyleApimoveBattleStyleList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof MoveBattleStyleApimoveBattleStyleList
     */
    offset?: number
}

export interface MoveBattleStyleApiMoveBattleStyleReadRequest {
    /**
     * 
     * @type number
     * @memberof MoveBattleStyleApimoveBattleStyleRead
     */
    id: number
}

export class ObjectMoveBattleStyleApi {
    private api: ObservableMoveBattleStyleApi

    public constructor(configuration: Configuration, requestFactory?: MoveBattleStyleApiRequestFactory, responseProcessor?: MoveBattleStyleApiResponseProcessor) {
        this.api = new ObservableMoveBattleStyleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public moveBattleStyleListWithHttpInfo(param: MoveBattleStyleApiMoveBattleStyleListRequest = {}, options?: Configuration): Promise<HttpInfo<MoveBattleStyleList200Response>> {
        return this.api.moveBattleStyleListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveBattleStyleList(param: MoveBattleStyleApiMoveBattleStyleListRequest = {}, options?: Configuration): Promise<MoveBattleStyleList200Response> {
        return this.api.moveBattleStyleList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveBattleStyleReadWithHttpInfo(param: MoveBattleStyleApiMoveBattleStyleReadRequest, options?: Configuration): Promise<HttpInfo<MoveBattleStyle>> {
        return this.api.moveBattleStyleReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveBattleStyleRead(param: MoveBattleStyleApiMoveBattleStyleReadRequest, options?: Configuration): Promise<MoveBattleStyle> {
        return this.api.moveBattleStyleRead(param.id,  options).toPromise();
    }

}

import { ObservableMoveCategoryApi } from "./ObservableAPI";
import { MoveCategoryApiRequestFactory, MoveCategoryApiResponseProcessor} from "../apis/MoveCategoryApi";

export interface MoveCategoryApiMoveCategoryListRequest {
    /**
     * 
     * @type number
     * @memberof MoveCategoryApimoveCategoryList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof MoveCategoryApimoveCategoryList
     */
    offset?: number
}

export interface MoveCategoryApiMoveCategoryReadRequest {
    /**
     * 
     * @type number
     * @memberof MoveCategoryApimoveCategoryRead
     */
    id: number
}

export class ObjectMoveCategoryApi {
    private api: ObservableMoveCategoryApi

    public constructor(configuration: Configuration, requestFactory?: MoveCategoryApiRequestFactory, responseProcessor?: MoveCategoryApiResponseProcessor) {
        this.api = new ObservableMoveCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public moveCategoryListWithHttpInfo(param: MoveCategoryApiMoveCategoryListRequest = {}, options?: Configuration): Promise<HttpInfo<MoveCategoryList200Response>> {
        return this.api.moveCategoryListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveCategoryList(param: MoveCategoryApiMoveCategoryListRequest = {}, options?: Configuration): Promise<MoveCategoryList200Response> {
        return this.api.moveCategoryList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveCategoryReadWithHttpInfo(param: MoveCategoryApiMoveCategoryReadRequest, options?: Configuration): Promise<HttpInfo<MoveCategory>> {
        return this.api.moveCategoryReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveCategoryRead(param: MoveCategoryApiMoveCategoryReadRequest, options?: Configuration): Promise<MoveCategory> {
        return this.api.moveCategoryRead(param.id,  options).toPromise();
    }

}

import { ObservableMoveDamageClassApi } from "./ObservableAPI";
import { MoveDamageClassApiRequestFactory, MoveDamageClassApiResponseProcessor} from "../apis/MoveDamageClassApi";

export interface MoveDamageClassApiMoveDamageClassListRequest {
    /**
     * 
     * @type number
     * @memberof MoveDamageClassApimoveDamageClassList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof MoveDamageClassApimoveDamageClassList
     */
    offset?: number
}

export interface MoveDamageClassApiMoveDamageClassReadRequest {
    /**
     * 
     * @type number
     * @memberof MoveDamageClassApimoveDamageClassRead
     */
    id: number
}

export class ObjectMoveDamageClassApi {
    private api: ObservableMoveDamageClassApi

    public constructor(configuration: Configuration, requestFactory?: MoveDamageClassApiRequestFactory, responseProcessor?: MoveDamageClassApiResponseProcessor) {
        this.api = new ObservableMoveDamageClassApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public moveDamageClassListWithHttpInfo(param: MoveDamageClassApiMoveDamageClassListRequest = {}, options?: Configuration): Promise<HttpInfo<MoveDamageClassList200Response>> {
        return this.api.moveDamageClassListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveDamageClassList(param: MoveDamageClassApiMoveDamageClassListRequest = {}, options?: Configuration): Promise<MoveDamageClassList200Response> {
        return this.api.moveDamageClassList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveDamageClassReadWithHttpInfo(param: MoveDamageClassApiMoveDamageClassReadRequest, options?: Configuration): Promise<HttpInfo<MoveDamageClass>> {
        return this.api.moveDamageClassReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveDamageClassRead(param: MoveDamageClassApiMoveDamageClassReadRequest, options?: Configuration): Promise<MoveDamageClass> {
        return this.api.moveDamageClassRead(param.id,  options).toPromise();
    }

}

import { ObservableMoveLearnMethodApi } from "./ObservableAPI";
import { MoveLearnMethodApiRequestFactory, MoveLearnMethodApiResponseProcessor} from "../apis/MoveLearnMethodApi";

export interface MoveLearnMethodApiMoveLearnMethodListRequest {
    /**
     * 
     * @type number
     * @memberof MoveLearnMethodApimoveLearnMethodList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof MoveLearnMethodApimoveLearnMethodList
     */
    offset?: number
}

export interface MoveLearnMethodApiMoveLearnMethodReadRequest {
    /**
     * 
     * @type number
     * @memberof MoveLearnMethodApimoveLearnMethodRead
     */
    id: number
}

export class ObjectMoveLearnMethodApi {
    private api: ObservableMoveLearnMethodApi

    public constructor(configuration: Configuration, requestFactory?: MoveLearnMethodApiRequestFactory, responseProcessor?: MoveLearnMethodApiResponseProcessor) {
        this.api = new ObservableMoveLearnMethodApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public moveLearnMethodListWithHttpInfo(param: MoveLearnMethodApiMoveLearnMethodListRequest = {}, options?: Configuration): Promise<HttpInfo<MoveLearnMethodList200Response>> {
        return this.api.moveLearnMethodListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveLearnMethodList(param: MoveLearnMethodApiMoveLearnMethodListRequest = {}, options?: Configuration): Promise<MoveLearnMethodList200Response> {
        return this.api.moveLearnMethodList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveLearnMethodReadWithHttpInfo(param: MoveLearnMethodApiMoveLearnMethodReadRequest, options?: Configuration): Promise<HttpInfo<MoveLearnMethod>> {
        return this.api.moveLearnMethodReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveLearnMethodRead(param: MoveLearnMethodApiMoveLearnMethodReadRequest, options?: Configuration): Promise<MoveLearnMethod> {
        return this.api.moveLearnMethodRead(param.id,  options).toPromise();
    }

}

import { ObservableMoveTargetApi } from "./ObservableAPI";
import { MoveTargetApiRequestFactory, MoveTargetApiResponseProcessor} from "../apis/MoveTargetApi";

export interface MoveTargetApiMoveTargetListRequest {
    /**
     * 
     * @type number
     * @memberof MoveTargetApimoveTargetList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof MoveTargetApimoveTargetList
     */
    offset?: number
}

export interface MoveTargetApiMoveTargetReadRequest {
    /**
     * 
     * @type number
     * @memberof MoveTargetApimoveTargetRead
     */
    id: number
}

export class ObjectMoveTargetApi {
    private api: ObservableMoveTargetApi

    public constructor(configuration: Configuration, requestFactory?: MoveTargetApiRequestFactory, responseProcessor?: MoveTargetApiResponseProcessor) {
        this.api = new ObservableMoveTargetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public moveTargetListWithHttpInfo(param: MoveTargetApiMoveTargetListRequest = {}, options?: Configuration): Promise<HttpInfo<MoveTargetList200Response>> {
        return this.api.moveTargetListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveTargetList(param: MoveTargetApiMoveTargetListRequest = {}, options?: Configuration): Promise<MoveTargetList200Response> {
        return this.api.moveTargetList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveTargetReadWithHttpInfo(param: MoveTargetApiMoveTargetReadRequest, options?: Configuration): Promise<HttpInfo<MoveTarget>> {
        return this.api.moveTargetReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public moveTargetRead(param: MoveTargetApiMoveTargetReadRequest, options?: Configuration): Promise<MoveTarget> {
        return this.api.moveTargetRead(param.id,  options).toPromise();
    }

}

import { ObservableNatureApi } from "./ObservableAPI";
import { NatureApiRequestFactory, NatureApiResponseProcessor} from "../apis/NatureApi";

export interface NatureApiNatureListRequest {
    /**
     * 
     * @type number
     * @memberof NatureApinatureList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof NatureApinatureList
     */
    offset?: number
}

export interface NatureApiNatureReadRequest {
    /**
     * 
     * @type IDOrName
     * @memberof NatureApinatureRead
     */
    idOrName: IDOrName
}

export class ObjectNatureApi {
    private api: ObservableNatureApi

    public constructor(configuration: Configuration, requestFactory?: NatureApiRequestFactory, responseProcessor?: NatureApiResponseProcessor) {
        this.api = new ObservableNatureApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public natureListWithHttpInfo(param: NatureApiNatureListRequest = {}, options?: Configuration): Promise<HttpInfo<NatureList200Response>> {
        return this.api.natureListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public natureList(param: NatureApiNatureListRequest = {}, options?: Configuration): Promise<NatureList200Response> {
        return this.api.natureList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public natureReadWithHttpInfo(param: NatureApiNatureReadRequest, options?: Configuration): Promise<HttpInfo<Nature>> {
        return this.api.natureReadWithHttpInfo(param.idOrName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public natureRead(param: NatureApiNatureReadRequest, options?: Configuration): Promise<Nature> {
        return this.api.natureRead(param.idOrName,  options).toPromise();
    }

}

import { ObservablePalParkAreaApi } from "./ObservableAPI";
import { PalParkAreaApiRequestFactory, PalParkAreaApiResponseProcessor} from "../apis/PalParkAreaApi";

export interface PalParkAreaApiPalParkAreaListRequest {
    /**
     * 
     * @type number
     * @memberof PalParkAreaApipalParkAreaList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PalParkAreaApipalParkAreaList
     */
    offset?: number
}

export interface PalParkAreaApiPalParkAreaReadRequest {
    /**
     * 
     * @type number
     * @memberof PalParkAreaApipalParkAreaRead
     */
    id: number
}

export class ObjectPalParkAreaApi {
    private api: ObservablePalParkAreaApi

    public constructor(configuration: Configuration, requestFactory?: PalParkAreaApiRequestFactory, responseProcessor?: PalParkAreaApiResponseProcessor) {
        this.api = new ObservablePalParkAreaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public palParkAreaListWithHttpInfo(param: PalParkAreaApiPalParkAreaListRequest = {}, options?: Configuration): Promise<HttpInfo<PalParkAreaList200Response>> {
        return this.api.palParkAreaListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public palParkAreaList(param: PalParkAreaApiPalParkAreaListRequest = {}, options?: Configuration): Promise<PalParkAreaList200Response> {
        return this.api.palParkAreaList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public palParkAreaReadWithHttpInfo(param: PalParkAreaApiPalParkAreaReadRequest, options?: Configuration): Promise<HttpInfo<PalParkArea>> {
        return this.api.palParkAreaReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public palParkAreaRead(param: PalParkAreaApiPalParkAreaReadRequest, options?: Configuration): Promise<PalParkArea> {
        return this.api.palParkAreaRead(param.id,  options).toPromise();
    }

}

import { ObservablePokeathlonStatApi } from "./ObservableAPI";
import { PokeathlonStatApiRequestFactory, PokeathlonStatApiResponseProcessor} from "../apis/PokeathlonStatApi";

export interface PokeathlonStatApiPokeathlonStatListRequest {
    /**
     * 
     * @type number
     * @memberof PokeathlonStatApipokeathlonStatList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PokeathlonStatApipokeathlonStatList
     */
    offset?: number
}

export interface PokeathlonStatApiPokeathlonStatReadRequest {
    /**
     * 
     * @type number
     * @memberof PokeathlonStatApipokeathlonStatRead
     */
    id: number
}

export class ObjectPokeathlonStatApi {
    private api: ObservablePokeathlonStatApi

    public constructor(configuration: Configuration, requestFactory?: PokeathlonStatApiRequestFactory, responseProcessor?: PokeathlonStatApiResponseProcessor) {
        this.api = new ObservablePokeathlonStatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public pokeathlonStatListWithHttpInfo(param: PokeathlonStatApiPokeathlonStatListRequest = {}, options?: Configuration): Promise<HttpInfo<PokeathlonStatList200Response>> {
        return this.api.pokeathlonStatListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokeathlonStatList(param: PokeathlonStatApiPokeathlonStatListRequest = {}, options?: Configuration): Promise<PokeathlonStatList200Response> {
        return this.api.pokeathlonStatList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokeathlonStatReadWithHttpInfo(param: PokeathlonStatApiPokeathlonStatReadRequest, options?: Configuration): Promise<HttpInfo<PokeathlonStat>> {
        return this.api.pokeathlonStatReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokeathlonStatRead(param: PokeathlonStatApiPokeathlonStatReadRequest, options?: Configuration): Promise<PokeathlonStat> {
        return this.api.pokeathlonStatRead(param.id,  options).toPromise();
    }

}

import { ObservablePokedexApi } from "./ObservableAPI";
import { PokedexApiRequestFactory, PokedexApiResponseProcessor} from "../apis/PokedexApi";

export interface PokedexApiPokedexListRequest {
    /**
     * 
     * @type number
     * @memberof PokedexApipokedexList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PokedexApipokedexList
     */
    offset?: number
}

export interface PokedexApiPokedexReadRequest {
    /**
     * 
     * @type number
     * @memberof PokedexApipokedexRead
     */
    id: number
}

export class ObjectPokedexApi {
    private api: ObservablePokedexApi

    public constructor(configuration: Configuration, requestFactory?: PokedexApiRequestFactory, responseProcessor?: PokedexApiResponseProcessor) {
        this.api = new ObservablePokedexApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public pokedexListWithHttpInfo(param: PokedexApiPokedexListRequest = {}, options?: Configuration): Promise<HttpInfo<PokedexList200Response>> {
        return this.api.pokedexListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokedexList(param: PokedexApiPokedexListRequest = {}, options?: Configuration): Promise<PokedexList200Response> {
        return this.api.pokedexList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokedexReadWithHttpInfo(param: PokedexApiPokedexReadRequest, options?: Configuration): Promise<HttpInfo<Pokedex>> {
        return this.api.pokedexReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokedexRead(param: PokedexApiPokedexReadRequest, options?: Configuration): Promise<Pokedex> {
        return this.api.pokedexRead(param.id,  options).toPromise();
    }

}

import { ObservablePokemonApi } from "./ObservableAPI";
import { PokemonApiRequestFactory, PokemonApiResponseProcessor} from "../apis/PokemonApi";

export interface PokemonApiPokemonListRequest {
    /**
     * 
     * @type number
     * @memberof PokemonApipokemonList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PokemonApipokemonList
     */
    offset?: number
}

export interface PokemonApiPokemonReadRequest {
    /**
     * 
     * @type IDOrName1
     * @memberof PokemonApipokemonRead
     */
    idOrName: IDOrName1
}

export class ObjectPokemonApi {
    private api: ObservablePokemonApi

    public constructor(configuration: Configuration, requestFactory?: PokemonApiRequestFactory, responseProcessor?: PokemonApiResponseProcessor) {
        this.api = new ObservablePokemonApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public pokemonListWithHttpInfo(param: PokemonApiPokemonListRequest = {}, options?: Configuration): Promise<HttpInfo<PokemonList200Response>> {
        return this.api.pokemonListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonList(param: PokemonApiPokemonListRequest = {}, options?: Configuration): Promise<PokemonList200Response> {
        return this.api.pokemonList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonReadWithHttpInfo(param: PokemonApiPokemonReadRequest, options?: Configuration): Promise<HttpInfo<Pokemon>> {
        return this.api.pokemonReadWithHttpInfo(param.idOrName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonRead(param: PokemonApiPokemonReadRequest, options?: Configuration): Promise<Pokemon> {
        return this.api.pokemonRead(param.idOrName,  options).toPromise();
    }

}

import { ObservablePokemonColorApi } from "./ObservableAPI";
import { PokemonColorApiRequestFactory, PokemonColorApiResponseProcessor} from "../apis/PokemonColorApi";

export interface PokemonColorApiPokemonColorListRequest {
    /**
     * 
     * @type number
     * @memberof PokemonColorApipokemonColorList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PokemonColorApipokemonColorList
     */
    offset?: number
}

export interface PokemonColorApiPokemonColorReadRequest {
    /**
     * 
     * @type number
     * @memberof PokemonColorApipokemonColorRead
     */
    id: number
}

export class ObjectPokemonColorApi {
    private api: ObservablePokemonColorApi

    public constructor(configuration: Configuration, requestFactory?: PokemonColorApiRequestFactory, responseProcessor?: PokemonColorApiResponseProcessor) {
        this.api = new ObservablePokemonColorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public pokemonColorListWithHttpInfo(param: PokemonColorApiPokemonColorListRequest = {}, options?: Configuration): Promise<HttpInfo<PokemonColorList200Response>> {
        return this.api.pokemonColorListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonColorList(param: PokemonColorApiPokemonColorListRequest = {}, options?: Configuration): Promise<PokemonColorList200Response> {
        return this.api.pokemonColorList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonColorReadWithHttpInfo(param: PokemonColorApiPokemonColorReadRequest, options?: Configuration): Promise<HttpInfo<PokemonColor>> {
        return this.api.pokemonColorReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonColorRead(param: PokemonColorApiPokemonColorReadRequest, options?: Configuration): Promise<PokemonColor> {
        return this.api.pokemonColorRead(param.id,  options).toPromise();
    }

}

import { ObservablePokemonFormApi } from "./ObservableAPI";
import { PokemonFormApiRequestFactory, PokemonFormApiResponseProcessor} from "../apis/PokemonFormApi";

export interface PokemonFormApiPokemonFormListRequest {
    /**
     * 
     * @type number
     * @memberof PokemonFormApipokemonFormList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PokemonFormApipokemonFormList
     */
    offset?: number
}

export interface PokemonFormApiPokemonFormReadRequest {
    /**
     * 
     * @type number
     * @memberof PokemonFormApipokemonFormRead
     */
    id: number
}

export class ObjectPokemonFormApi {
    private api: ObservablePokemonFormApi

    public constructor(configuration: Configuration, requestFactory?: PokemonFormApiRequestFactory, responseProcessor?: PokemonFormApiResponseProcessor) {
        this.api = new ObservablePokemonFormApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public pokemonFormListWithHttpInfo(param: PokemonFormApiPokemonFormListRequest = {}, options?: Configuration): Promise<HttpInfo<PokemonFormList200Response>> {
        return this.api.pokemonFormListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonFormList(param: PokemonFormApiPokemonFormListRequest = {}, options?: Configuration): Promise<PokemonFormList200Response> {
        return this.api.pokemonFormList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonFormReadWithHttpInfo(param: PokemonFormApiPokemonFormReadRequest, options?: Configuration): Promise<HttpInfo<PokemonForm>> {
        return this.api.pokemonFormReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonFormRead(param: PokemonFormApiPokemonFormReadRequest, options?: Configuration): Promise<PokemonForm> {
        return this.api.pokemonFormRead(param.id,  options).toPromise();
    }

}

import { ObservablePokemonHabitatApi } from "./ObservableAPI";
import { PokemonHabitatApiRequestFactory, PokemonHabitatApiResponseProcessor} from "../apis/PokemonHabitatApi";

export interface PokemonHabitatApiPokemonHabitatListRequest {
    /**
     * 
     * @type number
     * @memberof PokemonHabitatApipokemonHabitatList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PokemonHabitatApipokemonHabitatList
     */
    offset?: number
}

export interface PokemonHabitatApiPokemonHabitatReadRequest {
    /**
     * 
     * @type number
     * @memberof PokemonHabitatApipokemonHabitatRead
     */
    id: number
}

export class ObjectPokemonHabitatApi {
    private api: ObservablePokemonHabitatApi

    public constructor(configuration: Configuration, requestFactory?: PokemonHabitatApiRequestFactory, responseProcessor?: PokemonHabitatApiResponseProcessor) {
        this.api = new ObservablePokemonHabitatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public pokemonHabitatListWithHttpInfo(param: PokemonHabitatApiPokemonHabitatListRequest = {}, options?: Configuration): Promise<HttpInfo<PokemonHabitatList200Response>> {
        return this.api.pokemonHabitatListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonHabitatList(param: PokemonHabitatApiPokemonHabitatListRequest = {}, options?: Configuration): Promise<PokemonHabitatList200Response> {
        return this.api.pokemonHabitatList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonHabitatReadWithHttpInfo(param: PokemonHabitatApiPokemonHabitatReadRequest, options?: Configuration): Promise<HttpInfo<PokemonHabitat>> {
        return this.api.pokemonHabitatReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonHabitatRead(param: PokemonHabitatApiPokemonHabitatReadRequest, options?: Configuration): Promise<PokemonHabitat> {
        return this.api.pokemonHabitatRead(param.id,  options).toPromise();
    }

}

import { ObservablePokemonShapeApi } from "./ObservableAPI";
import { PokemonShapeApiRequestFactory, PokemonShapeApiResponseProcessor} from "../apis/PokemonShapeApi";

export interface PokemonShapeApiPokemonShapeListRequest {
    /**
     * 
     * @type number
     * @memberof PokemonShapeApipokemonShapeList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PokemonShapeApipokemonShapeList
     */
    offset?: number
}

export interface PokemonShapeApiPokemonShapeReadRequest {
    /**
     * 
     * @type number
     * @memberof PokemonShapeApipokemonShapeRead
     */
    id: number
}

export class ObjectPokemonShapeApi {
    private api: ObservablePokemonShapeApi

    public constructor(configuration: Configuration, requestFactory?: PokemonShapeApiRequestFactory, responseProcessor?: PokemonShapeApiResponseProcessor) {
        this.api = new ObservablePokemonShapeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public pokemonShapeListWithHttpInfo(param: PokemonShapeApiPokemonShapeListRequest = {}, options?: Configuration): Promise<HttpInfo<PokemonShapeList200Response>> {
        return this.api.pokemonShapeListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonShapeList(param: PokemonShapeApiPokemonShapeListRequest = {}, options?: Configuration): Promise<PokemonShapeList200Response> {
        return this.api.pokemonShapeList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonShapeReadWithHttpInfo(param: PokemonShapeApiPokemonShapeReadRequest, options?: Configuration): Promise<HttpInfo<PokemonShape>> {
        return this.api.pokemonShapeReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonShapeRead(param: PokemonShapeApiPokemonShapeReadRequest, options?: Configuration): Promise<PokemonShape> {
        return this.api.pokemonShapeRead(param.id,  options).toPromise();
    }

}

import { ObservablePokemonSpeciesApi } from "./ObservableAPI";
import { PokemonSpeciesApiRequestFactory, PokemonSpeciesApiResponseProcessor} from "../apis/PokemonSpeciesApi";

export interface PokemonSpeciesApiPokemonSpeciesListRequest {
    /**
     * 
     * @type number
     * @memberof PokemonSpeciesApipokemonSpeciesList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PokemonSpeciesApipokemonSpeciesList
     */
    offset?: number
}

export interface PokemonSpeciesApiPokemonSpeciesReadRequest {
    /**
     * 
     * @type number
     * @memberof PokemonSpeciesApipokemonSpeciesRead
     */
    id: number
}

export class ObjectPokemonSpeciesApi {
    private api: ObservablePokemonSpeciesApi

    public constructor(configuration: Configuration, requestFactory?: PokemonSpeciesApiRequestFactory, responseProcessor?: PokemonSpeciesApiResponseProcessor) {
        this.api = new ObservablePokemonSpeciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public pokemonSpeciesListWithHttpInfo(param: PokemonSpeciesApiPokemonSpeciesListRequest = {}, options?: Configuration): Promise<HttpInfo<PokemonSpeciesList200Response>> {
        return this.api.pokemonSpeciesListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonSpeciesList(param: PokemonSpeciesApiPokemonSpeciesListRequest = {}, options?: Configuration): Promise<PokemonSpeciesList200Response> {
        return this.api.pokemonSpeciesList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonSpeciesReadWithHttpInfo(param: PokemonSpeciesApiPokemonSpeciesReadRequest, options?: Configuration): Promise<HttpInfo<PokemonSpecies>> {
        return this.api.pokemonSpeciesReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pokemonSpeciesRead(param: PokemonSpeciesApiPokemonSpeciesReadRequest, options?: Configuration): Promise<PokemonSpecies> {
        return this.api.pokemonSpeciesRead(param.id,  options).toPromise();
    }

}

import { ObservableRegionApi } from "./ObservableAPI";
import { RegionApiRequestFactory, RegionApiResponseProcessor} from "../apis/RegionApi";

export interface RegionApiRegionListRequest {
    /**
     * 
     * @type number
     * @memberof RegionApiregionList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof RegionApiregionList
     */
    offset?: number
}

export interface RegionApiRegionReadRequest {
    /**
     * 
     * @type number
     * @memberof RegionApiregionRead
     */
    id: number
}

export class ObjectRegionApi {
    private api: ObservableRegionApi

    public constructor(configuration: Configuration, requestFactory?: RegionApiRequestFactory, responseProcessor?: RegionApiResponseProcessor) {
        this.api = new ObservableRegionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public regionListWithHttpInfo(param: RegionApiRegionListRequest = {}, options?: Configuration): Promise<HttpInfo<RegionList200Response>> {
        return this.api.regionListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public regionList(param: RegionApiRegionListRequest = {}, options?: Configuration): Promise<RegionList200Response> {
        return this.api.regionList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public regionReadWithHttpInfo(param: RegionApiRegionReadRequest, options?: Configuration): Promise<HttpInfo<Region>> {
        return this.api.regionReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public regionRead(param: RegionApiRegionReadRequest, options?: Configuration): Promise<Region> {
        return this.api.regionRead(param.id,  options).toPromise();
    }

}

import { ObservableStatApi } from "./ObservableAPI";
import { StatApiRequestFactory, StatApiResponseProcessor} from "../apis/StatApi";

export interface StatApiStatListRequest {
    /**
     * 
     * @type number
     * @memberof StatApistatList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof StatApistatList
     */
    offset?: number
}

export interface StatApiStatReadRequest {
    /**
     * 
     * @type IDOrName2
     * @memberof StatApistatRead
     */
    idOrName: IDOrName2
}

export class ObjectStatApi {
    private api: ObservableStatApi

    public constructor(configuration: Configuration, requestFactory?: StatApiRequestFactory, responseProcessor?: StatApiResponseProcessor) {
        this.api = new ObservableStatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public statListWithHttpInfo(param: StatApiStatListRequest = {}, options?: Configuration): Promise<HttpInfo<StatList200Response>> {
        return this.api.statListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public statList(param: StatApiStatListRequest = {}, options?: Configuration): Promise<StatList200Response> {
        return this.api.statList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public statReadWithHttpInfo(param: StatApiStatReadRequest, options?: Configuration): Promise<HttpInfo<Stat>> {
        return this.api.statReadWithHttpInfo(param.idOrName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public statRead(param: StatApiStatReadRequest, options?: Configuration): Promise<Stat> {
        return this.api.statRead(param.idOrName,  options).toPromise();
    }

}

import { ObservableSuperContestEffectApi } from "./ObservableAPI";
import { SuperContestEffectApiRequestFactory, SuperContestEffectApiResponseProcessor} from "../apis/SuperContestEffectApi";

export interface SuperContestEffectApiSuperContestEffectListRequest {
    /**
     * 
     * @type number
     * @memberof SuperContestEffectApisuperContestEffectList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof SuperContestEffectApisuperContestEffectList
     */
    offset?: number
}

export interface SuperContestEffectApiSuperContestEffectReadRequest {
    /**
     * 
     * @type number
     * @memberof SuperContestEffectApisuperContestEffectRead
     */
    id: number
}

export class ObjectSuperContestEffectApi {
    private api: ObservableSuperContestEffectApi

    public constructor(configuration: Configuration, requestFactory?: SuperContestEffectApiRequestFactory, responseProcessor?: SuperContestEffectApiResponseProcessor) {
        this.api = new ObservableSuperContestEffectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public superContestEffectListWithHttpInfo(param: SuperContestEffectApiSuperContestEffectListRequest = {}, options?: Configuration): Promise<HttpInfo<SuperContestEffectList200Response>> {
        return this.api.superContestEffectListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public superContestEffectList(param: SuperContestEffectApiSuperContestEffectListRequest = {}, options?: Configuration): Promise<SuperContestEffectList200Response> {
        return this.api.superContestEffectList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public superContestEffectReadWithHttpInfo(param: SuperContestEffectApiSuperContestEffectReadRequest, options?: Configuration): Promise<HttpInfo<SuperContestEffect>> {
        return this.api.superContestEffectReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public superContestEffectRead(param: SuperContestEffectApiSuperContestEffectReadRequest, options?: Configuration): Promise<SuperContestEffect> {
        return this.api.superContestEffectRead(param.id,  options).toPromise();
    }

}

import { ObservableTypeApi } from "./ObservableAPI";
import { TypeApiRequestFactory, TypeApiResponseProcessor} from "../apis/TypeApi";

export interface TypeApiTypeListRequest {
    /**
     * 
     * @type number
     * @memberof TypeApitypeList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof TypeApitypeList
     */
    offset?: number
}

export interface TypeApiTypeReadRequest {
    /**
     * 
     * @type number
     * @memberof TypeApitypeRead
     */
    id: number
}

export class ObjectTypeApi {
    private api: ObservableTypeApi

    public constructor(configuration: Configuration, requestFactory?: TypeApiRequestFactory, responseProcessor?: TypeApiResponseProcessor) {
        this.api = new ObservableTypeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public typeListWithHttpInfo(param: TypeApiTypeListRequest = {}, options?: Configuration): Promise<HttpInfo<TypeList200Response>> {
        return this.api.typeListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public typeList(param: TypeApiTypeListRequest = {}, options?: Configuration): Promise<TypeList200Response> {
        return this.api.typeList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public typeReadWithHttpInfo(param: TypeApiTypeReadRequest, options?: Configuration): Promise<HttpInfo<Type>> {
        return this.api.typeReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public typeRead(param: TypeApiTypeReadRequest, options?: Configuration): Promise<Type> {
        return this.api.typeRead(param.id,  options).toPromise();
    }

}

import { ObservableVersionApi } from "./ObservableAPI";
import { VersionApiRequestFactory, VersionApiResponseProcessor} from "../apis/VersionApi";

export interface VersionApiVersionListRequest {
    /**
     * 
     * @type number
     * @memberof VersionApiversionList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof VersionApiversionList
     */
    offset?: number
}

export interface VersionApiVersionReadRequest {
    /**
     * 
     * @type number
     * @memberof VersionApiversionRead
     */
    id: number
}

export class ObjectVersionApi {
    private api: ObservableVersionApi

    public constructor(configuration: Configuration, requestFactory?: VersionApiRequestFactory, responseProcessor?: VersionApiResponseProcessor) {
        this.api = new ObservableVersionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public versionListWithHttpInfo(param: VersionApiVersionListRequest = {}, options?: Configuration): Promise<HttpInfo<VersionList200Response>> {
        return this.api.versionListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionList(param: VersionApiVersionListRequest = {}, options?: Configuration): Promise<VersionList200Response> {
        return this.api.versionList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionReadWithHttpInfo(param: VersionApiVersionReadRequest, options?: Configuration): Promise<HttpInfo<Version>> {
        return this.api.versionReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionRead(param: VersionApiVersionReadRequest, options?: Configuration): Promise<Version> {
        return this.api.versionRead(param.id,  options).toPromise();
    }

}

import { ObservableVersionGroupApi } from "./ObservableAPI";
import { VersionGroupApiRequestFactory, VersionGroupApiResponseProcessor} from "../apis/VersionGroupApi";

export interface VersionGroupApiVersionGroupListRequest {
    /**
     * 
     * @type number
     * @memberof VersionGroupApiversionGroupList
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof VersionGroupApiversionGroupList
     */
    offset?: number
}

export interface VersionGroupApiVersionGroupReadRequest {
    /**
     * 
     * @type number
     * @memberof VersionGroupApiversionGroupRead
     */
    id: number
}

export class ObjectVersionGroupApi {
    private api: ObservableVersionGroupApi

    public constructor(configuration: Configuration, requestFactory?: VersionGroupApiRequestFactory, responseProcessor?: VersionGroupApiResponseProcessor) {
        this.api = new ObservableVersionGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public versionGroupListWithHttpInfo(param: VersionGroupApiVersionGroupListRequest = {}, options?: Configuration): Promise<HttpInfo<VersionGroupList200Response>> {
        return this.api.versionGroupListWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionGroupList(param: VersionGroupApiVersionGroupListRequest = {}, options?: Configuration): Promise<VersionGroupList200Response> {
        return this.api.versionGroupList(param.limit, param.offset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionGroupReadWithHttpInfo(param: VersionGroupApiVersionGroupReadRequest, options?: Configuration): Promise<HttpInfo<VersionGroup>> {
        return this.api.versionGroupReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionGroupRead(param: VersionGroupApiVersionGroupReadRequest, options?: Configuration): Promise<VersionGroup> {
        return this.api.versionGroupRead(param.id,  options).toPromise();
    }

}
