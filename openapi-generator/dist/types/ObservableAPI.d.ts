import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
export declare class ObservableAbilityApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AbilityApiRequestFactory, responseProcessor?: AbilityApiResponseProcessor);
    abilityListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<AbilityList200Response>>;
    abilityList(limit?: number, offset?: number, _options?: Configuration): Observable<AbilityList200Response>;
    abilityReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Ability>>;
    abilityRead(id: number, _options?: Configuration): Observable<Ability>;
}
import { BerryApiRequestFactory, BerryApiResponseProcessor } from "../apis/BerryApi";
export declare class ObservableBerryApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: BerryApiRequestFactory, responseProcessor?: BerryApiResponseProcessor);
    berryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<Array<Berry>>>;
    berryList(limit?: number, offset?: number, _options?: Configuration): Observable<Array<Berry>>;
    berryReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Berry>>;
    berryRead(id: number, _options?: Configuration): Observable<Berry>;
}
import { BerryFirmnessApiRequestFactory, BerryFirmnessApiResponseProcessor } from "../apis/BerryFirmnessApi";
export declare class ObservableBerryFirmnessApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: BerryFirmnessApiRequestFactory, responseProcessor?: BerryFirmnessApiResponseProcessor);
    berryFirmnessListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<BerryFirmnessList200Response>>;
    berryFirmnessList(limit?: number, offset?: number, _options?: Configuration): Observable<BerryFirmnessList200Response>;
    berryFirmnessReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<BerryFirmness>>;
    berryFirmnessRead(id: number, _options?: Configuration): Observable<BerryFirmness>;
}
import { BerryFlavorApiRequestFactory, BerryFlavorApiResponseProcessor } from "../apis/BerryFlavorApi";
export declare class ObservableBerryFlavorApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: BerryFlavorApiRequestFactory, responseProcessor?: BerryFlavorApiResponseProcessor);
    berryFlavorListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<BerryFlavorList200Response>>;
    berryFlavorList(limit?: number, offset?: number, _options?: Configuration): Observable<BerryFlavorList200Response>;
    berryFlavorReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<BerryFlavor>>;
    berryFlavorRead(id: number, _options?: Configuration): Observable<BerryFlavor>;
}
import { CharacteristicApiRequestFactory, CharacteristicApiResponseProcessor } from "../apis/CharacteristicApi";
export declare class ObservableCharacteristicApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CharacteristicApiRequestFactory, responseProcessor?: CharacteristicApiResponseProcessor);
    characteristicListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<Array<Characteristic>>>;
    characteristicList(limit?: number, offset?: number, _options?: Configuration): Observable<Array<Characteristic>>;
    characteristicReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Characteristic>>;
    characteristicRead(id: number, _options?: Configuration): Observable<Characteristic>;
}
import { ContestEffectApiRequestFactory, ContestEffectApiResponseProcessor } from "../apis/ContestEffectApi";
export declare class ObservableContestEffectApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ContestEffectApiRequestFactory, responseProcessor?: ContestEffectApiResponseProcessor);
    contestEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ContestEffectList200Response>>;
    contestEffectList(limit?: number, offset?: number, _options?: Configuration): Observable<ContestEffectList200Response>;
    contestEffectReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ContestEffect>>;
    contestEffectRead(id: number, _options?: Configuration): Observable<ContestEffect>;
}
import { ContestTypeApiRequestFactory, ContestTypeApiResponseProcessor } from "../apis/ContestTypeApi";
export declare class ObservableContestTypeApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ContestTypeApiRequestFactory, responseProcessor?: ContestTypeApiResponseProcessor);
    contestTypeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ContestTypeList200Response>>;
    contestTypeList(limit?: number, offset?: number, _options?: Configuration): Observable<ContestTypeList200Response>;
    contestTypeReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ContestType>>;
    contestTypeRead(id: number, _options?: Configuration): Observable<ContestType>;
}
import { EggGroupApiRequestFactory, EggGroupApiResponseProcessor } from "../apis/EggGroupApi";
export declare class ObservableEggGroupApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EggGroupApiRequestFactory, responseProcessor?: EggGroupApiResponseProcessor);
    eggGroupListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<Array<EggGroup>>>;
    eggGroupList(limit?: number, offset?: number, _options?: Configuration): Observable<Array<EggGroup>>;
    eggGroupReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EggGroup>>;
    eggGroupRead(id: number, _options?: Configuration): Observable<EggGroup>;
}
import { EncounterConditionApiRequestFactory, EncounterConditionApiResponseProcessor } from "../apis/EncounterConditionApi";
export declare class ObservableEncounterConditionApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EncounterConditionApiRequestFactory, responseProcessor?: EncounterConditionApiResponseProcessor);
    encounterConditionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<EncounterConditionList200Response>>;
    encounterConditionList(limit?: number, offset?: number, _options?: Configuration): Observable<EncounterConditionList200Response>;
    encounterConditionReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EncounterCondition>>;
    encounterConditionRead(id: number, _options?: Configuration): Observable<EncounterCondition>;
}
import { EncounterConditionValueApiRequestFactory, EncounterConditionValueApiResponseProcessor } from "../apis/EncounterConditionValueApi";
export declare class ObservableEncounterConditionValueApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EncounterConditionValueApiRequestFactory, responseProcessor?: EncounterConditionValueApiResponseProcessor);
    encounterConditionValueListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<Array<EncounterConditionValue>>>;
    encounterConditionValueList(limit?: number, offset?: number, _options?: Configuration): Observable<Array<EncounterConditionValue>>;
    encounterConditionValueReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EncounterConditionValue>>;
    encounterConditionValueRead(id: number, _options?: Configuration): Observable<EncounterConditionValue>;
}
import { EncounterMethodApiRequestFactory, EncounterMethodApiResponseProcessor } from "../apis/EncounterMethodApi";
export declare class ObservableEncounterMethodApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EncounterMethodApiRequestFactory, responseProcessor?: EncounterMethodApiResponseProcessor);
    encounterMethodListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<EncounterMethodList200Response>>;
    encounterMethodList(limit?: number, offset?: number, _options?: Configuration): Observable<EncounterMethodList200Response>;
    encounterMethodReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EncounterMethod>>;
    encounterMethodRead(id: number, _options?: Configuration): Observable<EncounterMethod>;
}
import { EvolutionChainApiRequestFactory, EvolutionChainApiResponseProcessor } from "../apis/EvolutionChainApi";
export declare class ObservableEvolutionChainApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EvolutionChainApiRequestFactory, responseProcessor?: EvolutionChainApiResponseProcessor);
    evolutionChainListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<EvolutionChainList200Response>>;
    evolutionChainList(limit?: number, offset?: number, _options?: Configuration): Observable<EvolutionChainList200Response>;
    evolutionChainReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EvolutionChain>>;
    evolutionChainRead(id: number, _options?: Configuration): Observable<EvolutionChain>;
}
import { EvolutionTriggerApiRequestFactory, EvolutionTriggerApiResponseProcessor } from "../apis/EvolutionTriggerApi";
export declare class ObservableEvolutionTriggerApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EvolutionTriggerApiRequestFactory, responseProcessor?: EvolutionTriggerApiResponseProcessor);
    evolutionTriggerListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<EvolutionTriggerList200Response>>;
    evolutionTriggerList(limit?: number, offset?: number, _options?: Configuration): Observable<EvolutionTriggerList200Response>;
    evolutionTriggerReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<EvolutionTrigger>>;
    evolutionTriggerRead(id: number, _options?: Configuration): Observable<EvolutionTrigger>;
}
import { GenderApiRequestFactory, GenderApiResponseProcessor } from "../apis/GenderApi";
export declare class ObservableGenderApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GenderApiRequestFactory, responseProcessor?: GenderApiResponseProcessor);
    genderListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<GenderList200Response>>;
    genderList(limit?: number, offset?: number, _options?: Configuration): Observable<GenderList200Response>;
    genderReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Gender>>;
    genderRead(id: number, _options?: Configuration): Observable<Gender>;
}
import { GenerationApiRequestFactory, GenerationApiResponseProcessor } from "../apis/GenerationApi";
export declare class ObservableGenerationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GenerationApiRequestFactory, responseProcessor?: GenerationApiResponseProcessor);
    generationListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<GenerationList200Response>>;
    generationList(limit?: number, offset?: number, _options?: Configuration): Observable<GenerationList200Response>;
    generationReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Generation>>;
    generationRead(id: number, _options?: Configuration): Observable<Generation>;
}
import { GrowthRateApiRequestFactory, GrowthRateApiResponseProcessor } from "../apis/GrowthRateApi";
export declare class ObservableGrowthRateApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GrowthRateApiRequestFactory, responseProcessor?: GrowthRateApiResponseProcessor);
    growthRateListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<GrowthRateList200Response>>;
    growthRateList(limit?: number, offset?: number, _options?: Configuration): Observable<GrowthRateList200Response>;
    growthRateReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<GrowthRate>>;
    growthRateRead(id: number, _options?: Configuration): Observable<GrowthRate>;
}
import { ItemApiRequestFactory, ItemApiResponseProcessor } from "../apis/ItemApi";
export declare class ObservableItemApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ItemApiRequestFactory, responseProcessor?: ItemApiResponseProcessor);
    itemListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ItemList200Response>>;
    itemList(limit?: number, offset?: number, _options?: Configuration): Observable<ItemList200Response>;
    itemReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Item>>;
    itemRead(id: number, _options?: Configuration): Observable<Item>;
}
import { ItemAttributeApiRequestFactory, ItemAttributeApiResponseProcessor } from "../apis/ItemAttributeApi";
export declare class ObservableItemAttributeApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ItemAttributeApiRequestFactory, responseProcessor?: ItemAttributeApiResponseProcessor);
    itemAttributeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ItemAttributeList200Response>>;
    itemAttributeList(limit?: number, offset?: number, _options?: Configuration): Observable<ItemAttributeList200Response>;
    itemAttributeReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ItemAttribute>>;
    itemAttributeRead(id: number, _options?: Configuration): Observable<ItemAttribute>;
}
import { ItemCategoryApiRequestFactory, ItemCategoryApiResponseProcessor } from "../apis/ItemCategoryApi";
export declare class ObservableItemCategoryApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ItemCategoryApiRequestFactory, responseProcessor?: ItemCategoryApiResponseProcessor);
    itemCategoryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ItemCategoryList200Response>>;
    itemCategoryList(limit?: number, offset?: number, _options?: Configuration): Observable<ItemCategoryList200Response>;
    itemCategoryReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ItemCategory>>;
    itemCategoryRead(id: number, _options?: Configuration): Observable<ItemCategory>;
}
import { ItemFlingEffectApiRequestFactory, ItemFlingEffectApiResponseProcessor } from "../apis/ItemFlingEffectApi";
export declare class ObservableItemFlingEffectApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ItemFlingEffectApiRequestFactory, responseProcessor?: ItemFlingEffectApiResponseProcessor);
    itemFlingEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ItemFlingEffectList200Response>>;
    itemFlingEffectList(limit?: number, offset?: number, _options?: Configuration): Observable<ItemFlingEffectList200Response>;
    itemFlingEffectReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ItemFlingEffect>>;
    itemFlingEffectRead(id: number, _options?: Configuration): Observable<ItemFlingEffect>;
}
import { ItemPocketApiRequestFactory, ItemPocketApiResponseProcessor } from "../apis/ItemPocketApi";
export declare class ObservableItemPocketApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ItemPocketApiRequestFactory, responseProcessor?: ItemPocketApiResponseProcessor);
    itemPocketListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ItemPocketList200Response>>;
    itemPocketList(limit?: number, offset?: number, _options?: Configuration): Observable<ItemPocketList200Response>;
    itemPocketReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ItemPocket>>;
    itemPocketRead(id: number, _options?: Configuration): Observable<ItemPocket>;
}
import { LanguageApiRequestFactory, LanguageApiResponseProcessor } from "../apis/LanguageApi";
export declare class ObservableLanguageApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LanguageApiRequestFactory, responseProcessor?: LanguageApiResponseProcessor);
    languageListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<LanguageList200Response>>;
    languageList(limit?: number, offset?: number, _options?: Configuration): Observable<LanguageList200Response>;
    languageReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Language>>;
    languageRead(id: number, _options?: Configuration): Observable<Language>;
}
import { LocationApiRequestFactory, LocationApiResponseProcessor } from "../apis/LocationApi";
export declare class ObservableLocationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LocationApiRequestFactory, responseProcessor?: LocationApiResponseProcessor);
    locationListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<LocationList200Response>>;
    locationList(limit?: number, offset?: number, _options?: Configuration): Observable<LocationList200Response>;
    locationReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Location>>;
    locationRead(id: number, _options?: Configuration): Observable<Location>;
}
import { LocationAreaApiRequestFactory, LocationAreaApiResponseProcessor } from "../apis/LocationAreaApi";
export declare class ObservableLocationAreaApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LocationAreaApiRequestFactory, responseProcessor?: LocationAreaApiResponseProcessor);
    locationAreaListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<LocationAreaList200Response>>;
    locationAreaList(limit?: number, offset?: number, _options?: Configuration): Observable<LocationAreaList200Response>;
    locationAreaReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<LocationArea>>;
    locationAreaRead(id: number, _options?: Configuration): Observable<LocationArea>;
}
import { MachineApiRequestFactory, MachineApiResponseProcessor } from "../apis/MachineApi";
export declare class ObservableMachineApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MachineApiRequestFactory, responseProcessor?: MachineApiResponseProcessor);
    machineListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MachineList200Response>>;
    machineList(limit?: number, offset?: number, _options?: Configuration): Observable<MachineList200Response>;
    machineReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Machine>>;
    machineRead(id: number, _options?: Configuration): Observable<Machine>;
}
import { MoveApiRequestFactory, MoveApiResponseProcessor } from "../apis/MoveApi";
export declare class ObservableMoveApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MoveApiRequestFactory, responseProcessor?: MoveApiResponseProcessor);
    moveListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveList200Response>>;
    moveList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveList200Response>;
    moveReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Move>>;
    moveRead(id: number, _options?: Configuration): Observable<Move>;
}
import { MoveAilmentApiRequestFactory, MoveAilmentApiResponseProcessor } from "../apis/MoveAilmentApi";
export declare class ObservableMoveAilmentApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MoveAilmentApiRequestFactory, responseProcessor?: MoveAilmentApiResponseProcessor);
    moveAilmentListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveAilmentList200Response>>;
    moveAilmentList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveAilmentList200Response>;
    moveAilmentReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveAilment>>;
    moveAilmentRead(id: number, _options?: Configuration): Observable<MoveAilment>;
}
import { MoveBattleStyleApiRequestFactory, MoveBattleStyleApiResponseProcessor } from "../apis/MoveBattleStyleApi";
export declare class ObservableMoveBattleStyleApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MoveBattleStyleApiRequestFactory, responseProcessor?: MoveBattleStyleApiResponseProcessor);
    moveBattleStyleListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveBattleStyleList200Response>>;
    moveBattleStyleList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveBattleStyleList200Response>;
    moveBattleStyleReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveBattleStyle>>;
    moveBattleStyleRead(id: number, _options?: Configuration): Observable<MoveBattleStyle>;
}
import { MoveCategoryApiRequestFactory, MoveCategoryApiResponseProcessor } from "../apis/MoveCategoryApi";
export declare class ObservableMoveCategoryApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MoveCategoryApiRequestFactory, responseProcessor?: MoveCategoryApiResponseProcessor);
    moveCategoryListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveCategoryList200Response>>;
    moveCategoryList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveCategoryList200Response>;
    moveCategoryReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveCategory>>;
    moveCategoryRead(id: number, _options?: Configuration): Observable<MoveCategory>;
}
import { MoveDamageClassApiRequestFactory, MoveDamageClassApiResponseProcessor } from "../apis/MoveDamageClassApi";
export declare class ObservableMoveDamageClassApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MoveDamageClassApiRequestFactory, responseProcessor?: MoveDamageClassApiResponseProcessor);
    moveDamageClassListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveDamageClassList200Response>>;
    moveDamageClassList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveDamageClassList200Response>;
    moveDamageClassReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveDamageClass>>;
    moveDamageClassRead(id: number, _options?: Configuration): Observable<MoveDamageClass>;
}
import { MoveLearnMethodApiRequestFactory, MoveLearnMethodApiResponseProcessor } from "../apis/MoveLearnMethodApi";
export declare class ObservableMoveLearnMethodApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MoveLearnMethodApiRequestFactory, responseProcessor?: MoveLearnMethodApiResponseProcessor);
    moveLearnMethodListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveLearnMethodList200Response>>;
    moveLearnMethodList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveLearnMethodList200Response>;
    moveLearnMethodReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveLearnMethod>>;
    moveLearnMethodRead(id: number, _options?: Configuration): Observable<MoveLearnMethod>;
}
import { MoveTargetApiRequestFactory, MoveTargetApiResponseProcessor } from "../apis/MoveTargetApi";
export declare class ObservableMoveTargetApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MoveTargetApiRequestFactory, responseProcessor?: MoveTargetApiResponseProcessor);
    moveTargetListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<MoveTargetList200Response>>;
    moveTargetList(limit?: number, offset?: number, _options?: Configuration): Observable<MoveTargetList200Response>;
    moveTargetReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<MoveTarget>>;
    moveTargetRead(id: number, _options?: Configuration): Observable<MoveTarget>;
}
import { NatureApiRequestFactory, NatureApiResponseProcessor } from "../apis/NatureApi";
export declare class ObservableNatureApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: NatureApiRequestFactory, responseProcessor?: NatureApiResponseProcessor);
    natureListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<NatureList200Response>>;
    natureList(limit?: number, offset?: number, _options?: Configuration): Observable<NatureList200Response>;
    natureReadWithHttpInfo(idOrName: IDOrName, _options?: Configuration): Observable<HttpInfo<Nature>>;
    natureRead(idOrName: IDOrName, _options?: Configuration): Observable<Nature>;
}
import { PalParkAreaApiRequestFactory, PalParkAreaApiResponseProcessor } from "../apis/PalParkAreaApi";
export declare class ObservablePalParkAreaApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PalParkAreaApiRequestFactory, responseProcessor?: PalParkAreaApiResponseProcessor);
    palParkAreaListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PalParkAreaList200Response>>;
    palParkAreaList(limit?: number, offset?: number, _options?: Configuration): Observable<PalParkAreaList200Response>;
    palParkAreaReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PalParkArea>>;
    palParkAreaRead(id: number, _options?: Configuration): Observable<PalParkArea>;
}
import { PokeathlonStatApiRequestFactory, PokeathlonStatApiResponseProcessor } from "../apis/PokeathlonStatApi";
export declare class ObservablePokeathlonStatApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PokeathlonStatApiRequestFactory, responseProcessor?: PokeathlonStatApiResponseProcessor);
    pokeathlonStatListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokeathlonStatList200Response>>;
    pokeathlonStatList(limit?: number, offset?: number, _options?: Configuration): Observable<PokeathlonStatList200Response>;
    pokeathlonStatReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokeathlonStat>>;
    pokeathlonStatRead(id: number, _options?: Configuration): Observable<PokeathlonStat>;
}
import { PokedexApiRequestFactory, PokedexApiResponseProcessor } from "../apis/PokedexApi";
export declare class ObservablePokedexApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PokedexApiRequestFactory, responseProcessor?: PokedexApiResponseProcessor);
    pokedexListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokedexList200Response>>;
    pokedexList(limit?: number, offset?: number, _options?: Configuration): Observable<PokedexList200Response>;
    pokedexReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Pokedex>>;
    pokedexRead(id: number, _options?: Configuration): Observable<Pokedex>;
}
import { PokemonApiRequestFactory, PokemonApiResponseProcessor } from "../apis/PokemonApi";
export declare class ObservablePokemonApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PokemonApiRequestFactory, responseProcessor?: PokemonApiResponseProcessor);
    pokemonListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonList200Response>>;
    pokemonList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonList200Response>;
    pokemonReadWithHttpInfo(idOrName: IDOrName1, _options?: Configuration): Observable<HttpInfo<Pokemon>>;
    pokemonRead(idOrName: IDOrName1, _options?: Configuration): Observable<Pokemon>;
}
import { PokemonColorApiRequestFactory, PokemonColorApiResponseProcessor } from "../apis/PokemonColorApi";
export declare class ObservablePokemonColorApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PokemonColorApiRequestFactory, responseProcessor?: PokemonColorApiResponseProcessor);
    pokemonColorListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonColorList200Response>>;
    pokemonColorList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonColorList200Response>;
    pokemonColorReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokemonColor>>;
    pokemonColorRead(id: number, _options?: Configuration): Observable<PokemonColor>;
}
import { PokemonFormApiRequestFactory, PokemonFormApiResponseProcessor } from "../apis/PokemonFormApi";
export declare class ObservablePokemonFormApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PokemonFormApiRequestFactory, responseProcessor?: PokemonFormApiResponseProcessor);
    pokemonFormListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonFormList200Response>>;
    pokemonFormList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonFormList200Response>;
    pokemonFormReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokemonForm>>;
    pokemonFormRead(id: number, _options?: Configuration): Observable<PokemonForm>;
}
import { PokemonHabitatApiRequestFactory, PokemonHabitatApiResponseProcessor } from "../apis/PokemonHabitatApi";
export declare class ObservablePokemonHabitatApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PokemonHabitatApiRequestFactory, responseProcessor?: PokemonHabitatApiResponseProcessor);
    pokemonHabitatListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonHabitatList200Response>>;
    pokemonHabitatList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonHabitatList200Response>;
    pokemonHabitatReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokemonHabitat>>;
    pokemonHabitatRead(id: number, _options?: Configuration): Observable<PokemonHabitat>;
}
import { PokemonShapeApiRequestFactory, PokemonShapeApiResponseProcessor } from "../apis/PokemonShapeApi";
export declare class ObservablePokemonShapeApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PokemonShapeApiRequestFactory, responseProcessor?: PokemonShapeApiResponseProcessor);
    pokemonShapeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonShapeList200Response>>;
    pokemonShapeList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonShapeList200Response>;
    pokemonShapeReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokemonShape>>;
    pokemonShapeRead(id: number, _options?: Configuration): Observable<PokemonShape>;
}
import { PokemonSpeciesApiRequestFactory, PokemonSpeciesApiResponseProcessor } from "../apis/PokemonSpeciesApi";
export declare class ObservablePokemonSpeciesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PokemonSpeciesApiRequestFactory, responseProcessor?: PokemonSpeciesApiResponseProcessor);
    pokemonSpeciesListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<PokemonSpeciesList200Response>>;
    pokemonSpeciesList(limit?: number, offset?: number, _options?: Configuration): Observable<PokemonSpeciesList200Response>;
    pokemonSpeciesReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PokemonSpecies>>;
    pokemonSpeciesRead(id: number, _options?: Configuration): Observable<PokemonSpecies>;
}
import { RegionApiRequestFactory, RegionApiResponseProcessor } from "../apis/RegionApi";
export declare class ObservableRegionApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RegionApiRequestFactory, responseProcessor?: RegionApiResponseProcessor);
    regionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<RegionList200Response>>;
    regionList(limit?: number, offset?: number, _options?: Configuration): Observable<RegionList200Response>;
    regionReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Region>>;
    regionRead(id: number, _options?: Configuration): Observable<Region>;
}
import { StatApiRequestFactory, StatApiResponseProcessor } from "../apis/StatApi";
export declare class ObservableStatApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: StatApiRequestFactory, responseProcessor?: StatApiResponseProcessor);
    statListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<StatList200Response>>;
    statList(limit?: number, offset?: number, _options?: Configuration): Observable<StatList200Response>;
    statReadWithHttpInfo(idOrName: IDOrName2, _options?: Configuration): Observable<HttpInfo<Stat>>;
    statRead(idOrName: IDOrName2, _options?: Configuration): Observable<Stat>;
}
import { SuperContestEffectApiRequestFactory, SuperContestEffectApiResponseProcessor } from "../apis/SuperContestEffectApi";
export declare class ObservableSuperContestEffectApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SuperContestEffectApiRequestFactory, responseProcessor?: SuperContestEffectApiResponseProcessor);
    superContestEffectListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<SuperContestEffectList200Response>>;
    superContestEffectList(limit?: number, offset?: number, _options?: Configuration): Observable<SuperContestEffectList200Response>;
    superContestEffectReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<SuperContestEffect>>;
    superContestEffectRead(id: number, _options?: Configuration): Observable<SuperContestEffect>;
}
import { TypeApiRequestFactory, TypeApiResponseProcessor } from "../apis/TypeApi";
export declare class ObservableTypeApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TypeApiRequestFactory, responseProcessor?: TypeApiResponseProcessor);
    typeListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<TypeList200Response>>;
    typeList(limit?: number, offset?: number, _options?: Configuration): Observable<TypeList200Response>;
    typeReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Type>>;
    typeRead(id: number, _options?: Configuration): Observable<Type>;
}
import { VersionApiRequestFactory, VersionApiResponseProcessor } from "../apis/VersionApi";
export declare class ObservableVersionApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: VersionApiRequestFactory, responseProcessor?: VersionApiResponseProcessor);
    versionListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<VersionList200Response>>;
    versionList(limit?: number, offset?: number, _options?: Configuration): Observable<VersionList200Response>;
    versionReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Version>>;
    versionRead(id: number, _options?: Configuration): Observable<Version>;
}
import { VersionGroupApiRequestFactory, VersionGroupApiResponseProcessor } from "../apis/VersionGroupApi";
export declare class ObservableVersionGroupApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: VersionGroupApiRequestFactory, responseProcessor?: VersionGroupApiResponseProcessor);
    versionGroupListWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<VersionGroupList200Response>>;
    versionGroupList(limit?: number, offset?: number, _options?: Configuration): Observable<VersionGroupList200Response>;
    versionGroupReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<VersionGroup>>;
    versionGroupRead(id: number, _options?: Configuration): Observable<VersionGroup>;
}
