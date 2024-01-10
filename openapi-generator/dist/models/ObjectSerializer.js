"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/APIResource"), exports);
__exportStar(require("../models/Ability"), exports);
__exportStar(require("../models/AbilityEffectChange"), exports);
__exportStar(require("../models/AbilityGeneration"), exports);
__exportStar(require("../models/AbilityList200Response"), exports);
__exportStar(require("../models/AbilityNamesInner"), exports);
__exportStar(require("../models/AbilityNamesInnerLanguage"), exports);
__exportStar(require("../models/Berry"), exports);
__exportStar(require("../models/BerryFirmness"), exports);
__exportStar(require("../models/BerryFirmnessList200Response"), exports);
__exportStar(require("../models/BerryFlavor"), exports);
__exportStar(require("../models/BerryFlavorList200Response"), exports);
__exportStar(require("../models/BerryFlavorMap"), exports);
__exportStar(require("../models/Characteristic"), exports);
__exportStar(require("../models/ContestComboDetail"), exports);
__exportStar(require("../models/ContestComboSets"), exports);
__exportStar(require("../models/ContestEffect"), exports);
__exportStar(require("../models/ContestEffectList200Response"), exports);
__exportStar(require("../models/ContestName"), exports);
__exportStar(require("../models/ContestType"), exports);
__exportStar(require("../models/ContestTypeList200Response"), exports);
__exportStar(require("../models/Description"), exports);
__exportStar(require("../models/Effect"), exports);
__exportStar(require("../models/EffectEffect"), exports);
__exportStar(require("../models/EggGroup"), exports);
__exportStar(require("../models/Encounter"), exports);
__exportStar(require("../models/EncounterCondition"), exports);
__exportStar(require("../models/EncounterConditionList200Response"), exports);
__exportStar(require("../models/EncounterConditionValue"), exports);
__exportStar(require("../models/EncounterMethod"), exports);
__exportStar(require("../models/EncounterMethodList200Response"), exports);
__exportStar(require("../models/EncounterMethodRate"), exports);
__exportStar(require("../models/EncounterVersionDetails"), exports);
__exportStar(require("../models/EvolutionChain"), exports);
__exportStar(require("../models/EvolutionChainBabyTriggerItem"), exports);
__exportStar(require("../models/EvolutionChainChain"), exports);
__exportStar(require("../models/EvolutionChainChainEvolutionDetailsInner"), exports);
__exportStar(require("../models/EvolutionChainChainEvolutionDetailsInnerItem"), exports);
__exportStar(require("../models/EvolutionChainChainEvolutionDetailsInnerKnownMove"), exports);
__exportStar(require("../models/EvolutionChainChainEvolutionDetailsInnerKnownMoveType"), exports);
__exportStar(require("../models/EvolutionChainChainEvolutionDetailsInnerLocation"), exports);
__exportStar(require("../models/EvolutionChainChainEvolutionDetailsInnerPartySpecies"), exports);
__exportStar(require("../models/EvolutionChainList200Response"), exports);
__exportStar(require("../models/EvolutionTrigger"), exports);
__exportStar(require("../models/EvolutionTriggerList200Response"), exports);
__exportStar(require("../models/FlavorText"), exports);
__exportStar(require("../models/Gender"), exports);
__exportStar(require("../models/GenderList200Response"), exports);
__exportStar(require("../models/GenderPokemonSpeciesDetailsInner"), exports);
__exportStar(require("../models/Generation"), exports);
__exportStar(require("../models/GenerationAbilitiesInner"), exports);
__exportStar(require("../models/GenerationGameIndex"), exports);
__exportStar(require("../models/GenerationList200Response"), exports);
__exportStar(require("../models/GenerationNamesInner"), exports);
__exportStar(require("../models/Genus"), exports);
__exportStar(require("../models/GrowthRate"), exports);
__exportStar(require("../models/GrowthRateList200Response"), exports);
__exportStar(require("../models/IDOrName"), exports);
__exportStar(require("../models/IDOrName1"), exports);
__exportStar(require("../models/IDOrName2"), exports);
__exportStar(require("../models/Item"), exports);
__exportStar(require("../models/ItemAttribute"), exports);
__exportStar(require("../models/ItemAttributeList200Response"), exports);
__exportStar(require("../models/ItemCategory"), exports);
__exportStar(require("../models/ItemCategoryList200Response"), exports);
__exportStar(require("../models/ItemFlingEffect"), exports);
__exportStar(require("../models/ItemFlingEffectList200Response"), exports);
__exportStar(require("../models/ItemList200Response"), exports);
__exportStar(require("../models/ItemPocket"), exports);
__exportStar(require("../models/ItemPocketList200Response"), exports);
__exportStar(require("../models/Language"), exports);
__exportStar(require("../models/LanguageList200Response"), exports);
__exportStar(require("../models/Location"), exports);
__exportStar(require("../models/LocationArea"), exports);
__exportStar(require("../models/LocationAreaList200Response"), exports);
__exportStar(require("../models/LocationList200Response"), exports);
__exportStar(require("../models/Machine"), exports);
__exportStar(require("../models/MachineList200Response"), exports);
__exportStar(require("../models/MachineVersionDetail"), exports);
__exportStar(require("../models/Move"), exports);
__exportStar(require("../models/MoveAilment"), exports);
__exportStar(require("../models/MoveAilmentList200Response"), exports);
__exportStar(require("../models/MoveBattleStyle"), exports);
__exportStar(require("../models/MoveBattleStyleList200Response"), exports);
__exportStar(require("../models/MoveBattleStylePreference"), exports);
__exportStar(require("../models/MoveCategory"), exports);
__exportStar(require("../models/MoveCategoryList200Response"), exports);
__exportStar(require("../models/MoveContestEffect"), exports);
__exportStar(require("../models/MoveContestType"), exports);
__exportStar(require("../models/MoveDamageClass"), exports);
__exportStar(require("../models/MoveDamageClassList200Response"), exports);
__exportStar(require("../models/MoveLearnMethod"), exports);
__exportStar(require("../models/MoveLearnMethodList200Response"), exports);
__exportStar(require("../models/MoveList200Response"), exports);
__exportStar(require("../models/MoveMetaData"), exports);
__exportStar(require("../models/MoveStatAffect"), exports);
__exportStar(require("../models/MoveStatAffectSets"), exports);
__exportStar(require("../models/MoveStatChange"), exports);
__exportStar(require("../models/MoveTarget"), exports);
__exportStar(require("../models/MoveTargetList200Response"), exports);
__exportStar(require("../models/Name"), exports);
__exportStar(require("../models/NamedAPIResource"), exports);
__exportStar(require("../models/Nature"), exports);
__exportStar(require("../models/NatureList200Response"), exports);
__exportStar(require("../models/NaturePokeathlonStatAffectSets"), exports);
__exportStar(require("../models/NatureStatAffect"), exports);
__exportStar(require("../models/NatureStatAffectSets"), exports);
__exportStar(require("../models/NatureStatChange"), exports);
__exportStar(require("../models/PalParkArea"), exports);
__exportStar(require("../models/PalParkAreaList200Response"), exports);
__exportStar(require("../models/PalParkEncounterArea"), exports);
__exportStar(require("../models/PastMoveStatValues"), exports);
__exportStar(require("../models/PastMoveStatValuesEffectEntriesInner"), exports);
__exportStar(require("../models/PokeAthlon"), exports);
__exportStar(require("../models/PokeathlonStat"), exports);
__exportStar(require("../models/PokeathlonStatAffect"), exports);
__exportStar(require("../models/PokeathlonStatAffectingNatures"), exports);
__exportStar(require("../models/PokeathlonStatList200Response"), exports);
__exportStar(require("../models/PokeathlonStatName"), exports);
__exportStar(require("../models/Pokedex"), exports);
__exportStar(require("../models/PokedexList200Response"), exports);
__exportStar(require("../models/Pokemon"), exports);
__exportStar(require("../models/PokemonAbility"), exports);
__exportStar(require("../models/PokemonColor"), exports);
__exportStar(require("../models/PokemonColorList200Response"), exports);
__exportStar(require("../models/PokemonEncounter"), exports);
__exportStar(require("../models/PokemonEntry"), exports);
__exportStar(require("../models/PokemonForm"), exports);
__exportStar(require("../models/PokemonFormList200Response"), exports);
__exportStar(require("../models/PokemonHabitat"), exports);
__exportStar(require("../models/PokemonHabitatList200Response"), exports);
__exportStar(require("../models/PokemonHeldItem"), exports);
__exportStar(require("../models/PokemonHeldItemVersionDetailsInner"), exports);
__exportStar(require("../models/PokemonList200Response"), exports);
__exportStar(require("../models/PokemonMove"), exports);
__exportStar(require("../models/PokemonMoveVersionGroupDetailsInner"), exports);
__exportStar(require("../models/PokemonShape"), exports);
__exportStar(require("../models/PokemonShapeList200Response"), exports);
__exportStar(require("../models/PokemonSpecies"), exports);
__exportStar(require("../models/PokemonSpeciesDexEntry"), exports);
__exportStar(require("../models/PokemonSpeciesList200Response"), exports);
__exportStar(require("../models/PokemonSpeciesVariety"), exports);
__exportStar(require("../models/PokemonSprites"), exports);
__exportStar(require("../models/PokemonStat"), exports);
__exportStar(require("../models/PokemonType"), exports);
__exportStar(require("../models/Region"), exports);
__exportStar(require("../models/RegionList200Response"), exports);
__exportStar(require("../models/Stat"), exports);
__exportStar(require("../models/StatList200Response"), exports);
__exportStar(require("../models/SuperContestEffect"), exports);
__exportStar(require("../models/SuperContestEffectList200Response"), exports);
__exportStar(require("../models/Type"), exports);
__exportStar(require("../models/TypeDamageRelations"), exports);
__exportStar(require("../models/TypeDamageRelationsDoubleDamageFromInner"), exports);
__exportStar(require("../models/TypeGameIndicesInner"), exports);
__exportStar(require("../models/TypeGameIndicesInnerGeneration"), exports);
__exportStar(require("../models/TypeGeneration"), exports);
__exportStar(require("../models/TypeList200Response"), exports);
__exportStar(require("../models/TypeMoveDamageClass"), exports);
__exportStar(require("../models/TypePokemonInner"), exports);
__exportStar(require("../models/VerboseEffect"), exports);
__exportStar(require("../models/Version"), exports);
__exportStar(require("../models/VersionGameIndex"), exports);
__exportStar(require("../models/VersionGroup"), exports);
__exportStar(require("../models/VersionGroupList200Response"), exports);
__exportStar(require("../models/VersionList200Response"), exports);
var APIResource_1 = require("../models/APIResource");
var Ability_1 = require("../models/Ability");
var AbilityEffectChange_1 = require("../models/AbilityEffectChange");
var AbilityGeneration_1 = require("../models/AbilityGeneration");
var AbilityList200Response_1 = require("../models/AbilityList200Response");
var AbilityNamesInner_1 = require("../models/AbilityNamesInner");
var AbilityNamesInnerLanguage_1 = require("../models/AbilityNamesInnerLanguage");
var Berry_1 = require("../models/Berry");
var BerryFirmness_1 = require("../models/BerryFirmness");
var BerryFirmnessList200Response_1 = require("../models/BerryFirmnessList200Response");
var BerryFlavor_1 = require("../models/BerryFlavor");
var BerryFlavorList200Response_1 = require("../models/BerryFlavorList200Response");
var BerryFlavorMap_1 = require("../models/BerryFlavorMap");
var Characteristic_1 = require("../models/Characteristic");
var ContestComboDetail_1 = require("../models/ContestComboDetail");
var ContestComboSets_1 = require("../models/ContestComboSets");
var ContestEffect_1 = require("../models/ContestEffect");
var ContestEffectList200Response_1 = require("../models/ContestEffectList200Response");
var ContestName_1 = require("../models/ContestName");
var ContestType_1 = require("../models/ContestType");
var ContestTypeList200Response_1 = require("../models/ContestTypeList200Response");
var Description_1 = require("../models/Description");
var Effect_1 = require("../models/Effect");
var EffectEffect_1 = require("../models/EffectEffect");
var EggGroup_1 = require("../models/EggGroup");
var Encounter_1 = require("../models/Encounter");
var EncounterCondition_1 = require("../models/EncounterCondition");
var EncounterConditionList200Response_1 = require("../models/EncounterConditionList200Response");
var EncounterConditionValue_1 = require("../models/EncounterConditionValue");
var EncounterMethod_1 = require("../models/EncounterMethod");
var EncounterMethodList200Response_1 = require("../models/EncounterMethodList200Response");
var EncounterMethodRate_1 = require("../models/EncounterMethodRate");
var EncounterVersionDetails_1 = require("../models/EncounterVersionDetails");
var EvolutionChain_1 = require("../models/EvolutionChain");
var EvolutionChainBabyTriggerItem_1 = require("../models/EvolutionChainBabyTriggerItem");
var EvolutionChainChain_1 = require("../models/EvolutionChainChain");
var EvolutionChainChainEvolutionDetailsInner_1 = require("../models/EvolutionChainChainEvolutionDetailsInner");
var EvolutionChainChainEvolutionDetailsInnerItem_1 = require("../models/EvolutionChainChainEvolutionDetailsInnerItem");
var EvolutionChainChainEvolutionDetailsInnerKnownMove_1 = require("../models/EvolutionChainChainEvolutionDetailsInnerKnownMove");
var EvolutionChainChainEvolutionDetailsInnerKnownMoveType_1 = require("../models/EvolutionChainChainEvolutionDetailsInnerKnownMoveType");
var EvolutionChainChainEvolutionDetailsInnerLocation_1 = require("../models/EvolutionChainChainEvolutionDetailsInnerLocation");
var EvolutionChainChainEvolutionDetailsInnerPartySpecies_1 = require("../models/EvolutionChainChainEvolutionDetailsInnerPartySpecies");
var EvolutionChainList200Response_1 = require("../models/EvolutionChainList200Response");
var EvolutionTrigger_1 = require("../models/EvolutionTrigger");
var EvolutionTriggerList200Response_1 = require("../models/EvolutionTriggerList200Response");
var FlavorText_1 = require("../models/FlavorText");
var Gender_1 = require("../models/Gender");
var GenderList200Response_1 = require("../models/GenderList200Response");
var GenderPokemonSpeciesDetailsInner_1 = require("../models/GenderPokemonSpeciesDetailsInner");
var Generation_1 = require("../models/Generation");
var GenerationAbilitiesInner_1 = require("../models/GenerationAbilitiesInner");
var GenerationGameIndex_1 = require("../models/GenerationGameIndex");
var GenerationList200Response_1 = require("../models/GenerationList200Response");
var GenerationNamesInner_1 = require("../models/GenerationNamesInner");
var Genus_1 = require("../models/Genus");
var GrowthRate_1 = require("../models/GrowthRate");
var GrowthRateList200Response_1 = require("../models/GrowthRateList200Response");
var IDOrName_1 = require("../models/IDOrName");
var IDOrName1_1 = require("../models/IDOrName1");
var IDOrName2_1 = require("../models/IDOrName2");
var Item_1 = require("../models/Item");
var ItemAttribute_1 = require("../models/ItemAttribute");
var ItemAttributeList200Response_1 = require("../models/ItemAttributeList200Response");
var ItemCategory_1 = require("../models/ItemCategory");
var ItemCategoryList200Response_1 = require("../models/ItemCategoryList200Response");
var ItemFlingEffect_1 = require("../models/ItemFlingEffect");
var ItemFlingEffectList200Response_1 = require("../models/ItemFlingEffectList200Response");
var ItemList200Response_1 = require("../models/ItemList200Response");
var ItemPocket_1 = require("../models/ItemPocket");
var ItemPocketList200Response_1 = require("../models/ItemPocketList200Response");
var Language_1 = require("../models/Language");
var LanguageList200Response_1 = require("../models/LanguageList200Response");
var Location_1 = require("../models/Location");
var LocationArea_1 = require("../models/LocationArea");
var LocationAreaList200Response_1 = require("../models/LocationAreaList200Response");
var LocationList200Response_1 = require("../models/LocationList200Response");
var Machine_1 = require("../models/Machine");
var MachineList200Response_1 = require("../models/MachineList200Response");
var MachineVersionDetail_1 = require("../models/MachineVersionDetail");
var Move_1 = require("../models/Move");
var MoveAilment_1 = require("../models/MoveAilment");
var MoveAilmentList200Response_1 = require("../models/MoveAilmentList200Response");
var MoveBattleStyle_1 = require("../models/MoveBattleStyle");
var MoveBattleStyleList200Response_1 = require("../models/MoveBattleStyleList200Response");
var MoveBattleStylePreference_1 = require("../models/MoveBattleStylePreference");
var MoveCategory_1 = require("../models/MoveCategory");
var MoveCategoryList200Response_1 = require("../models/MoveCategoryList200Response");
var MoveContestEffect_1 = require("../models/MoveContestEffect");
var MoveContestType_1 = require("../models/MoveContestType");
var MoveDamageClass_1 = require("../models/MoveDamageClass");
var MoveDamageClassList200Response_1 = require("../models/MoveDamageClassList200Response");
var MoveLearnMethod_1 = require("../models/MoveLearnMethod");
var MoveLearnMethodList200Response_1 = require("../models/MoveLearnMethodList200Response");
var MoveList200Response_1 = require("../models/MoveList200Response");
var MoveMetaData_1 = require("../models/MoveMetaData");
var MoveStatAffect_1 = require("../models/MoveStatAffect");
var MoveStatAffectSets_1 = require("../models/MoveStatAffectSets");
var MoveStatChange_1 = require("../models/MoveStatChange");
var MoveTarget_1 = require("../models/MoveTarget");
var MoveTargetList200Response_1 = require("../models/MoveTargetList200Response");
var Name_1 = require("../models/Name");
var NamedAPIResource_1 = require("../models/NamedAPIResource");
var Nature_1 = require("../models/Nature");
var NatureList200Response_1 = require("../models/NatureList200Response");
var NaturePokeathlonStatAffectSets_1 = require("../models/NaturePokeathlonStatAffectSets");
var NatureStatAffect_1 = require("../models/NatureStatAffect");
var NatureStatAffectSets_1 = require("../models/NatureStatAffectSets");
var NatureStatChange_1 = require("../models/NatureStatChange");
var PalParkArea_1 = require("../models/PalParkArea");
var PalParkAreaList200Response_1 = require("../models/PalParkAreaList200Response");
var PalParkEncounterArea_1 = require("../models/PalParkEncounterArea");
var PastMoveStatValues_1 = require("../models/PastMoveStatValues");
var PastMoveStatValuesEffectEntriesInner_1 = require("../models/PastMoveStatValuesEffectEntriesInner");
var PokeAthlon_1 = require("../models/PokeAthlon");
var PokeathlonStat_1 = require("../models/PokeathlonStat");
var PokeathlonStatAffect_1 = require("../models/PokeathlonStatAffect");
var PokeathlonStatAffectingNatures_1 = require("../models/PokeathlonStatAffectingNatures");
var PokeathlonStatList200Response_1 = require("../models/PokeathlonStatList200Response");
var PokeathlonStatName_1 = require("../models/PokeathlonStatName");
var Pokedex_1 = require("../models/Pokedex");
var PokedexList200Response_1 = require("../models/PokedexList200Response");
var Pokemon_1 = require("../models/Pokemon");
var PokemonAbility_1 = require("../models/PokemonAbility");
var PokemonColor_1 = require("../models/PokemonColor");
var PokemonColorList200Response_1 = require("../models/PokemonColorList200Response");
var PokemonEncounter_1 = require("../models/PokemonEncounter");
var PokemonEntry_1 = require("../models/PokemonEntry");
var PokemonForm_1 = require("../models/PokemonForm");
var PokemonFormList200Response_1 = require("../models/PokemonFormList200Response");
var PokemonHabitat_1 = require("../models/PokemonHabitat");
var PokemonHabitatList200Response_1 = require("../models/PokemonHabitatList200Response");
var PokemonHeldItem_1 = require("../models/PokemonHeldItem");
var PokemonHeldItemVersionDetailsInner_1 = require("../models/PokemonHeldItemVersionDetailsInner");
var PokemonList200Response_1 = require("../models/PokemonList200Response");
var PokemonMove_1 = require("../models/PokemonMove");
var PokemonMoveVersionGroupDetailsInner_1 = require("../models/PokemonMoveVersionGroupDetailsInner");
var PokemonShape_1 = require("../models/PokemonShape");
var PokemonShapeList200Response_1 = require("../models/PokemonShapeList200Response");
var PokemonSpecies_1 = require("../models/PokemonSpecies");
var PokemonSpeciesDexEntry_1 = require("../models/PokemonSpeciesDexEntry");
var PokemonSpeciesList200Response_1 = require("../models/PokemonSpeciesList200Response");
var PokemonSpeciesVariety_1 = require("../models/PokemonSpeciesVariety");
var PokemonSprites_1 = require("../models/PokemonSprites");
var PokemonStat_1 = require("../models/PokemonStat");
var PokemonType_1 = require("../models/PokemonType");
var Region_1 = require("../models/Region");
var RegionList200Response_1 = require("../models/RegionList200Response");
var Stat_1 = require("../models/Stat");
var StatList200Response_1 = require("../models/StatList200Response");
var SuperContestEffect_1 = require("../models/SuperContestEffect");
var SuperContestEffectList200Response_1 = require("../models/SuperContestEffectList200Response");
var Type_1 = require("../models/Type");
var TypeDamageRelations_1 = require("../models/TypeDamageRelations");
var TypeDamageRelationsDoubleDamageFromInner_1 = require("../models/TypeDamageRelationsDoubleDamageFromInner");
var TypeGameIndicesInner_1 = require("../models/TypeGameIndicesInner");
var TypeGameIndicesInnerGeneration_1 = require("../models/TypeGameIndicesInnerGeneration");
var TypeGeneration_1 = require("../models/TypeGeneration");
var TypeList200Response_1 = require("../models/TypeList200Response");
var TypeMoveDamageClass_1 = require("../models/TypeMoveDamageClass");
var TypePokemonInner_1 = require("../models/TypePokemonInner");
var VerboseEffect_1 = require("../models/VerboseEffect");
var Version_1 = require("../models/Version");
var VersionGameIndex_1 = require("../models/VersionGameIndex");
var VersionGroup_1 = require("../models/VersionGroup");
var VersionGroupList200Response_1 = require("../models/VersionGroupList200Response");
var VersionList200Response_1 = require("../models/VersionList200Response");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = new Set([
    "EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum",
]);
var typeMap = {
    "APIResource": APIResource_1.APIResource,
    "Ability": Ability_1.Ability,
    "AbilityEffectChange": AbilityEffectChange_1.AbilityEffectChange,
    "AbilityGeneration": AbilityGeneration_1.AbilityGeneration,
    "AbilityList200Response": AbilityList200Response_1.AbilityList200Response,
    "AbilityNamesInner": AbilityNamesInner_1.AbilityNamesInner,
    "AbilityNamesInnerLanguage": AbilityNamesInnerLanguage_1.AbilityNamesInnerLanguage,
    "Berry": Berry_1.Berry,
    "BerryFirmness": BerryFirmness_1.BerryFirmness,
    "BerryFirmnessList200Response": BerryFirmnessList200Response_1.BerryFirmnessList200Response,
    "BerryFlavor": BerryFlavor_1.BerryFlavor,
    "BerryFlavorList200Response": BerryFlavorList200Response_1.BerryFlavorList200Response,
    "BerryFlavorMap": BerryFlavorMap_1.BerryFlavorMap,
    "Characteristic": Characteristic_1.Characteristic,
    "ContestComboDetail": ContestComboDetail_1.ContestComboDetail,
    "ContestComboSets": ContestComboSets_1.ContestComboSets,
    "ContestEffect": ContestEffect_1.ContestEffect,
    "ContestEffectList200Response": ContestEffectList200Response_1.ContestEffectList200Response,
    "ContestName": ContestName_1.ContestName,
    "ContestType": ContestType_1.ContestType,
    "ContestTypeList200Response": ContestTypeList200Response_1.ContestTypeList200Response,
    "Description": Description_1.Description,
    "Effect": Effect_1.Effect,
    "EffectEffect": EffectEffect_1.EffectEffect,
    "EggGroup": EggGroup_1.EggGroup,
    "Encounter": Encounter_1.Encounter,
    "EncounterCondition": EncounterCondition_1.EncounterCondition,
    "EncounterConditionList200Response": EncounterConditionList200Response_1.EncounterConditionList200Response,
    "EncounterConditionValue": EncounterConditionValue_1.EncounterConditionValue,
    "EncounterMethod": EncounterMethod_1.EncounterMethod,
    "EncounterMethodList200Response": EncounterMethodList200Response_1.EncounterMethodList200Response,
    "EncounterMethodRate": EncounterMethodRate_1.EncounterMethodRate,
    "EncounterVersionDetails": EncounterVersionDetails_1.EncounterVersionDetails,
    "EvolutionChain": EvolutionChain_1.EvolutionChain,
    "EvolutionChainBabyTriggerItem": EvolutionChainBabyTriggerItem_1.EvolutionChainBabyTriggerItem,
    "EvolutionChainChain": EvolutionChainChain_1.EvolutionChainChain,
    "EvolutionChainChainEvolutionDetailsInner": EvolutionChainChainEvolutionDetailsInner_1.EvolutionChainChainEvolutionDetailsInner,
    "EvolutionChainChainEvolutionDetailsInnerItem": EvolutionChainChainEvolutionDetailsInnerItem_1.EvolutionChainChainEvolutionDetailsInnerItem,
    "EvolutionChainChainEvolutionDetailsInnerKnownMove": EvolutionChainChainEvolutionDetailsInnerKnownMove_1.EvolutionChainChainEvolutionDetailsInnerKnownMove,
    "EvolutionChainChainEvolutionDetailsInnerKnownMoveType": EvolutionChainChainEvolutionDetailsInnerKnownMoveType_1.EvolutionChainChainEvolutionDetailsInnerKnownMoveType,
    "EvolutionChainChainEvolutionDetailsInnerLocation": EvolutionChainChainEvolutionDetailsInnerLocation_1.EvolutionChainChainEvolutionDetailsInnerLocation,
    "EvolutionChainChainEvolutionDetailsInnerPartySpecies": EvolutionChainChainEvolutionDetailsInnerPartySpecies_1.EvolutionChainChainEvolutionDetailsInnerPartySpecies,
    "EvolutionChainList200Response": EvolutionChainList200Response_1.EvolutionChainList200Response,
    "EvolutionTrigger": EvolutionTrigger_1.EvolutionTrigger,
    "EvolutionTriggerList200Response": EvolutionTriggerList200Response_1.EvolutionTriggerList200Response,
    "FlavorText": FlavorText_1.FlavorText,
    "Gender": Gender_1.Gender,
    "GenderList200Response": GenderList200Response_1.GenderList200Response,
    "GenderPokemonSpeciesDetailsInner": GenderPokemonSpeciesDetailsInner_1.GenderPokemonSpeciesDetailsInner,
    "Generation": Generation_1.Generation,
    "GenerationAbilitiesInner": GenerationAbilitiesInner_1.GenerationAbilitiesInner,
    "GenerationGameIndex": GenerationGameIndex_1.GenerationGameIndex,
    "GenerationList200Response": GenerationList200Response_1.GenerationList200Response,
    "GenerationNamesInner": GenerationNamesInner_1.GenerationNamesInner,
    "Genus": Genus_1.Genus,
    "GrowthRate": GrowthRate_1.GrowthRate,
    "GrowthRateList200Response": GrowthRateList200Response_1.GrowthRateList200Response,
    "IDOrName": IDOrName_1.IDOrName,
    "IDOrName1": IDOrName1_1.IDOrName1,
    "IDOrName2": IDOrName2_1.IDOrName2,
    "Item": Item_1.Item,
    "ItemAttribute": ItemAttribute_1.ItemAttribute,
    "ItemAttributeList200Response": ItemAttributeList200Response_1.ItemAttributeList200Response,
    "ItemCategory": ItemCategory_1.ItemCategory,
    "ItemCategoryList200Response": ItemCategoryList200Response_1.ItemCategoryList200Response,
    "ItemFlingEffect": ItemFlingEffect_1.ItemFlingEffect,
    "ItemFlingEffectList200Response": ItemFlingEffectList200Response_1.ItemFlingEffectList200Response,
    "ItemList200Response": ItemList200Response_1.ItemList200Response,
    "ItemPocket": ItemPocket_1.ItemPocket,
    "ItemPocketList200Response": ItemPocketList200Response_1.ItemPocketList200Response,
    "Language": Language_1.Language,
    "LanguageList200Response": LanguageList200Response_1.LanguageList200Response,
    "Location": Location_1.Location,
    "LocationArea": LocationArea_1.LocationArea,
    "LocationAreaList200Response": LocationAreaList200Response_1.LocationAreaList200Response,
    "LocationList200Response": LocationList200Response_1.LocationList200Response,
    "Machine": Machine_1.Machine,
    "MachineList200Response": MachineList200Response_1.MachineList200Response,
    "MachineVersionDetail": MachineVersionDetail_1.MachineVersionDetail,
    "Move": Move_1.Move,
    "MoveAilment": MoveAilment_1.MoveAilment,
    "MoveAilmentList200Response": MoveAilmentList200Response_1.MoveAilmentList200Response,
    "MoveBattleStyle": MoveBattleStyle_1.MoveBattleStyle,
    "MoveBattleStyleList200Response": MoveBattleStyleList200Response_1.MoveBattleStyleList200Response,
    "MoveBattleStylePreference": MoveBattleStylePreference_1.MoveBattleStylePreference,
    "MoveCategory": MoveCategory_1.MoveCategory,
    "MoveCategoryList200Response": MoveCategoryList200Response_1.MoveCategoryList200Response,
    "MoveContestEffect": MoveContestEffect_1.MoveContestEffect,
    "MoveContestType": MoveContestType_1.MoveContestType,
    "MoveDamageClass": MoveDamageClass_1.MoveDamageClass,
    "MoveDamageClassList200Response": MoveDamageClassList200Response_1.MoveDamageClassList200Response,
    "MoveLearnMethod": MoveLearnMethod_1.MoveLearnMethod,
    "MoveLearnMethodList200Response": MoveLearnMethodList200Response_1.MoveLearnMethodList200Response,
    "MoveList200Response": MoveList200Response_1.MoveList200Response,
    "MoveMetaData": MoveMetaData_1.MoveMetaData,
    "MoveStatAffect": MoveStatAffect_1.MoveStatAffect,
    "MoveStatAffectSets": MoveStatAffectSets_1.MoveStatAffectSets,
    "MoveStatChange": MoveStatChange_1.MoveStatChange,
    "MoveTarget": MoveTarget_1.MoveTarget,
    "MoveTargetList200Response": MoveTargetList200Response_1.MoveTargetList200Response,
    "Name": Name_1.Name,
    "NamedAPIResource": NamedAPIResource_1.NamedAPIResource,
    "Nature": Nature_1.Nature,
    "NatureList200Response": NatureList200Response_1.NatureList200Response,
    "NaturePokeathlonStatAffectSets": NaturePokeathlonStatAffectSets_1.NaturePokeathlonStatAffectSets,
    "NatureStatAffect": NatureStatAffect_1.NatureStatAffect,
    "NatureStatAffectSets": NatureStatAffectSets_1.NatureStatAffectSets,
    "NatureStatChange": NatureStatChange_1.NatureStatChange,
    "PalParkArea": PalParkArea_1.PalParkArea,
    "PalParkAreaList200Response": PalParkAreaList200Response_1.PalParkAreaList200Response,
    "PalParkEncounterArea": PalParkEncounterArea_1.PalParkEncounterArea,
    "PastMoveStatValues": PastMoveStatValues_1.PastMoveStatValues,
    "PastMoveStatValuesEffectEntriesInner": PastMoveStatValuesEffectEntriesInner_1.PastMoveStatValuesEffectEntriesInner,
    "PokeAthlon": PokeAthlon_1.PokeAthlon,
    "PokeathlonStat": PokeathlonStat_1.PokeathlonStat,
    "PokeathlonStatAffect": PokeathlonStatAffect_1.PokeathlonStatAffect,
    "PokeathlonStatAffectingNatures": PokeathlonStatAffectingNatures_1.PokeathlonStatAffectingNatures,
    "PokeathlonStatList200Response": PokeathlonStatList200Response_1.PokeathlonStatList200Response,
    "PokeathlonStatName": PokeathlonStatName_1.PokeathlonStatName,
    "Pokedex": Pokedex_1.Pokedex,
    "PokedexList200Response": PokedexList200Response_1.PokedexList200Response,
    "Pokemon": Pokemon_1.Pokemon,
    "PokemonAbility": PokemonAbility_1.PokemonAbility,
    "PokemonColor": PokemonColor_1.PokemonColor,
    "PokemonColorList200Response": PokemonColorList200Response_1.PokemonColorList200Response,
    "PokemonEncounter": PokemonEncounter_1.PokemonEncounter,
    "PokemonEntry": PokemonEntry_1.PokemonEntry,
    "PokemonForm": PokemonForm_1.PokemonForm,
    "PokemonFormList200Response": PokemonFormList200Response_1.PokemonFormList200Response,
    "PokemonHabitat": PokemonHabitat_1.PokemonHabitat,
    "PokemonHabitatList200Response": PokemonHabitatList200Response_1.PokemonHabitatList200Response,
    "PokemonHeldItem": PokemonHeldItem_1.PokemonHeldItem,
    "PokemonHeldItemVersionDetailsInner": PokemonHeldItemVersionDetailsInner_1.PokemonHeldItemVersionDetailsInner,
    "PokemonList200Response": PokemonList200Response_1.PokemonList200Response,
    "PokemonMove": PokemonMove_1.PokemonMove,
    "PokemonMoveVersionGroupDetailsInner": PokemonMoveVersionGroupDetailsInner_1.PokemonMoveVersionGroupDetailsInner,
    "PokemonShape": PokemonShape_1.PokemonShape,
    "PokemonShapeList200Response": PokemonShapeList200Response_1.PokemonShapeList200Response,
    "PokemonSpecies": PokemonSpecies_1.PokemonSpecies,
    "PokemonSpeciesDexEntry": PokemonSpeciesDexEntry_1.PokemonSpeciesDexEntry,
    "PokemonSpeciesList200Response": PokemonSpeciesList200Response_1.PokemonSpeciesList200Response,
    "PokemonSpeciesVariety": PokemonSpeciesVariety_1.PokemonSpeciesVariety,
    "PokemonSprites": PokemonSprites_1.PokemonSprites,
    "PokemonStat": PokemonStat_1.PokemonStat,
    "PokemonType": PokemonType_1.PokemonType,
    "Region": Region_1.Region,
    "RegionList200Response": RegionList200Response_1.RegionList200Response,
    "Stat": Stat_1.Stat,
    "StatList200Response": StatList200Response_1.StatList200Response,
    "SuperContestEffect": SuperContestEffect_1.SuperContestEffect,
    "SuperContestEffectList200Response": SuperContestEffectList200Response_1.SuperContestEffectList200Response,
    "Type": Type_1.Type,
    "TypeDamageRelations": TypeDamageRelations_1.TypeDamageRelations,
    "TypeDamageRelationsDoubleDamageFromInner": TypeDamageRelationsDoubleDamageFromInner_1.TypeDamageRelationsDoubleDamageFromInner,
    "TypeGameIndicesInner": TypeGameIndicesInner_1.TypeGameIndicesInner,
    "TypeGameIndicesInnerGeneration": TypeGameIndicesInnerGeneration_1.TypeGameIndicesInnerGeneration,
    "TypeGeneration": TypeGeneration_1.TypeGeneration,
    "TypeList200Response": TypeList200Response_1.TypeList200Response,
    "TypeMoveDamageClass": TypeMoveDamageClass_1.TypeMoveDamageClass,
    "TypePokemonInner": TypePokemonInner_1.TypePokemonInner,
    "VerboseEffect": VerboseEffect_1.VerboseEffect,
    "Version": Version_1.Version,
    "VersionGameIndex": VersionGameIndex_1.VersionGameIndex,
    "VersionGroup": VersionGroup_1.VersionGroup,
    "VersionGroupList200Response": VersionGroupList200Response_1.VersionGroupList200Response,
    "VersionList200Response": VersionList200Response_1.VersionList200Response,
};
var parseMimeType = function (mimeType) {
    var _a = mimeType.split('/'), type = _a[0], subtype = _a[1];
    return {
        type: type,
        subtype: subtype,
        subtypeTokens: subtype.split('+'),
    };
};
var mimeTypePredicateFactory = function (predicate) { return function (mimeType) { return predicate(parseMimeType(mimeType)); }; };
var mimeTypeSimplePredicateFactory = function (type, subtype) { return mimeTypePredicateFactory(function (descriptor) {
    if (descriptor.type !== type)
        return false;
    if (subtype != null && descriptor.subtype !== subtype)
        return false;
    return true;
}); };
var isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
var isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
var isJsonLikeMimeType = mimeTypePredicateFactory(function (descriptor) { return descriptor.type === 'application' && descriptor.subtypeTokens.some(function (item) { return item === 'json'; }); });
var isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
var isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');
var supportedMimeTypePredicatesWithPriority = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var _a = 0, attributeTypes_1 = attributeTypes; _a < attributeTypes_1.length; _a++) {
                var attributeType = attributeTypes_1[_a];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var _a = 0, attributeTypes_2 = attributeTypes; _a < attributeTypes_2.length; _a++) {
                var attributeType = attributeTypes_2[_a];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (mediaTypes.length === 0) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        for (var _i = 0, supportedMimeTypePredicatesWithPriority_1 = supportedMimeTypePredicatesWithPriority; _i < supportedMimeTypePredicatesWithPriority_1.length; _i++) {
            var predicate = supportedMimeTypePredicatesWithPriority_1[_i];
            for (var _a = 0, normalMediaTypes_1 = normalMediaTypes; _a < normalMediaTypes_1.length; _a++) {
                var mediaType = normalMediaTypes_1[_a];
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }
        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map