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
export declare class PromiseAbilityApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AbilityApiRequestFactory, responseProcessor?: AbilityApiResponseProcessor);
    abilityListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<AbilityList200Response>>;
    abilityList(limit?: number, offset?: number, _options?: Configuration): Promise<AbilityList200Response>;
    abilityReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Ability>>;
    abilityRead(id: number, _options?: Configuration): Promise<Ability>;
}
import { BerryApiRequestFactory, BerryApiResponseProcessor } from "../apis/BerryApi";
export declare class PromiseBerryApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BerryApiRequestFactory, responseProcessor?: BerryApiResponseProcessor);
    berryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<Berry>>>;
    berryList(limit?: number, offset?: number, _options?: Configuration): Promise<Array<Berry>>;
    berryReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Berry>>;
    berryRead(id: number, _options?: Configuration): Promise<Berry>;
}
import { BerryFirmnessApiRequestFactory, BerryFirmnessApiResponseProcessor } from "../apis/BerryFirmnessApi";
export declare class PromiseBerryFirmnessApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BerryFirmnessApiRequestFactory, responseProcessor?: BerryFirmnessApiResponseProcessor);
    berryFirmnessListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<BerryFirmnessList200Response>>;
    berryFirmnessList(limit?: number, offset?: number, _options?: Configuration): Promise<BerryFirmnessList200Response>;
    berryFirmnessReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<BerryFirmness>>;
    berryFirmnessRead(id: number, _options?: Configuration): Promise<BerryFirmness>;
}
import { BerryFlavorApiRequestFactory, BerryFlavorApiResponseProcessor } from "../apis/BerryFlavorApi";
export declare class PromiseBerryFlavorApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BerryFlavorApiRequestFactory, responseProcessor?: BerryFlavorApiResponseProcessor);
    berryFlavorListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<BerryFlavorList200Response>>;
    berryFlavorList(limit?: number, offset?: number, _options?: Configuration): Promise<BerryFlavorList200Response>;
    berryFlavorReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<BerryFlavor>>;
    berryFlavorRead(id: number, _options?: Configuration): Promise<BerryFlavor>;
}
import { CharacteristicApiRequestFactory, CharacteristicApiResponseProcessor } from "../apis/CharacteristicApi";
export declare class PromiseCharacteristicApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CharacteristicApiRequestFactory, responseProcessor?: CharacteristicApiResponseProcessor);
    characteristicListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<Characteristic>>>;
    characteristicList(limit?: number, offset?: number, _options?: Configuration): Promise<Array<Characteristic>>;
    characteristicReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Characteristic>>;
    characteristicRead(id: number, _options?: Configuration): Promise<Characteristic>;
}
import { ContestEffectApiRequestFactory, ContestEffectApiResponseProcessor } from "../apis/ContestEffectApi";
export declare class PromiseContestEffectApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ContestEffectApiRequestFactory, responseProcessor?: ContestEffectApiResponseProcessor);
    contestEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ContestEffectList200Response>>;
    contestEffectList(limit?: number, offset?: number, _options?: Configuration): Promise<ContestEffectList200Response>;
    contestEffectReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ContestEffect>>;
    contestEffectRead(id: number, _options?: Configuration): Promise<ContestEffect>;
}
import { ContestTypeApiRequestFactory, ContestTypeApiResponseProcessor } from "../apis/ContestTypeApi";
export declare class PromiseContestTypeApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ContestTypeApiRequestFactory, responseProcessor?: ContestTypeApiResponseProcessor);
    contestTypeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ContestTypeList200Response>>;
    contestTypeList(limit?: number, offset?: number, _options?: Configuration): Promise<ContestTypeList200Response>;
    contestTypeReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ContestType>>;
    contestTypeRead(id: number, _options?: Configuration): Promise<ContestType>;
}
import { EggGroupApiRequestFactory, EggGroupApiResponseProcessor } from "../apis/EggGroupApi";
export declare class PromiseEggGroupApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EggGroupApiRequestFactory, responseProcessor?: EggGroupApiResponseProcessor);
    eggGroupListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<EggGroup>>>;
    eggGroupList(limit?: number, offset?: number, _options?: Configuration): Promise<Array<EggGroup>>;
    eggGroupReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EggGroup>>;
    eggGroupRead(id: number, _options?: Configuration): Promise<EggGroup>;
}
import { EncounterConditionApiRequestFactory, EncounterConditionApiResponseProcessor } from "../apis/EncounterConditionApi";
export declare class PromiseEncounterConditionApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EncounterConditionApiRequestFactory, responseProcessor?: EncounterConditionApiResponseProcessor);
    encounterConditionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<EncounterConditionList200Response>>;
    encounterConditionList(limit?: number, offset?: number, _options?: Configuration): Promise<EncounterConditionList200Response>;
    encounterConditionReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EncounterCondition>>;
    encounterConditionRead(id: number, _options?: Configuration): Promise<EncounterCondition>;
}
import { EncounterConditionValueApiRequestFactory, EncounterConditionValueApiResponseProcessor } from "../apis/EncounterConditionValueApi";
export declare class PromiseEncounterConditionValueApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EncounterConditionValueApiRequestFactory, responseProcessor?: EncounterConditionValueApiResponseProcessor);
    encounterConditionValueListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<EncounterConditionValue>>>;
    encounterConditionValueList(limit?: number, offset?: number, _options?: Configuration): Promise<Array<EncounterConditionValue>>;
    encounterConditionValueReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EncounterConditionValue>>;
    encounterConditionValueRead(id: number, _options?: Configuration): Promise<EncounterConditionValue>;
}
import { EncounterMethodApiRequestFactory, EncounterMethodApiResponseProcessor } from "../apis/EncounterMethodApi";
export declare class PromiseEncounterMethodApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EncounterMethodApiRequestFactory, responseProcessor?: EncounterMethodApiResponseProcessor);
    encounterMethodListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<EncounterMethodList200Response>>;
    encounterMethodList(limit?: number, offset?: number, _options?: Configuration): Promise<EncounterMethodList200Response>;
    encounterMethodReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EncounterMethod>>;
    encounterMethodRead(id: number, _options?: Configuration): Promise<EncounterMethod>;
}
import { EvolutionChainApiRequestFactory, EvolutionChainApiResponseProcessor } from "../apis/EvolutionChainApi";
export declare class PromiseEvolutionChainApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EvolutionChainApiRequestFactory, responseProcessor?: EvolutionChainApiResponseProcessor);
    evolutionChainListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<EvolutionChainList200Response>>;
    evolutionChainList(limit?: number, offset?: number, _options?: Configuration): Promise<EvolutionChainList200Response>;
    evolutionChainReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EvolutionChain>>;
    evolutionChainRead(id: number, _options?: Configuration): Promise<EvolutionChain>;
}
import { EvolutionTriggerApiRequestFactory, EvolutionTriggerApiResponseProcessor } from "../apis/EvolutionTriggerApi";
export declare class PromiseEvolutionTriggerApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EvolutionTriggerApiRequestFactory, responseProcessor?: EvolutionTriggerApiResponseProcessor);
    evolutionTriggerListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<EvolutionTriggerList200Response>>;
    evolutionTriggerList(limit?: number, offset?: number, _options?: Configuration): Promise<EvolutionTriggerList200Response>;
    evolutionTriggerReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<EvolutionTrigger>>;
    evolutionTriggerRead(id: number, _options?: Configuration): Promise<EvolutionTrigger>;
}
import { GenderApiRequestFactory, GenderApiResponseProcessor } from "../apis/GenderApi";
export declare class PromiseGenderApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GenderApiRequestFactory, responseProcessor?: GenderApiResponseProcessor);
    genderListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<GenderList200Response>>;
    genderList(limit?: number, offset?: number, _options?: Configuration): Promise<GenderList200Response>;
    genderReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Gender>>;
    genderRead(id: number, _options?: Configuration): Promise<Gender>;
}
import { GenerationApiRequestFactory, GenerationApiResponseProcessor } from "../apis/GenerationApi";
export declare class PromiseGenerationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GenerationApiRequestFactory, responseProcessor?: GenerationApiResponseProcessor);
    generationListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<GenerationList200Response>>;
    generationList(limit?: number, offset?: number, _options?: Configuration): Promise<GenerationList200Response>;
    generationReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Generation>>;
    generationRead(id: number, _options?: Configuration): Promise<Generation>;
}
import { GrowthRateApiRequestFactory, GrowthRateApiResponseProcessor } from "../apis/GrowthRateApi";
export declare class PromiseGrowthRateApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GrowthRateApiRequestFactory, responseProcessor?: GrowthRateApiResponseProcessor);
    growthRateListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<GrowthRateList200Response>>;
    growthRateList(limit?: number, offset?: number, _options?: Configuration): Promise<GrowthRateList200Response>;
    growthRateReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<GrowthRate>>;
    growthRateRead(id: number, _options?: Configuration): Promise<GrowthRate>;
}
import { ItemApiRequestFactory, ItemApiResponseProcessor } from "../apis/ItemApi";
export declare class PromiseItemApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ItemApiRequestFactory, responseProcessor?: ItemApiResponseProcessor);
    itemListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ItemList200Response>>;
    itemList(limit?: number, offset?: number, _options?: Configuration): Promise<ItemList200Response>;
    itemReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Item>>;
    itemRead(id: number, _options?: Configuration): Promise<Item>;
}
import { ItemAttributeApiRequestFactory, ItemAttributeApiResponseProcessor } from "../apis/ItemAttributeApi";
export declare class PromiseItemAttributeApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ItemAttributeApiRequestFactory, responseProcessor?: ItemAttributeApiResponseProcessor);
    itemAttributeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ItemAttributeList200Response>>;
    itemAttributeList(limit?: number, offset?: number, _options?: Configuration): Promise<ItemAttributeList200Response>;
    itemAttributeReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ItemAttribute>>;
    itemAttributeRead(id: number, _options?: Configuration): Promise<ItemAttribute>;
}
import { ItemCategoryApiRequestFactory, ItemCategoryApiResponseProcessor } from "../apis/ItemCategoryApi";
export declare class PromiseItemCategoryApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ItemCategoryApiRequestFactory, responseProcessor?: ItemCategoryApiResponseProcessor);
    itemCategoryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ItemCategoryList200Response>>;
    itemCategoryList(limit?: number, offset?: number, _options?: Configuration): Promise<ItemCategoryList200Response>;
    itemCategoryReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ItemCategory>>;
    itemCategoryRead(id: number, _options?: Configuration): Promise<ItemCategory>;
}
import { ItemFlingEffectApiRequestFactory, ItemFlingEffectApiResponseProcessor } from "../apis/ItemFlingEffectApi";
export declare class PromiseItemFlingEffectApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ItemFlingEffectApiRequestFactory, responseProcessor?: ItemFlingEffectApiResponseProcessor);
    itemFlingEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ItemFlingEffectList200Response>>;
    itemFlingEffectList(limit?: number, offset?: number, _options?: Configuration): Promise<ItemFlingEffectList200Response>;
    itemFlingEffectReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ItemFlingEffect>>;
    itemFlingEffectRead(id: number, _options?: Configuration): Promise<ItemFlingEffect>;
}
import { ItemPocketApiRequestFactory, ItemPocketApiResponseProcessor } from "../apis/ItemPocketApi";
export declare class PromiseItemPocketApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ItemPocketApiRequestFactory, responseProcessor?: ItemPocketApiResponseProcessor);
    itemPocketListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ItemPocketList200Response>>;
    itemPocketList(limit?: number, offset?: number, _options?: Configuration): Promise<ItemPocketList200Response>;
    itemPocketReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ItemPocket>>;
    itemPocketRead(id: number, _options?: Configuration): Promise<ItemPocket>;
}
import { LanguageApiRequestFactory, LanguageApiResponseProcessor } from "../apis/LanguageApi";
export declare class PromiseLanguageApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LanguageApiRequestFactory, responseProcessor?: LanguageApiResponseProcessor);
    languageListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<LanguageList200Response>>;
    languageList(limit?: number, offset?: number, _options?: Configuration): Promise<LanguageList200Response>;
    languageReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Language>>;
    languageRead(id: number, _options?: Configuration): Promise<Language>;
}
import { LocationApiRequestFactory, LocationApiResponseProcessor } from "../apis/LocationApi";
export declare class PromiseLocationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LocationApiRequestFactory, responseProcessor?: LocationApiResponseProcessor);
    locationListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<LocationList200Response>>;
    locationList(limit?: number, offset?: number, _options?: Configuration): Promise<LocationList200Response>;
    locationReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Location>>;
    locationRead(id: number, _options?: Configuration): Promise<Location>;
}
import { LocationAreaApiRequestFactory, LocationAreaApiResponseProcessor } from "../apis/LocationAreaApi";
export declare class PromiseLocationAreaApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LocationAreaApiRequestFactory, responseProcessor?: LocationAreaApiResponseProcessor);
    locationAreaListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<LocationAreaList200Response>>;
    locationAreaList(limit?: number, offset?: number, _options?: Configuration): Promise<LocationAreaList200Response>;
    locationAreaReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<LocationArea>>;
    locationAreaRead(id: number, _options?: Configuration): Promise<LocationArea>;
}
import { MachineApiRequestFactory, MachineApiResponseProcessor } from "../apis/MachineApi";
export declare class PromiseMachineApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MachineApiRequestFactory, responseProcessor?: MachineApiResponseProcessor);
    machineListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MachineList200Response>>;
    machineList(limit?: number, offset?: number, _options?: Configuration): Promise<MachineList200Response>;
    machineReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Machine>>;
    machineRead(id: number, _options?: Configuration): Promise<Machine>;
}
import { MoveApiRequestFactory, MoveApiResponseProcessor } from "../apis/MoveApi";
export declare class PromiseMoveApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveApiRequestFactory, responseProcessor?: MoveApiResponseProcessor);
    moveListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveList200Response>>;
    moveList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveList200Response>;
    moveReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Move>>;
    moveRead(id: number, _options?: Configuration): Promise<Move>;
}
import { MoveAilmentApiRequestFactory, MoveAilmentApiResponseProcessor } from "../apis/MoveAilmentApi";
export declare class PromiseMoveAilmentApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveAilmentApiRequestFactory, responseProcessor?: MoveAilmentApiResponseProcessor);
    moveAilmentListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveAilmentList200Response>>;
    moveAilmentList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveAilmentList200Response>;
    moveAilmentReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveAilment>>;
    moveAilmentRead(id: number, _options?: Configuration): Promise<MoveAilment>;
}
import { MoveBattleStyleApiRequestFactory, MoveBattleStyleApiResponseProcessor } from "../apis/MoveBattleStyleApi";
export declare class PromiseMoveBattleStyleApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveBattleStyleApiRequestFactory, responseProcessor?: MoveBattleStyleApiResponseProcessor);
    moveBattleStyleListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveBattleStyleList200Response>>;
    moveBattleStyleList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveBattleStyleList200Response>;
    moveBattleStyleReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveBattleStyle>>;
    moveBattleStyleRead(id: number, _options?: Configuration): Promise<MoveBattleStyle>;
}
import { MoveCategoryApiRequestFactory, MoveCategoryApiResponseProcessor } from "../apis/MoveCategoryApi";
export declare class PromiseMoveCategoryApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveCategoryApiRequestFactory, responseProcessor?: MoveCategoryApiResponseProcessor);
    moveCategoryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveCategoryList200Response>>;
    moveCategoryList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveCategoryList200Response>;
    moveCategoryReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveCategory>>;
    moveCategoryRead(id: number, _options?: Configuration): Promise<MoveCategory>;
}
import { MoveDamageClassApiRequestFactory, MoveDamageClassApiResponseProcessor } from "../apis/MoveDamageClassApi";
export declare class PromiseMoveDamageClassApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveDamageClassApiRequestFactory, responseProcessor?: MoveDamageClassApiResponseProcessor);
    moveDamageClassListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveDamageClassList200Response>>;
    moveDamageClassList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveDamageClassList200Response>;
    moveDamageClassReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveDamageClass>>;
    moveDamageClassRead(id: number, _options?: Configuration): Promise<MoveDamageClass>;
}
import { MoveLearnMethodApiRequestFactory, MoveLearnMethodApiResponseProcessor } from "../apis/MoveLearnMethodApi";
export declare class PromiseMoveLearnMethodApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveLearnMethodApiRequestFactory, responseProcessor?: MoveLearnMethodApiResponseProcessor);
    moveLearnMethodListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveLearnMethodList200Response>>;
    moveLearnMethodList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveLearnMethodList200Response>;
    moveLearnMethodReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveLearnMethod>>;
    moveLearnMethodRead(id: number, _options?: Configuration): Promise<MoveLearnMethod>;
}
import { MoveTargetApiRequestFactory, MoveTargetApiResponseProcessor } from "../apis/MoveTargetApi";
export declare class PromiseMoveTargetApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MoveTargetApiRequestFactory, responseProcessor?: MoveTargetApiResponseProcessor);
    moveTargetListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<MoveTargetList200Response>>;
    moveTargetList(limit?: number, offset?: number, _options?: Configuration): Promise<MoveTargetList200Response>;
    moveTargetReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<MoveTarget>>;
    moveTargetRead(id: number, _options?: Configuration): Promise<MoveTarget>;
}
import { NatureApiRequestFactory, NatureApiResponseProcessor } from "../apis/NatureApi";
export declare class PromiseNatureApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NatureApiRequestFactory, responseProcessor?: NatureApiResponseProcessor);
    natureListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<NatureList200Response>>;
    natureList(limit?: number, offset?: number, _options?: Configuration): Promise<NatureList200Response>;
    natureReadWithHttpInfo(idOrName: IDOrName, _options?: Configuration): Promise<HttpInfo<Nature>>;
    natureRead(idOrName: IDOrName, _options?: Configuration): Promise<Nature>;
}
import { PalParkAreaApiRequestFactory, PalParkAreaApiResponseProcessor } from "../apis/PalParkAreaApi";
export declare class PromisePalParkAreaApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PalParkAreaApiRequestFactory, responseProcessor?: PalParkAreaApiResponseProcessor);
    palParkAreaListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PalParkAreaList200Response>>;
    palParkAreaList(limit?: number, offset?: number, _options?: Configuration): Promise<PalParkAreaList200Response>;
    palParkAreaReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PalParkArea>>;
    palParkAreaRead(id: number, _options?: Configuration): Promise<PalParkArea>;
}
import { PokeathlonStatApiRequestFactory, PokeathlonStatApiResponseProcessor } from "../apis/PokeathlonStatApi";
export declare class PromisePokeathlonStatApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokeathlonStatApiRequestFactory, responseProcessor?: PokeathlonStatApiResponseProcessor);
    pokeathlonStatListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokeathlonStatList200Response>>;
    pokeathlonStatList(limit?: number, offset?: number, _options?: Configuration): Promise<PokeathlonStatList200Response>;
    pokeathlonStatReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokeathlonStat>>;
    pokeathlonStatRead(id: number, _options?: Configuration): Promise<PokeathlonStat>;
}
import { PokedexApiRequestFactory, PokedexApiResponseProcessor } from "../apis/PokedexApi";
export declare class PromisePokedexApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokedexApiRequestFactory, responseProcessor?: PokedexApiResponseProcessor);
    pokedexListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokedexList200Response>>;
    pokedexList(limit?: number, offset?: number, _options?: Configuration): Promise<PokedexList200Response>;
    pokedexReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Pokedex>>;
    pokedexRead(id: number, _options?: Configuration): Promise<Pokedex>;
}
import { PokemonApiRequestFactory, PokemonApiResponseProcessor } from "../apis/PokemonApi";
export declare class PromisePokemonApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonApiRequestFactory, responseProcessor?: PokemonApiResponseProcessor);
    pokemonListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonList200Response>>;
    pokemonList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonList200Response>;
    pokemonReadWithHttpInfo(idOrName: IDOrName1, _options?: Configuration): Promise<HttpInfo<Pokemon>>;
    pokemonRead(idOrName: IDOrName1, _options?: Configuration): Promise<Pokemon>;
}
import { PokemonColorApiRequestFactory, PokemonColorApiResponseProcessor } from "../apis/PokemonColorApi";
export declare class PromisePokemonColorApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonColorApiRequestFactory, responseProcessor?: PokemonColorApiResponseProcessor);
    pokemonColorListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonColorList200Response>>;
    pokemonColorList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonColorList200Response>;
    pokemonColorReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokemonColor>>;
    pokemonColorRead(id: number, _options?: Configuration): Promise<PokemonColor>;
}
import { PokemonFormApiRequestFactory, PokemonFormApiResponseProcessor } from "../apis/PokemonFormApi";
export declare class PromisePokemonFormApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonFormApiRequestFactory, responseProcessor?: PokemonFormApiResponseProcessor);
    pokemonFormListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonFormList200Response>>;
    pokemonFormList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonFormList200Response>;
    pokemonFormReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokemonForm>>;
    pokemonFormRead(id: number, _options?: Configuration): Promise<PokemonForm>;
}
import { PokemonHabitatApiRequestFactory, PokemonHabitatApiResponseProcessor } from "../apis/PokemonHabitatApi";
export declare class PromisePokemonHabitatApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonHabitatApiRequestFactory, responseProcessor?: PokemonHabitatApiResponseProcessor);
    pokemonHabitatListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonHabitatList200Response>>;
    pokemonHabitatList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonHabitatList200Response>;
    pokemonHabitatReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokemonHabitat>>;
    pokemonHabitatRead(id: number, _options?: Configuration): Promise<PokemonHabitat>;
}
import { PokemonShapeApiRequestFactory, PokemonShapeApiResponseProcessor } from "../apis/PokemonShapeApi";
export declare class PromisePokemonShapeApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonShapeApiRequestFactory, responseProcessor?: PokemonShapeApiResponseProcessor);
    pokemonShapeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonShapeList200Response>>;
    pokemonShapeList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonShapeList200Response>;
    pokemonShapeReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokemonShape>>;
    pokemonShapeRead(id: number, _options?: Configuration): Promise<PokemonShape>;
}
import { PokemonSpeciesApiRequestFactory, PokemonSpeciesApiResponseProcessor } from "../apis/PokemonSpeciesApi";
export declare class PromisePokemonSpeciesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PokemonSpeciesApiRequestFactory, responseProcessor?: PokemonSpeciesApiResponseProcessor);
    pokemonSpeciesListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<PokemonSpeciesList200Response>>;
    pokemonSpeciesList(limit?: number, offset?: number, _options?: Configuration): Promise<PokemonSpeciesList200Response>;
    pokemonSpeciesReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PokemonSpecies>>;
    pokemonSpeciesRead(id: number, _options?: Configuration): Promise<PokemonSpecies>;
}
import { RegionApiRequestFactory, RegionApiResponseProcessor } from "../apis/RegionApi";
export declare class PromiseRegionApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RegionApiRequestFactory, responseProcessor?: RegionApiResponseProcessor);
    regionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<RegionList200Response>>;
    regionList(limit?: number, offset?: number, _options?: Configuration): Promise<RegionList200Response>;
    regionReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Region>>;
    regionRead(id: number, _options?: Configuration): Promise<Region>;
}
import { StatApiRequestFactory, StatApiResponseProcessor } from "../apis/StatApi";
export declare class PromiseStatApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: StatApiRequestFactory, responseProcessor?: StatApiResponseProcessor);
    statListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<StatList200Response>>;
    statList(limit?: number, offset?: number, _options?: Configuration): Promise<StatList200Response>;
    statReadWithHttpInfo(idOrName: IDOrName2, _options?: Configuration): Promise<HttpInfo<Stat>>;
    statRead(idOrName: IDOrName2, _options?: Configuration): Promise<Stat>;
}
import { SuperContestEffectApiRequestFactory, SuperContestEffectApiResponseProcessor } from "../apis/SuperContestEffectApi";
export declare class PromiseSuperContestEffectApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SuperContestEffectApiRequestFactory, responseProcessor?: SuperContestEffectApiResponseProcessor);
    superContestEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<SuperContestEffectList200Response>>;
    superContestEffectList(limit?: number, offset?: number, _options?: Configuration): Promise<SuperContestEffectList200Response>;
    superContestEffectReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<SuperContestEffect>>;
    superContestEffectRead(id: number, _options?: Configuration): Promise<SuperContestEffect>;
}
import { TypeApiRequestFactory, TypeApiResponseProcessor } from "../apis/TypeApi";
export declare class PromiseTypeApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TypeApiRequestFactory, responseProcessor?: TypeApiResponseProcessor);
    typeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<TypeList200Response>>;
    typeList(limit?: number, offset?: number, _options?: Configuration): Promise<TypeList200Response>;
    typeReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Type>>;
    typeRead(id: number, _options?: Configuration): Promise<Type>;
}
import { VersionApiRequestFactory, VersionApiResponseProcessor } from "../apis/VersionApi";
export declare class PromiseVersionApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: VersionApiRequestFactory, responseProcessor?: VersionApiResponseProcessor);
    versionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<VersionList200Response>>;
    versionList(limit?: number, offset?: number, _options?: Configuration): Promise<VersionList200Response>;
    versionReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Version>>;
    versionRead(id: number, _options?: Configuration): Promise<Version>;
}
import { VersionGroupApiRequestFactory, VersionGroupApiResponseProcessor } from "../apis/VersionGroupApi";
export declare class PromiseVersionGroupApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: VersionGroupApiRequestFactory, responseProcessor?: VersionGroupApiResponseProcessor);
    versionGroupListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<VersionGroupList200Response>>;
    versionGroupList(limit?: number, offset?: number, _options?: Configuration): Promise<VersionGroupList200Response>;
    versionGroupReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<VersionGroup>>;
    versionGroupRead(id: number, _options?: Configuration): Promise<VersionGroup>;
}
