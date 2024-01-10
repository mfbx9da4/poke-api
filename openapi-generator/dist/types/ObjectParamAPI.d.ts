import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Ability } from '../models/Ability';
import { AbilityList200Response } from '../models/AbilityList200Response';
import { Berry } from '../models/Berry';
import { BerryFirmness } from '../models/BerryFirmness';
import { BerryFirmnessList200Response } from '../models/BerryFirmnessList200Response';
import { BerryFlavor } from '../models/BerryFlavor';
import { BerryFlavorList200Response } from '../models/BerryFlavorList200Response';
import { Characteristic } from '../models/Characteristic';
import { ContestEffect } from '../models/ContestEffect';
import { ContestEffectList200Response } from '../models/ContestEffectList200Response';
import { ContestType } from '../models/ContestType';
import { ContestTypeList200Response } from '../models/ContestTypeList200Response';
import { EggGroup } from '../models/EggGroup';
import { EncounterCondition } from '../models/EncounterCondition';
import { EncounterConditionList200Response } from '../models/EncounterConditionList200Response';
import { EncounterConditionValue } from '../models/EncounterConditionValue';
import { EncounterMethod } from '../models/EncounterMethod';
import { EncounterMethodList200Response } from '../models/EncounterMethodList200Response';
import { EvolutionChain } from '../models/EvolutionChain';
import { EvolutionChainList200Response } from '../models/EvolutionChainList200Response';
import { EvolutionTrigger } from '../models/EvolutionTrigger';
import { EvolutionTriggerList200Response } from '../models/EvolutionTriggerList200Response';
import { Gender } from '../models/Gender';
import { GenderList200Response } from '../models/GenderList200Response';
import { Generation } from '../models/Generation';
import { GenerationList200Response } from '../models/GenerationList200Response';
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
import { Move } from '../models/Move';
import { MoveAilment } from '../models/MoveAilment';
import { MoveAilmentList200Response } from '../models/MoveAilmentList200Response';
import { MoveBattleStyle } from '../models/MoveBattleStyle';
import { MoveBattleStyleList200Response } from '../models/MoveBattleStyleList200Response';
import { MoveCategory } from '../models/MoveCategory';
import { MoveCategoryList200Response } from '../models/MoveCategoryList200Response';
import { MoveDamageClass } from '../models/MoveDamageClass';
import { MoveDamageClassList200Response } from '../models/MoveDamageClassList200Response';
import { MoveLearnMethod } from '../models/MoveLearnMethod';
import { MoveLearnMethodList200Response } from '../models/MoveLearnMethodList200Response';
import { MoveList200Response } from '../models/MoveList200Response';
import { MoveTarget } from '../models/MoveTarget';
import { MoveTargetList200Response } from '../models/MoveTargetList200Response';
import { Nature } from '../models/Nature';
import { NatureList200Response } from '../models/NatureList200Response';
import { PalParkArea } from '../models/PalParkArea';
import { PalParkAreaList200Response } from '../models/PalParkAreaList200Response';
import { PokeathlonStat } from '../models/PokeathlonStat';
import { PokeathlonStatList200Response } from '../models/PokeathlonStatList200Response';
import { Pokedex } from '../models/Pokedex';
import { PokedexList200Response } from '../models/PokedexList200Response';
import { Pokemon } from '../models/Pokemon';
import { PokemonColor } from '../models/PokemonColor';
import { PokemonColorList200Response } from '../models/PokemonColorList200Response';
import { PokemonForm } from '../models/PokemonForm';
import { PokemonFormList200Response } from '../models/PokemonFormList200Response';
import { PokemonHabitat } from '../models/PokemonHabitat';
import { PokemonHabitatList200Response } from '../models/PokemonHabitatList200Response';
import { PokemonList200Response } from '../models/PokemonList200Response';
import { PokemonShape } from '../models/PokemonShape';
import { PokemonShapeList200Response } from '../models/PokemonShapeList200Response';
import { PokemonSpecies } from '../models/PokemonSpecies';
import { PokemonSpeciesList200Response } from '../models/PokemonSpeciesList200Response';
import { Region } from '../models/Region';
import { RegionList200Response } from '../models/RegionList200Response';
import { Stat } from '../models/Stat';
import { StatList200Response } from '../models/StatList200Response';
import { SuperContestEffect } from '../models/SuperContestEffect';
import { SuperContestEffectList200Response } from '../models/SuperContestEffectList200Response';
import { Type } from '../models/Type';
import { TypeList200Response } from '../models/TypeList200Response';
import { Version } from '../models/Version';
import { VersionGroup } from '../models/VersionGroup';
import { VersionGroupList200Response } from '../models/VersionGroupList200Response';
import { VersionList200Response } from '../models/VersionList200Response';
import { AbilityApiRequestFactory, AbilityApiResponseProcessor } from "../apis/AbilityApi";
export interface AbilityApiAbilityListRequest {
    limit?: number;
    offset?: number;
}
export interface AbilityApiAbilityReadRequest {
    id: number;
}
export declare class ObjectAbilityApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AbilityApiRequestFactory, responseProcessor?: AbilityApiResponseProcessor);
    abilityListWithHttpInfo(param?: AbilityApiAbilityListRequest, options?: Configuration): Promise<HttpInfo<AbilityList200Response>>;
    abilityList(param?: AbilityApiAbilityListRequest, options?: Configuration): Promise<AbilityList200Response>;
    abilityReadWithHttpInfo(param: AbilityApiAbilityReadRequest, options?: Configuration): Promise<HttpInfo<Ability>>;
    abilityRead(param: AbilityApiAbilityReadRequest, options?: Configuration): Promise<Ability>;
}
import { BerryApiRequestFactory, BerryApiResponseProcessor } from "../apis/BerryApi";
export interface BerryApiBerryListRequest {
    limit?: number;
    offset?: number;
}
export interface BerryApiBerryReadRequest {
    id: number;
}
export declare class ObjectBerryApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BerryApiRequestFactory, responseProcessor?: BerryApiResponseProcessor);
    berryListWithHttpInfo(param?: BerryApiBerryListRequest, options?: Configuration): Promise<HttpInfo<Array<Berry>>>;
    berryList(param?: BerryApiBerryListRequest, options?: Configuration): Promise<Array<Berry>>;
    berryReadWithHttpInfo(param: BerryApiBerryReadRequest, options?: Configuration): Promise<HttpInfo<Berry>>;
    berryRead(param: BerryApiBerryReadRequest, options?: Configuration): Promise<Berry>;
}
import { BerryFirmnessApiRequestFactory, BerryFirmnessApiResponseProcessor } from "../apis/BerryFirmnessApi";
export interface BerryFirmnessApiBerryFirmnessListRequest {
    limit?: number;
    offset?: number;
}
export interface BerryFirmnessApiBerryFirmnessReadRequest {
    id: number;
}
export declare class ObjectBerryFirmnessApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BerryFirmnessApiRequestFactory, responseProcessor?: BerryFirmnessApiResponseProcessor);
    berryFirmnessListWithHttpInfo(param?: BerryFirmnessApiBerryFirmnessListRequest, options?: Configuration): Promise<HttpInfo<BerryFirmnessList200Response>>;
    berryFirmnessList(param?: BerryFirmnessApiBerryFirmnessListRequest, options?: Configuration): Promise<BerryFirmnessList200Response>;
    berryFirmnessReadWithHttpInfo(param: BerryFirmnessApiBerryFirmnessReadRequest, options?: Configuration): Promise<HttpInfo<BerryFirmness>>;
    berryFirmnessRead(param: BerryFirmnessApiBerryFirmnessReadRequest, options?: Configuration): Promise<BerryFirmness>;
}
import { BerryFlavorApiRequestFactory, BerryFlavorApiResponseProcessor } from "../apis/BerryFlavorApi";
export interface BerryFlavorApiBerryFlavorListRequest {
    limit?: number;
    offset?: number;
}
export interface BerryFlavorApiBerryFlavorReadRequest {
    id: number;
}
export declare class ObjectBerryFlavorApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BerryFlavorApiRequestFactory, responseProcessor?: BerryFlavorApiResponseProcessor);
    berryFlavorListWithHttpInfo(param?: BerryFlavorApiBerryFlavorListRequest, options?: Configuration): Promise<HttpInfo<BerryFlavorList200Response>>;
    berryFlavorList(param?: BerryFlavorApiBerryFlavorListRequest, options?: Configuration): Promise<BerryFlavorList200Response>;
    berryFlavorReadWithHttpInfo(param: BerryFlavorApiBerryFlavorReadRequest, options?: Configuration): Promise<HttpInfo<BerryFlavor>>;
    berryFlavorRead(param: BerryFlavorApiBerryFlavorReadRequest, options?: Configuration): Promise<BerryFlavor>;
}
import { CharacteristicApiRequestFactory, CharacteristicApiResponseProcessor } from "../apis/CharacteristicApi";
export interface CharacteristicApiCharacteristicListRequest {
    limit?: number;
    offset?: number;
}
export interface CharacteristicApiCharacteristicReadRequest {
    id: number;
}
export declare class ObjectCharacteristicApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CharacteristicApiRequestFactory, responseProcessor?: CharacteristicApiResponseProcessor);
    characteristicListWithHttpInfo(param?: CharacteristicApiCharacteristicListRequest, options?: Configuration): Promise<HttpInfo<Array<Characteristic>>>;
    characteristicList(param?: CharacteristicApiCharacteristicListRequest, options?: Configuration): Promise<Array<Characteristic>>;
    characteristicReadWithHttpInfo(param: CharacteristicApiCharacteristicReadRequest, options?: Configuration): Promise<HttpInfo<Characteristic>>;
    characteristicRead(param: CharacteristicApiCharacteristicReadRequest, options?: Configuration): Promise<Characteristic>;
}
import { ContestEffectApiRequestFactory, ContestEffectApiResponseProcessor } from "../apis/ContestEffectApi";
export interface ContestEffectApiContestEffectListRequest {
    limit?: number;
    offset?: number;
}
export interface ContestEffectApiContestEffectReadRequest {
    id: number;
}
export declare class ObjectContestEffectApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ContestEffectApiRequestFactory, responseProcessor?: ContestEffectApiResponseProcessor);
    contestEffectListWithHttpInfo(param?: ContestEffectApiContestEffectListRequest, options?: Configuration): Promise<HttpInfo<ContestEffectList200Response>>;
    contestEffectList(param?: ContestEffectApiContestEffectListRequest, options?: Configuration): Promise<ContestEffectList200Response>;
    contestEffectReadWithHttpInfo(param: ContestEffectApiContestEffectReadRequest, options?: Configuration): Promise<HttpInfo<ContestEffect>>;
    contestEffectRead(param: ContestEffectApiContestEffectReadRequest, options?: Configuration): Promise<ContestEffect>;
}
import { ContestTypeApiRequestFactory, ContestTypeApiResponseProcessor } from "../apis/ContestTypeApi";
export interface ContestTypeApiContestTypeListRequest {
    limit?: number;
    offset?: number;
}
export interface ContestTypeApiContestTypeReadRequest {
    id: number;
}
export declare class ObjectContestTypeApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ContestTypeApiRequestFactory, responseProcessor?: ContestTypeApiResponseProcessor);
    contestTypeListWithHttpInfo(param?: ContestTypeApiContestTypeListRequest, options?: Configuration): Promise<HttpInfo<ContestTypeList200Response>>;
    contestTypeList(param?: ContestTypeApiContestTypeListRequest, options?: Configuration): Promise<ContestTypeList200Response>;
    contestTypeReadWithHttpInfo(param: ContestTypeApiContestTypeReadRequest, options?: Configuration): Promise<HttpInfo<ContestType>>;
    contestTypeRead(param: ContestTypeApiContestTypeReadRequest, options?: Configuration): Promise<ContestType>;
}
import { EggGroupApiRequestFactory, EggGroupApiResponseProcessor } from "../apis/EggGroupApi";
export interface EggGroupApiEggGroupListRequest {
    limit?: number;
    offset?: number;
}
export interface EggGroupApiEggGroupReadRequest {
    id: number;
}
export declare class ObjectEggGroupApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EggGroupApiRequestFactory, responseProcessor?: EggGroupApiResponseProcessor);
    eggGroupListWithHttpInfo(param?: EggGroupApiEggGroupListRequest, options?: Configuration): Promise<HttpInfo<Array<EggGroup>>>;
    eggGroupList(param?: EggGroupApiEggGroupListRequest, options?: Configuration): Promise<Array<EggGroup>>;
    eggGroupReadWithHttpInfo(param: EggGroupApiEggGroupReadRequest, options?: Configuration): Promise<HttpInfo<EggGroup>>;
    eggGroupRead(param: EggGroupApiEggGroupReadRequest, options?: Configuration): Promise<EggGroup>;
}
import { EncounterConditionApiRequestFactory, EncounterConditionApiResponseProcessor } from "../apis/EncounterConditionApi";
export interface EncounterConditionApiEncounterConditionListRequest {
    limit?: number;
    offset?: number;
}
export interface EncounterConditionApiEncounterConditionReadRequest {
    id: number;
}
export declare class ObjectEncounterConditionApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EncounterConditionApiRequestFactory, responseProcessor?: EncounterConditionApiResponseProcessor);
    encounterConditionListWithHttpInfo(param?: EncounterConditionApiEncounterConditionListRequest, options?: Configuration): Promise<HttpInfo<EncounterConditionList200Response>>;
    encounterConditionList(param?: EncounterConditionApiEncounterConditionListRequest, options?: Configuration): Promise<EncounterConditionList200Response>;
    encounterConditionReadWithHttpInfo(param: EncounterConditionApiEncounterConditionReadRequest, options?: Configuration): Promise<HttpInfo<EncounterCondition>>;
    encounterConditionRead(param: EncounterConditionApiEncounterConditionReadRequest, options?: Configuration): Promise<EncounterCondition>;
}
import { EncounterConditionValueApiRequestFactory, EncounterConditionValueApiResponseProcessor } from "../apis/EncounterConditionValueApi";
export interface EncounterConditionValueApiEncounterConditionValueListRequest {
    limit?: number;
    offset?: number;
}
export interface EncounterConditionValueApiEncounterConditionValueReadRequest {
    id: number;
}
export declare class ObjectEncounterConditionValueApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EncounterConditionValueApiRequestFactory, responseProcessor?: EncounterConditionValueApiResponseProcessor);
    encounterConditionValueListWithHttpInfo(param?: EncounterConditionValueApiEncounterConditionValueListRequest, options?: Configuration): Promise<HttpInfo<Array<EncounterConditionValue>>>;
    encounterConditionValueList(param?: EncounterConditionValueApiEncounterConditionValueListRequest, options?: Configuration): Promise<Array<EncounterConditionValue>>;
    encounterConditionValueReadWithHttpInfo(param: EncounterConditionValueApiEncounterConditionValueReadRequest, options?: Configuration): Promise<HttpInfo<EncounterConditionValue>>;
    encounterConditionValueRead(param: EncounterConditionValueApiEncounterConditionValueReadRequest, options?: Configuration): Promise<EncounterConditionValue>;
}
import { EncounterMethodApiRequestFactory, EncounterMethodApiResponseProcessor } from "../apis/EncounterMethodApi";
export interface EncounterMethodApiEncounterMethodListRequest {
    limit?: number;
    offset?: number;
}
export interface EncounterMethodApiEncounterMethodReadRequest {
    id: number;
}
export declare class ObjectEncounterMethodApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EncounterMethodApiRequestFactory, responseProcessor?: EncounterMethodApiResponseProcessor);
    encounterMethodListWithHttpInfo(param?: EncounterMethodApiEncounterMethodListRequest, options?: Configuration): Promise<HttpInfo<EncounterMethodList200Response>>;
    encounterMethodList(param?: EncounterMethodApiEncounterMethodListRequest, options?: Configuration): Promise<EncounterMethodList200Response>;
    encounterMethodReadWithHttpInfo(param: EncounterMethodApiEncounterMethodReadRequest, options?: Configuration): Promise<HttpInfo<EncounterMethod>>;
    encounterMethodRead(param: EncounterMethodApiEncounterMethodReadRequest, options?: Configuration): Promise<EncounterMethod>;
}
import { EvolutionChainApiRequestFactory, EvolutionChainApiResponseProcessor } from "../apis/EvolutionChainApi";
export interface EvolutionChainApiEvolutionChainListRequest {
    limit?: number;
    offset?: number;
}
export interface EvolutionChainApiEvolutionChainReadRequest {
    id: number;
}
export declare class ObjectEvolutionChainApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EvolutionChainApiRequestFactory, responseProcessor?: EvolutionChainApiResponseProcessor);
    evolutionChainListWithHttpInfo(param?: EvolutionChainApiEvolutionChainListRequest, options?: Configuration): Promise<HttpInfo<EvolutionChainList200Response>>;
    evolutionChainList(param?: EvolutionChainApiEvolutionChainListRequest, options?: Configuration): Promise<EvolutionChainList200Response>;
    evolutionChainReadWithHttpInfo(param: EvolutionChainApiEvolutionChainReadRequest, options?: Configuration): Promise<HttpInfo<EvolutionChain>>;
    evolutionChainRead(param: EvolutionChainApiEvolutionChainReadRequest, options?: Configuration): Promise<EvolutionChain>;
}
import { EvolutionTriggerApiRequestFactory, EvolutionTriggerApiResponseProcessor } from "../apis/EvolutionTriggerApi";
export interface EvolutionTriggerApiEvolutionTriggerListRequest {
    limit?: number;
    offset?: number;
}
export interface EvolutionTriggerApiEvolutionTriggerReadRequest {
    id: number;
}
export declare class ObjectEvolutionTriggerApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EvolutionTriggerApiRequestFactory, responseProcessor?: EvolutionTriggerApiResponseProcessor);
    evolutionTriggerListWithHttpInfo(param?: EvolutionTriggerApiEvolutionTriggerListRequest, options?: Configuration): Promise<HttpInfo<EvolutionTriggerList200Response>>;
    evolutionTriggerList(param?: EvolutionTriggerApiEvolutionTriggerListRequest, options?: Configuration): Promise<EvolutionTriggerList200Response>;
    evolutionTriggerReadWithHttpInfo(param: EvolutionTriggerApiEvolutionTriggerReadRequest, options?: Configuration): Promise<HttpInfo<EvolutionTrigger>>;
    evolutionTriggerRead(param: EvolutionTriggerApiEvolutionTriggerReadRequest, options?: Configuration): Promise<EvolutionTrigger>;
}
import { GenderApiRequestFactory, GenderApiResponseProcessor } from "../apis/GenderApi";
export interface GenderApiGenderListRequest {
    limit?: number;
    offset?: number;
}
export interface GenderApiGenderReadRequest {
    id: number;
}
export declare class ObjectGenderApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GenderApiRequestFactory, responseProcessor?: GenderApiResponseProcessor);
    genderListWithHttpInfo(param?: GenderApiGenderListRequest, options?: Configuration): Promise<HttpInfo<GenderList200Response>>;
    genderList(param?: GenderApiGenderListRequest, options?: Configuration): Promise<GenderList200Response>;
    genderReadWithHttpInfo(param: GenderApiGenderReadRequest, options?: Configuration): Promise<HttpInfo<Gender>>;
    genderRead(param: GenderApiGenderReadRequest, options?: Configuration): Promise<Gender>;
}
import { GenerationApiRequestFactory, GenerationApiResponseProcessor } from "../apis/GenerationApi";
export interface GenerationApiGenerationListRequest {
    limit?: number;
    offset?: number;
}
export interface GenerationApiGenerationReadRequest {
    id: number;
}
export declare class ObjectGenerationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GenerationApiRequestFactory, responseProcessor?: GenerationApiResponseProcessor);
    generationListWithHttpInfo(param?: GenerationApiGenerationListRequest, options?: Configuration): Promise<HttpInfo<GenerationList200Response>>;
    generationList(param?: GenerationApiGenerationListRequest, options?: Configuration): Promise<GenerationList200Response>;
    generationReadWithHttpInfo(param: GenerationApiGenerationReadRequest, options?: Configuration): Promise<HttpInfo<Generation>>;
    generationRead(param: GenerationApiGenerationReadRequest, options?: Configuration): Promise<Generation>;
}
import { GrowthRateApiRequestFactory, GrowthRateApiResponseProcessor } from "../apis/GrowthRateApi";
export interface GrowthRateApiGrowthRateListRequest {
    limit?: number;
    offset?: number;
}
export interface GrowthRateApiGrowthRateReadRequest {
    id: number;
}
export declare class ObjectGrowthRateApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GrowthRateApiRequestFactory, responseProcessor?: GrowthRateApiResponseProcessor);
    growthRateListWithHttpInfo(param?: GrowthRateApiGrowthRateListRequest, options?: Configuration): Promise<HttpInfo<GrowthRateList200Response>>;
    growthRateList(param?: GrowthRateApiGrowthRateListRequest, options?: Configuration): Promise<GrowthRateList200Response>;
    growthRateReadWithHttpInfo(param: GrowthRateApiGrowthRateReadRequest, options?: Configuration): Promise<HttpInfo<GrowthRate>>;
    growthRateRead(param: GrowthRateApiGrowthRateReadRequest, options?: Configuration): Promise<GrowthRate>;
}
import { ItemApiRequestFactory, ItemApiResponseProcessor } from "../apis/ItemApi";
export interface ItemApiItemListRequest {
    limit?: number;
    offset?: number;
}
export interface ItemApiItemReadRequest {
    id: number;
}
export declare class ObjectItemApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ItemApiRequestFactory, responseProcessor?: ItemApiResponseProcessor);
    itemListWithHttpInfo(param?: ItemApiItemListRequest, options?: Configuration): Promise<HttpInfo<ItemList200Response>>;
    itemList(param?: ItemApiItemListRequest, options?: Configuration): Promise<ItemList200Response>;
    itemReadWithHttpInfo(param: ItemApiItemReadRequest, options?: Configuration): Promise<HttpInfo<Item>>;
    itemRead(param: ItemApiItemReadRequest, options?: Configuration): Promise<Item>;
}
import { ItemAttributeApiRequestFactory, ItemAttributeApiResponseProcessor } from "../apis/ItemAttributeApi";
export interface ItemAttributeApiItemAttributeListRequest {
    limit?: number;
    offset?: number;
}
export interface ItemAttributeApiItemAttributeReadRequest {
    id: number;
}
export declare class ObjectItemAttributeApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ItemAttributeApiRequestFactory, responseProcessor?: ItemAttributeApiResponseProcessor);
    itemAttributeListWithHttpInfo(param?: ItemAttributeApiItemAttributeListRequest, options?: Configuration): Promise<HttpInfo<ItemAttributeList200Response>>;
    itemAttributeList(param?: ItemAttributeApiItemAttributeListRequest, options?: Configuration): Promise<ItemAttributeList200Response>;
    itemAttributeReadWithHttpInfo(param: ItemAttributeApiItemAttributeReadRequest, options?: Configuration): Promise<HttpInfo<ItemAttribute>>;
    itemAttributeRead(param: ItemAttributeApiItemAttributeReadRequest, options?: Configuration): Promise<ItemAttribute>;
}
import { ItemCategoryApiRequestFactory, ItemCategoryApiResponseProcessor } from "../apis/ItemCategoryApi";
export interface ItemCategoryApiItemCategoryListRequest {
    limit?: number;
    offset?: number;
}
export interface ItemCategoryApiItemCategoryReadRequest {
    id: number;
}
export declare class ObjectItemCategoryApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ItemCategoryApiRequestFactory, responseProcessor?: ItemCategoryApiResponseProcessor);
    itemCategoryListWithHttpInfo(param?: ItemCategoryApiItemCategoryListRequest, options?: Configuration): Promise<HttpInfo<ItemCategoryList200Response>>;
    itemCategoryList(param?: ItemCategoryApiItemCategoryListRequest, options?: Configuration): Promise<ItemCategoryList200Response>;
    itemCategoryReadWithHttpInfo(param: ItemCategoryApiItemCategoryReadRequest, options?: Configuration): Promise<HttpInfo<ItemCategory>>;
    itemCategoryRead(param: ItemCategoryApiItemCategoryReadRequest, options?: Configuration): Promise<ItemCategory>;
}
import { ItemFlingEffectApiRequestFactory, ItemFlingEffectApiResponseProcessor } from "../apis/ItemFlingEffectApi";
export interface ItemFlingEffectApiItemFlingEffectListRequest {
    limit?: number;
    offset?: number;
}
export interface ItemFlingEffectApiItemFlingEffectReadRequest {
    id: number;
}
export declare class ObjectItemFlingEffectApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ItemFlingEffectApiRequestFactory, responseProcessor?: ItemFlingEffectApiResponseProcessor);
    itemFlingEffectListWithHttpInfo(param?: ItemFlingEffectApiItemFlingEffectListRequest, options?: Configuration): Promise<HttpInfo<ItemFlingEffectList200Response>>;
    itemFlingEffectList(param?: ItemFlingEffectApiItemFlingEffectListRequest, options?: Configuration): Promise<ItemFlingEffectList200Response>;
    itemFlingEffectReadWithHttpInfo(param: ItemFlingEffectApiItemFlingEffectReadRequest, options?: Configuration): Promise<HttpInfo<ItemFlingEffect>>;
    itemFlingEffectRead(param: ItemFlingEffectApiItemFlingEffectReadRequest, options?: Configuration): Promise<ItemFlingEffect>;
}
import { ItemPocketApiRequestFactory, ItemPocketApiResponseProcessor } from "../apis/ItemPocketApi";
export interface ItemPocketApiItemPocketListRequest {
    limit?: number;
    offset?: number;
}
export interface ItemPocketApiItemPocketReadRequest {
    id: number;
}
export declare class ObjectItemPocketApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ItemPocketApiRequestFactory, responseProcessor?: ItemPocketApiResponseProcessor);
    itemPocketListWithHttpInfo(param?: ItemPocketApiItemPocketListRequest, options?: Configuration): Promise<HttpInfo<ItemPocketList200Response>>;
    itemPocketList(param?: ItemPocketApiItemPocketListRequest, options?: Configuration): Promise<ItemPocketList200Response>;
    itemPocketReadWithHttpInfo(param: ItemPocketApiItemPocketReadRequest, options?: Configuration): Promise<HttpInfo<ItemPocket>>;
    itemPocketRead(param: ItemPocketApiItemPocketReadRequest, options?: Configuration): Promise<ItemPocket>;
}
import { LanguageApiRequestFactory, LanguageApiResponseProcessor } from "../apis/LanguageApi";
export interface LanguageApiLanguageListRequest {
    limit?: number;
    offset?: number;
}
export interface LanguageApiLanguageReadRequest {
    id: number;
}
export declare class ObjectLanguageApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LanguageApiRequestFactory, responseProcessor?: LanguageApiResponseProcessor);
    languageListWithHttpInfo(param?: LanguageApiLanguageListRequest, options?: Configuration): Promise<HttpInfo<LanguageList200Response>>;
    languageList(param?: LanguageApiLanguageListRequest, options?: Configuration): Promise<LanguageList200Response>;
    languageReadWithHttpInfo(param: LanguageApiLanguageReadRequest, options?: Configuration): Promise<HttpInfo<Language>>;
    languageRead(param: LanguageApiLanguageReadRequest, options?: Configuration): Promise<Language>;
}
import { LocationApiRequestFactory, LocationApiResponseProcessor } from "../apis/LocationApi";
export interface LocationApiLocationListRequest {
    limit?: number;
    offset?: number;
}
export interface LocationApiLocationReadRequest {
    id: number;
}
export declare class ObjectLocationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LocationApiRequestFactory, responseProcessor?: LocationApiResponseProcessor);
    locationListWithHttpInfo(param?: LocationApiLocationListRequest, options?: Configuration): Promise<HttpInfo<LocationList200Response>>;
    locationList(param?: LocationApiLocationListRequest, options?: Configuration): Promise<LocationList200Response>;
    locationReadWithHttpInfo(param: LocationApiLocationReadRequest, options?: Configuration): Promise<HttpInfo<Location>>;
    locationRead(param: LocationApiLocationReadRequest, options?: Configuration): Promise<Location>;
}
import { LocationAreaApiRequestFactory, LocationAreaApiResponseProcessor } from "../apis/LocationAreaApi";
export interface LocationAreaApiLocationAreaListRequest {
    limit?: number;
    offset?: number;
}
export interface LocationAreaApiLocationAreaReadRequest {
    id: number;
}
export declare class ObjectLocationAreaApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LocationAreaApiRequestFactory, responseProcessor?: LocationAreaApiResponseProcessor);
    locationAreaListWithHttpInfo(param?: LocationAreaApiLocationAreaListRequest, options?: Configuration): Promise<HttpInfo<LocationAreaList200Response>>;
    locationAreaList(param?: LocationAreaApiLocationAreaListRequest, options?: Configuration): Promise<LocationAreaList200Response>;
    locationAreaReadWithHttpInfo(param: LocationAreaApiLocationAreaReadRequest, options?: Configuration): Promise<HttpInfo<LocationArea>>;
    locationAreaRead(param: LocationAreaApiLocationAreaReadRequest, options?: Configuration): Promise<LocationArea>;
}
import { MachineApiRequestFactory, MachineApiResponseProcessor } from "../apis/MachineApi";
export interface MachineApiMachineListRequest {
    limit?: number;
    offset?: number;
}
export interface MachineApiMachineReadRequest {
    id: number;
}
export declare class ObjectMachineApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MachineApiRequestFactory, responseProcessor?: MachineApiResponseProcessor);
    machineListWithHttpInfo(param?: MachineApiMachineListRequest, options?: Configuration): Promise<HttpInfo<MachineList200Response>>;
    machineList(param?: MachineApiMachineListRequest, options?: Configuration): Promise<MachineList200Response>;
    machineReadWithHttpInfo(param: MachineApiMachineReadRequest, options?: Configuration): Promise<HttpInfo<Machine>>;
    machineRead(param: MachineApiMachineReadRequest, options?: Configuration): Promise<Machine>;
}
import { MoveApiRequestFactory, MoveApiResponseProcessor } from "../apis/MoveApi";
export interface MoveApiMoveListRequest {
    limit?: number;
    offset?: number;
}
export interface MoveApiMoveReadRequest {
    id: number;
}
export declare class ObjectMoveApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveApiRequestFactory, responseProcessor?: MoveApiResponseProcessor);
    moveListWithHttpInfo(param?: MoveApiMoveListRequest, options?: Configuration): Promise<HttpInfo<MoveList200Response>>;
    moveList(param?: MoveApiMoveListRequest, options?: Configuration): Promise<MoveList200Response>;
    moveReadWithHttpInfo(param: MoveApiMoveReadRequest, options?: Configuration): Promise<HttpInfo<Move>>;
    moveRead(param: MoveApiMoveReadRequest, options?: Configuration): Promise<Move>;
}
import { MoveAilmentApiRequestFactory, MoveAilmentApiResponseProcessor } from "../apis/MoveAilmentApi";
export interface MoveAilmentApiMoveAilmentListRequest {
    limit?: number;
    offset?: number;
}
export interface MoveAilmentApiMoveAilmentReadRequest {
    id: number;
}
export declare class ObjectMoveAilmentApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveAilmentApiRequestFactory, responseProcessor?: MoveAilmentApiResponseProcessor);
    moveAilmentListWithHttpInfo(param?: MoveAilmentApiMoveAilmentListRequest, options?: Configuration): Promise<HttpInfo<MoveAilmentList200Response>>;
    moveAilmentList(param?: MoveAilmentApiMoveAilmentListRequest, options?: Configuration): Promise<MoveAilmentList200Response>;
    moveAilmentReadWithHttpInfo(param: MoveAilmentApiMoveAilmentReadRequest, options?: Configuration): Promise<HttpInfo<MoveAilment>>;
    moveAilmentRead(param: MoveAilmentApiMoveAilmentReadRequest, options?: Configuration): Promise<MoveAilment>;
}
import { MoveBattleStyleApiRequestFactory, MoveBattleStyleApiResponseProcessor } from "../apis/MoveBattleStyleApi";
export interface MoveBattleStyleApiMoveBattleStyleListRequest {
    limit?: number;
    offset?: number;
}
export interface MoveBattleStyleApiMoveBattleStyleReadRequest {
    id: number;
}
export declare class ObjectMoveBattleStyleApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveBattleStyleApiRequestFactory, responseProcessor?: MoveBattleStyleApiResponseProcessor);
    moveBattleStyleListWithHttpInfo(param?: MoveBattleStyleApiMoveBattleStyleListRequest, options?: Configuration): Promise<HttpInfo<MoveBattleStyleList200Response>>;
    moveBattleStyleList(param?: MoveBattleStyleApiMoveBattleStyleListRequest, options?: Configuration): Promise<MoveBattleStyleList200Response>;
    moveBattleStyleReadWithHttpInfo(param: MoveBattleStyleApiMoveBattleStyleReadRequest, options?: Configuration): Promise<HttpInfo<MoveBattleStyle>>;
    moveBattleStyleRead(param: MoveBattleStyleApiMoveBattleStyleReadRequest, options?: Configuration): Promise<MoveBattleStyle>;
}
import { MoveCategoryApiRequestFactory, MoveCategoryApiResponseProcessor } from "../apis/MoveCategoryApi";
export interface MoveCategoryApiMoveCategoryListRequest {
    limit?: number;
    offset?: number;
}
export interface MoveCategoryApiMoveCategoryReadRequest {
    id: number;
}
export declare class ObjectMoveCategoryApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveCategoryApiRequestFactory, responseProcessor?: MoveCategoryApiResponseProcessor);
    moveCategoryListWithHttpInfo(param?: MoveCategoryApiMoveCategoryListRequest, options?: Configuration): Promise<HttpInfo<MoveCategoryList200Response>>;
    moveCategoryList(param?: MoveCategoryApiMoveCategoryListRequest, options?: Configuration): Promise<MoveCategoryList200Response>;
    moveCategoryReadWithHttpInfo(param: MoveCategoryApiMoveCategoryReadRequest, options?: Configuration): Promise<HttpInfo<MoveCategory>>;
    moveCategoryRead(param: MoveCategoryApiMoveCategoryReadRequest, options?: Configuration): Promise<MoveCategory>;
}
import { MoveDamageClassApiRequestFactory, MoveDamageClassApiResponseProcessor } from "../apis/MoveDamageClassApi";
export interface MoveDamageClassApiMoveDamageClassListRequest {
    limit?: number;
    offset?: number;
}
export interface MoveDamageClassApiMoveDamageClassReadRequest {
    id: number;
}
export declare class ObjectMoveDamageClassApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveDamageClassApiRequestFactory, responseProcessor?: MoveDamageClassApiResponseProcessor);
    moveDamageClassListWithHttpInfo(param?: MoveDamageClassApiMoveDamageClassListRequest, options?: Configuration): Promise<HttpInfo<MoveDamageClassList200Response>>;
    moveDamageClassList(param?: MoveDamageClassApiMoveDamageClassListRequest, options?: Configuration): Promise<MoveDamageClassList200Response>;
    moveDamageClassReadWithHttpInfo(param: MoveDamageClassApiMoveDamageClassReadRequest, options?: Configuration): Promise<HttpInfo<MoveDamageClass>>;
    moveDamageClassRead(param: MoveDamageClassApiMoveDamageClassReadRequest, options?: Configuration): Promise<MoveDamageClass>;
}
import { MoveLearnMethodApiRequestFactory, MoveLearnMethodApiResponseProcessor } from "../apis/MoveLearnMethodApi";
export interface MoveLearnMethodApiMoveLearnMethodListRequest {
    limit?: number;
    offset?: number;
}
export interface MoveLearnMethodApiMoveLearnMethodReadRequest {
    id: number;
}
export declare class ObjectMoveLearnMethodApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveLearnMethodApiRequestFactory, responseProcessor?: MoveLearnMethodApiResponseProcessor);
    moveLearnMethodListWithHttpInfo(param?: MoveLearnMethodApiMoveLearnMethodListRequest, options?: Configuration): Promise<HttpInfo<MoveLearnMethodList200Response>>;
    moveLearnMethodList(param?: MoveLearnMethodApiMoveLearnMethodListRequest, options?: Configuration): Promise<MoveLearnMethodList200Response>;
    moveLearnMethodReadWithHttpInfo(param: MoveLearnMethodApiMoveLearnMethodReadRequest, options?: Configuration): Promise<HttpInfo<MoveLearnMethod>>;
    moveLearnMethodRead(param: MoveLearnMethodApiMoveLearnMethodReadRequest, options?: Configuration): Promise<MoveLearnMethod>;
}
import { MoveTargetApiRequestFactory, MoveTargetApiResponseProcessor } from "../apis/MoveTargetApi";
export interface MoveTargetApiMoveTargetListRequest {
    limit?: number;
    offset?: number;
}
export interface MoveTargetApiMoveTargetReadRequest {
    id: number;
}
export declare class ObjectMoveTargetApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveTargetApiRequestFactory, responseProcessor?: MoveTargetApiResponseProcessor);
    moveTargetListWithHttpInfo(param?: MoveTargetApiMoveTargetListRequest, options?: Configuration): Promise<HttpInfo<MoveTargetList200Response>>;
    moveTargetList(param?: MoveTargetApiMoveTargetListRequest, options?: Configuration): Promise<MoveTargetList200Response>;
    moveTargetReadWithHttpInfo(param: MoveTargetApiMoveTargetReadRequest, options?: Configuration): Promise<HttpInfo<MoveTarget>>;
    moveTargetRead(param: MoveTargetApiMoveTargetReadRequest, options?: Configuration): Promise<MoveTarget>;
}
import { NatureApiRequestFactory, NatureApiResponseProcessor } from "../apis/NatureApi";
export interface NatureApiNatureListRequest {
    limit?: number;
    offset?: number;
}
export interface NatureApiNatureReadRequest {
    idOrName: IDOrName;
}
export declare class ObjectNatureApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NatureApiRequestFactory, responseProcessor?: NatureApiResponseProcessor);
    natureListWithHttpInfo(param?: NatureApiNatureListRequest, options?: Configuration): Promise<HttpInfo<NatureList200Response>>;
    natureList(param?: NatureApiNatureListRequest, options?: Configuration): Promise<NatureList200Response>;
    natureReadWithHttpInfo(param: NatureApiNatureReadRequest, options?: Configuration): Promise<HttpInfo<Nature>>;
    natureRead(param: NatureApiNatureReadRequest, options?: Configuration): Promise<Nature>;
}
import { PalParkAreaApiRequestFactory, PalParkAreaApiResponseProcessor } from "../apis/PalParkAreaApi";
export interface PalParkAreaApiPalParkAreaListRequest {
    limit?: number;
    offset?: number;
}
export interface PalParkAreaApiPalParkAreaReadRequest {
    id: number;
}
export declare class ObjectPalParkAreaApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PalParkAreaApiRequestFactory, responseProcessor?: PalParkAreaApiResponseProcessor);
    palParkAreaListWithHttpInfo(param?: PalParkAreaApiPalParkAreaListRequest, options?: Configuration): Promise<HttpInfo<PalParkAreaList200Response>>;
    palParkAreaList(param?: PalParkAreaApiPalParkAreaListRequest, options?: Configuration): Promise<PalParkAreaList200Response>;
    palParkAreaReadWithHttpInfo(param: PalParkAreaApiPalParkAreaReadRequest, options?: Configuration): Promise<HttpInfo<PalParkArea>>;
    palParkAreaRead(param: PalParkAreaApiPalParkAreaReadRequest, options?: Configuration): Promise<PalParkArea>;
}
import { PokeathlonStatApiRequestFactory, PokeathlonStatApiResponseProcessor } from "../apis/PokeathlonStatApi";
export interface PokeathlonStatApiPokeathlonStatListRequest {
    limit?: number;
    offset?: number;
}
export interface PokeathlonStatApiPokeathlonStatReadRequest {
    id: number;
}
export declare class ObjectPokeathlonStatApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokeathlonStatApiRequestFactory, responseProcessor?: PokeathlonStatApiResponseProcessor);
    pokeathlonStatListWithHttpInfo(param?: PokeathlonStatApiPokeathlonStatListRequest, options?: Configuration): Promise<HttpInfo<PokeathlonStatList200Response>>;
    pokeathlonStatList(param?: PokeathlonStatApiPokeathlonStatListRequest, options?: Configuration): Promise<PokeathlonStatList200Response>;
    pokeathlonStatReadWithHttpInfo(param: PokeathlonStatApiPokeathlonStatReadRequest, options?: Configuration): Promise<HttpInfo<PokeathlonStat>>;
    pokeathlonStatRead(param: PokeathlonStatApiPokeathlonStatReadRequest, options?: Configuration): Promise<PokeathlonStat>;
}
import { PokedexApiRequestFactory, PokedexApiResponseProcessor } from "../apis/PokedexApi";
export interface PokedexApiPokedexListRequest {
    limit?: number;
    offset?: number;
}
export interface PokedexApiPokedexReadRequest {
    id: number;
}
export declare class ObjectPokedexApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokedexApiRequestFactory, responseProcessor?: PokedexApiResponseProcessor);
    pokedexListWithHttpInfo(param?: PokedexApiPokedexListRequest, options?: Configuration): Promise<HttpInfo<PokedexList200Response>>;
    pokedexList(param?: PokedexApiPokedexListRequest, options?: Configuration): Promise<PokedexList200Response>;
    pokedexReadWithHttpInfo(param: PokedexApiPokedexReadRequest, options?: Configuration): Promise<HttpInfo<Pokedex>>;
    pokedexRead(param: PokedexApiPokedexReadRequest, options?: Configuration): Promise<Pokedex>;
}
import { PokemonApiRequestFactory, PokemonApiResponseProcessor } from "../apis/PokemonApi";
export interface PokemonApiPokemonListRequest {
    limit?: number;
    offset?: number;
}
export interface PokemonApiPokemonReadRequest {
    idOrName: IDOrName1;
}
export declare class ObjectPokemonApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonApiRequestFactory, responseProcessor?: PokemonApiResponseProcessor);
    pokemonListWithHttpInfo(param?: PokemonApiPokemonListRequest, options?: Configuration): Promise<HttpInfo<PokemonList200Response>>;
    pokemonList(param?: PokemonApiPokemonListRequest, options?: Configuration): Promise<PokemonList200Response>;
    pokemonReadWithHttpInfo(param: PokemonApiPokemonReadRequest, options?: Configuration): Promise<HttpInfo<Pokemon>>;
    pokemonRead(param: PokemonApiPokemonReadRequest, options?: Configuration): Promise<Pokemon>;
}
import { PokemonColorApiRequestFactory, PokemonColorApiResponseProcessor } from "../apis/PokemonColorApi";
export interface PokemonColorApiPokemonColorListRequest {
    limit?: number;
    offset?: number;
}
export interface PokemonColorApiPokemonColorReadRequest {
    id: number;
}
export declare class ObjectPokemonColorApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonColorApiRequestFactory, responseProcessor?: PokemonColorApiResponseProcessor);
    pokemonColorListWithHttpInfo(param?: PokemonColorApiPokemonColorListRequest, options?: Configuration): Promise<HttpInfo<PokemonColorList200Response>>;
    pokemonColorList(param?: PokemonColorApiPokemonColorListRequest, options?: Configuration): Promise<PokemonColorList200Response>;
    pokemonColorReadWithHttpInfo(param: PokemonColorApiPokemonColorReadRequest, options?: Configuration): Promise<HttpInfo<PokemonColor>>;
    pokemonColorRead(param: PokemonColorApiPokemonColorReadRequest, options?: Configuration): Promise<PokemonColor>;
}
import { PokemonFormApiRequestFactory, PokemonFormApiResponseProcessor } from "../apis/PokemonFormApi";
export interface PokemonFormApiPokemonFormListRequest {
    limit?: number;
    offset?: number;
}
export interface PokemonFormApiPokemonFormReadRequest {
    id: number;
}
export declare class ObjectPokemonFormApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonFormApiRequestFactory, responseProcessor?: PokemonFormApiResponseProcessor);
    pokemonFormListWithHttpInfo(param?: PokemonFormApiPokemonFormListRequest, options?: Configuration): Promise<HttpInfo<PokemonFormList200Response>>;
    pokemonFormList(param?: PokemonFormApiPokemonFormListRequest, options?: Configuration): Promise<PokemonFormList200Response>;
    pokemonFormReadWithHttpInfo(param: PokemonFormApiPokemonFormReadRequest, options?: Configuration): Promise<HttpInfo<PokemonForm>>;
    pokemonFormRead(param: PokemonFormApiPokemonFormReadRequest, options?: Configuration): Promise<PokemonForm>;
}
import { PokemonHabitatApiRequestFactory, PokemonHabitatApiResponseProcessor } from "../apis/PokemonHabitatApi";
export interface PokemonHabitatApiPokemonHabitatListRequest {
    limit?: number;
    offset?: number;
}
export interface PokemonHabitatApiPokemonHabitatReadRequest {
    id: number;
}
export declare class ObjectPokemonHabitatApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonHabitatApiRequestFactory, responseProcessor?: PokemonHabitatApiResponseProcessor);
    pokemonHabitatListWithHttpInfo(param?: PokemonHabitatApiPokemonHabitatListRequest, options?: Configuration): Promise<HttpInfo<PokemonHabitatList200Response>>;
    pokemonHabitatList(param?: PokemonHabitatApiPokemonHabitatListRequest, options?: Configuration): Promise<PokemonHabitatList200Response>;
    pokemonHabitatReadWithHttpInfo(param: PokemonHabitatApiPokemonHabitatReadRequest, options?: Configuration): Promise<HttpInfo<PokemonHabitat>>;
    pokemonHabitatRead(param: PokemonHabitatApiPokemonHabitatReadRequest, options?: Configuration): Promise<PokemonHabitat>;
}
import { PokemonShapeApiRequestFactory, PokemonShapeApiResponseProcessor } from "../apis/PokemonShapeApi";
export interface PokemonShapeApiPokemonShapeListRequest {
    limit?: number;
    offset?: number;
}
export interface PokemonShapeApiPokemonShapeReadRequest {
    id: number;
}
export declare class ObjectPokemonShapeApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonShapeApiRequestFactory, responseProcessor?: PokemonShapeApiResponseProcessor);
    pokemonShapeListWithHttpInfo(param?: PokemonShapeApiPokemonShapeListRequest, options?: Configuration): Promise<HttpInfo<PokemonShapeList200Response>>;
    pokemonShapeList(param?: PokemonShapeApiPokemonShapeListRequest, options?: Configuration): Promise<PokemonShapeList200Response>;
    pokemonShapeReadWithHttpInfo(param: PokemonShapeApiPokemonShapeReadRequest, options?: Configuration): Promise<HttpInfo<PokemonShape>>;
    pokemonShapeRead(param: PokemonShapeApiPokemonShapeReadRequest, options?: Configuration): Promise<PokemonShape>;
}
import { PokemonSpeciesApiRequestFactory, PokemonSpeciesApiResponseProcessor } from "../apis/PokemonSpeciesApi";
export interface PokemonSpeciesApiPokemonSpeciesListRequest {
    limit?: number;
    offset?: number;
}
export interface PokemonSpeciesApiPokemonSpeciesReadRequest {
    id: number;
}
export declare class ObjectPokemonSpeciesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonSpeciesApiRequestFactory, responseProcessor?: PokemonSpeciesApiResponseProcessor);
    pokemonSpeciesListWithHttpInfo(param?: PokemonSpeciesApiPokemonSpeciesListRequest, options?: Configuration): Promise<HttpInfo<PokemonSpeciesList200Response>>;
    pokemonSpeciesList(param?: PokemonSpeciesApiPokemonSpeciesListRequest, options?: Configuration): Promise<PokemonSpeciesList200Response>;
    pokemonSpeciesReadWithHttpInfo(param: PokemonSpeciesApiPokemonSpeciesReadRequest, options?: Configuration): Promise<HttpInfo<PokemonSpecies>>;
    pokemonSpeciesRead(param: PokemonSpeciesApiPokemonSpeciesReadRequest, options?: Configuration): Promise<PokemonSpecies>;
}
import { RegionApiRequestFactory, RegionApiResponseProcessor } from "../apis/RegionApi";
export interface RegionApiRegionListRequest {
    limit?: number;
    offset?: number;
}
export interface RegionApiRegionReadRequest {
    id: number;
}
export declare class ObjectRegionApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RegionApiRequestFactory, responseProcessor?: RegionApiResponseProcessor);
    regionListWithHttpInfo(param?: RegionApiRegionListRequest, options?: Configuration): Promise<HttpInfo<RegionList200Response>>;
    regionList(param?: RegionApiRegionListRequest, options?: Configuration): Promise<RegionList200Response>;
    regionReadWithHttpInfo(param: RegionApiRegionReadRequest, options?: Configuration): Promise<HttpInfo<Region>>;
    regionRead(param: RegionApiRegionReadRequest, options?: Configuration): Promise<Region>;
}
import { StatApiRequestFactory, StatApiResponseProcessor } from "../apis/StatApi";
export interface StatApiStatListRequest {
    limit?: number;
    offset?: number;
}
export interface StatApiStatReadRequest {
    idOrName: IDOrName2;
}
export declare class ObjectStatApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: StatApiRequestFactory, responseProcessor?: StatApiResponseProcessor);
    statListWithHttpInfo(param?: StatApiStatListRequest, options?: Configuration): Promise<HttpInfo<StatList200Response>>;
    statList(param?: StatApiStatListRequest, options?: Configuration): Promise<StatList200Response>;
    statReadWithHttpInfo(param: StatApiStatReadRequest, options?: Configuration): Promise<HttpInfo<Stat>>;
    statRead(param: StatApiStatReadRequest, options?: Configuration): Promise<Stat>;
}
import { SuperContestEffectApiRequestFactory, SuperContestEffectApiResponseProcessor } from "../apis/SuperContestEffectApi";
export interface SuperContestEffectApiSuperContestEffectListRequest {
    limit?: number;
    offset?: number;
}
export interface SuperContestEffectApiSuperContestEffectReadRequest {
    id: number;
}
export declare class ObjectSuperContestEffectApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SuperContestEffectApiRequestFactory, responseProcessor?: SuperContestEffectApiResponseProcessor);
    superContestEffectListWithHttpInfo(param?: SuperContestEffectApiSuperContestEffectListRequest, options?: Configuration): Promise<HttpInfo<SuperContestEffectList200Response>>;
    superContestEffectList(param?: SuperContestEffectApiSuperContestEffectListRequest, options?: Configuration): Promise<SuperContestEffectList200Response>;
    superContestEffectReadWithHttpInfo(param: SuperContestEffectApiSuperContestEffectReadRequest, options?: Configuration): Promise<HttpInfo<SuperContestEffect>>;
    superContestEffectRead(param: SuperContestEffectApiSuperContestEffectReadRequest, options?: Configuration): Promise<SuperContestEffect>;
}
import { TypeApiRequestFactory, TypeApiResponseProcessor } from "../apis/TypeApi";
export interface TypeApiTypeListRequest {
    limit?: number;
    offset?: number;
}
export interface TypeApiTypeReadRequest {
    id: number;
}
export declare class ObjectTypeApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TypeApiRequestFactory, responseProcessor?: TypeApiResponseProcessor);
    typeListWithHttpInfo(param?: TypeApiTypeListRequest, options?: Configuration): Promise<HttpInfo<TypeList200Response>>;
    typeList(param?: TypeApiTypeListRequest, options?: Configuration): Promise<TypeList200Response>;
    typeReadWithHttpInfo(param: TypeApiTypeReadRequest, options?: Configuration): Promise<HttpInfo<Type>>;
    typeRead(param: TypeApiTypeReadRequest, options?: Configuration): Promise<Type>;
}
import { VersionApiRequestFactory, VersionApiResponseProcessor } from "../apis/VersionApi";
export interface VersionApiVersionListRequest {
    limit?: number;
    offset?: number;
}
export interface VersionApiVersionReadRequest {
    id: number;
}
export declare class ObjectVersionApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: VersionApiRequestFactory, responseProcessor?: VersionApiResponseProcessor);
    versionListWithHttpInfo(param?: VersionApiVersionListRequest, options?: Configuration): Promise<HttpInfo<VersionList200Response>>;
    versionList(param?: VersionApiVersionListRequest, options?: Configuration): Promise<VersionList200Response>;
    versionReadWithHttpInfo(param: VersionApiVersionReadRequest, options?: Configuration): Promise<HttpInfo<Version>>;
    versionRead(param: VersionApiVersionReadRequest, options?: Configuration): Promise<Version>;
}
import { VersionGroupApiRequestFactory, VersionGroupApiResponseProcessor } from "../apis/VersionGroupApi";
export interface VersionGroupApiVersionGroupListRequest {
    limit?: number;
    offset?: number;
}
export interface VersionGroupApiVersionGroupReadRequest {
    id: number;
}
export declare class ObjectVersionGroupApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: VersionGroupApiRequestFactory, responseProcessor?: VersionGroupApiResponseProcessor);
    versionGroupListWithHttpInfo(param?: VersionGroupApiVersionGroupListRequest, options?: Configuration): Promise<HttpInfo<VersionGroupList200Response>>;
    versionGroupList(param?: VersionGroupApiVersionGroupListRequest, options?: Configuration): Promise<VersionGroupList200Response>;
    versionGroupReadWithHttpInfo(param: VersionGroupApiVersionGroupReadRequest, options?: Configuration): Promise<HttpInfo<VersionGroup>>;
    versionGroupRead(param: VersionGroupApiVersionGroupReadRequest, options?: Configuration): Promise<VersionGroup>;
}
