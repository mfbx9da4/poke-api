"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectVersionGroupApi = exports.ObjectVersionApi = exports.ObjectTypeApi = exports.ObjectSuperContestEffectApi = exports.ObjectStatApi = exports.ObjectRegionApi = exports.ObjectPokemonSpeciesApi = exports.ObjectPokemonShapeApi = exports.ObjectPokemonHabitatApi = exports.ObjectPokemonFormApi = exports.ObjectPokemonColorApi = exports.ObjectPokemonApi = exports.ObjectPokedexApi = exports.ObjectPokeathlonStatApi = exports.ObjectPalParkAreaApi = exports.ObjectNatureApi = exports.ObjectMoveTargetApi = exports.ObjectMoveLearnMethodApi = exports.ObjectMoveDamageClassApi = exports.ObjectMoveCategoryApi = exports.ObjectMoveBattleStyleApi = exports.ObjectMoveAilmentApi = exports.ObjectMoveApi = exports.ObjectMachineApi = exports.ObjectLocationAreaApi = exports.ObjectLocationApi = exports.ObjectLanguageApi = exports.ObjectItemPocketApi = exports.ObjectItemFlingEffectApi = exports.ObjectItemCategoryApi = exports.ObjectItemAttributeApi = exports.ObjectItemApi = exports.ObjectGrowthRateApi = exports.ObjectGenerationApi = exports.ObjectGenderApi = exports.ObjectEvolutionTriggerApi = exports.ObjectEvolutionChainApi = exports.ObjectEncounterMethodApi = exports.ObjectEncounterConditionValueApi = exports.ObjectEncounterConditionApi = exports.ObjectEggGroupApi = exports.ObjectContestTypeApi = exports.ObjectContestEffectApi = exports.ObjectCharacteristicApi = exports.ObjectBerryFlavorApi = exports.ObjectBerryFirmnessApi = exports.ObjectBerryApi = exports.ObjectAbilityApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAbilityApi = (function () {
    function ObjectAbilityApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAbilityApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAbilityApi.prototype.abilityListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.abilityListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectAbilityApi.prototype.abilityList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.abilityList(param.limit, param.offset, options).toPromise();
    };
    ObjectAbilityApi.prototype.abilityReadWithHttpInfo = function (param, options) {
        return this.api.abilityReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAbilityApi.prototype.abilityRead = function (param, options) {
        return this.api.abilityRead(param.id, options).toPromise();
    };
    return ObjectAbilityApi;
}());
exports.ObjectAbilityApi = ObjectAbilityApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectBerryApi = (function () {
    function ObjectBerryApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableBerryApi(configuration, requestFactory, responseProcessor);
    }
    ObjectBerryApi.prototype.berryListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.berryListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectBerryApi.prototype.berryList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.berryList(param.limit, param.offset, options).toPromise();
    };
    ObjectBerryApi.prototype.berryReadWithHttpInfo = function (param, options) {
        return this.api.berryReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectBerryApi.prototype.berryRead = function (param, options) {
        return this.api.berryRead(param.id, options).toPromise();
    };
    return ObjectBerryApi;
}());
exports.ObjectBerryApi = ObjectBerryApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectBerryFirmnessApi = (function () {
    function ObjectBerryFirmnessApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableBerryFirmnessApi(configuration, requestFactory, responseProcessor);
    }
    ObjectBerryFirmnessApi.prototype.berryFirmnessListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.berryFirmnessListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectBerryFirmnessApi.prototype.berryFirmnessList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.berryFirmnessList(param.limit, param.offset, options).toPromise();
    };
    ObjectBerryFirmnessApi.prototype.berryFirmnessReadWithHttpInfo = function (param, options) {
        return this.api.berryFirmnessReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectBerryFirmnessApi.prototype.berryFirmnessRead = function (param, options) {
        return this.api.berryFirmnessRead(param.id, options).toPromise();
    };
    return ObjectBerryFirmnessApi;
}());
exports.ObjectBerryFirmnessApi = ObjectBerryFirmnessApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectBerryFlavorApi = (function () {
    function ObjectBerryFlavorApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableBerryFlavorApi(configuration, requestFactory, responseProcessor);
    }
    ObjectBerryFlavorApi.prototype.berryFlavorListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.berryFlavorListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectBerryFlavorApi.prototype.berryFlavorList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.berryFlavorList(param.limit, param.offset, options).toPromise();
    };
    ObjectBerryFlavorApi.prototype.berryFlavorReadWithHttpInfo = function (param, options) {
        return this.api.berryFlavorReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectBerryFlavorApi.prototype.berryFlavorRead = function (param, options) {
        return this.api.berryFlavorRead(param.id, options).toPromise();
    };
    return ObjectBerryFlavorApi;
}());
exports.ObjectBerryFlavorApi = ObjectBerryFlavorApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectCharacteristicApi = (function () {
    function ObjectCharacteristicApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableCharacteristicApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCharacteristicApi.prototype.characteristicListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.characteristicListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectCharacteristicApi.prototype.characteristicList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.characteristicList(param.limit, param.offset, options).toPromise();
    };
    ObjectCharacteristicApi.prototype.characteristicReadWithHttpInfo = function (param, options) {
        return this.api.characteristicReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectCharacteristicApi.prototype.characteristicRead = function (param, options) {
        return this.api.characteristicRead(param.id, options).toPromise();
    };
    return ObjectCharacteristicApi;
}());
exports.ObjectCharacteristicApi = ObjectCharacteristicApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectContestEffectApi = (function () {
    function ObjectContestEffectApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableContestEffectApi(configuration, requestFactory, responseProcessor);
    }
    ObjectContestEffectApi.prototype.contestEffectListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.contestEffectListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectContestEffectApi.prototype.contestEffectList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.contestEffectList(param.limit, param.offset, options).toPromise();
    };
    ObjectContestEffectApi.prototype.contestEffectReadWithHttpInfo = function (param, options) {
        return this.api.contestEffectReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectContestEffectApi.prototype.contestEffectRead = function (param, options) {
        return this.api.contestEffectRead(param.id, options).toPromise();
    };
    return ObjectContestEffectApi;
}());
exports.ObjectContestEffectApi = ObjectContestEffectApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectContestTypeApi = (function () {
    function ObjectContestTypeApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableContestTypeApi(configuration, requestFactory, responseProcessor);
    }
    ObjectContestTypeApi.prototype.contestTypeListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.contestTypeListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectContestTypeApi.prototype.contestTypeList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.contestTypeList(param.limit, param.offset, options).toPromise();
    };
    ObjectContestTypeApi.prototype.contestTypeReadWithHttpInfo = function (param, options) {
        return this.api.contestTypeReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectContestTypeApi.prototype.contestTypeRead = function (param, options) {
        return this.api.contestTypeRead(param.id, options).toPromise();
    };
    return ObjectContestTypeApi;
}());
exports.ObjectContestTypeApi = ObjectContestTypeApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectEggGroupApi = (function () {
    function ObjectEggGroupApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableEggGroupApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEggGroupApi.prototype.eggGroupListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.eggGroupListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectEggGroupApi.prototype.eggGroupList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.eggGroupList(param.limit, param.offset, options).toPromise();
    };
    ObjectEggGroupApi.prototype.eggGroupReadWithHttpInfo = function (param, options) {
        return this.api.eggGroupReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectEggGroupApi.prototype.eggGroupRead = function (param, options) {
        return this.api.eggGroupRead(param.id, options).toPromise();
    };
    return ObjectEggGroupApi;
}());
exports.ObjectEggGroupApi = ObjectEggGroupApi;
var ObservableAPI_9 = require("./ObservableAPI");
var ObjectEncounterConditionApi = (function () {
    function ObjectEncounterConditionApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableEncounterConditionApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEncounterConditionApi.prototype.encounterConditionListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.encounterConditionListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectEncounterConditionApi.prototype.encounterConditionList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.encounterConditionList(param.limit, param.offset, options).toPromise();
    };
    ObjectEncounterConditionApi.prototype.encounterConditionReadWithHttpInfo = function (param, options) {
        return this.api.encounterConditionReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectEncounterConditionApi.prototype.encounterConditionRead = function (param, options) {
        return this.api.encounterConditionRead(param.id, options).toPromise();
    };
    return ObjectEncounterConditionApi;
}());
exports.ObjectEncounterConditionApi = ObjectEncounterConditionApi;
var ObservableAPI_10 = require("./ObservableAPI");
var ObjectEncounterConditionValueApi = (function () {
    function ObjectEncounterConditionValueApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableEncounterConditionValueApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEncounterConditionValueApi.prototype.encounterConditionValueListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.encounterConditionValueListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectEncounterConditionValueApi.prototype.encounterConditionValueList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.encounterConditionValueList(param.limit, param.offset, options).toPromise();
    };
    ObjectEncounterConditionValueApi.prototype.encounterConditionValueReadWithHttpInfo = function (param, options) {
        return this.api.encounterConditionValueReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectEncounterConditionValueApi.prototype.encounterConditionValueRead = function (param, options) {
        return this.api.encounterConditionValueRead(param.id, options).toPromise();
    };
    return ObjectEncounterConditionValueApi;
}());
exports.ObjectEncounterConditionValueApi = ObjectEncounterConditionValueApi;
var ObservableAPI_11 = require("./ObservableAPI");
var ObjectEncounterMethodApi = (function () {
    function ObjectEncounterMethodApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableEncounterMethodApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEncounterMethodApi.prototype.encounterMethodListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.encounterMethodListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectEncounterMethodApi.prototype.encounterMethodList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.encounterMethodList(param.limit, param.offset, options).toPromise();
    };
    ObjectEncounterMethodApi.prototype.encounterMethodReadWithHttpInfo = function (param, options) {
        return this.api.encounterMethodReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectEncounterMethodApi.prototype.encounterMethodRead = function (param, options) {
        return this.api.encounterMethodRead(param.id, options).toPromise();
    };
    return ObjectEncounterMethodApi;
}());
exports.ObjectEncounterMethodApi = ObjectEncounterMethodApi;
var ObservableAPI_12 = require("./ObservableAPI");
var ObjectEvolutionChainApi = (function () {
    function ObjectEvolutionChainApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableEvolutionChainApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEvolutionChainApi.prototype.evolutionChainListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.evolutionChainListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectEvolutionChainApi.prototype.evolutionChainList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.evolutionChainList(param.limit, param.offset, options).toPromise();
    };
    ObjectEvolutionChainApi.prototype.evolutionChainReadWithHttpInfo = function (param, options) {
        return this.api.evolutionChainReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectEvolutionChainApi.prototype.evolutionChainRead = function (param, options) {
        return this.api.evolutionChainRead(param.id, options).toPromise();
    };
    return ObjectEvolutionChainApi;
}());
exports.ObjectEvolutionChainApi = ObjectEvolutionChainApi;
var ObservableAPI_13 = require("./ObservableAPI");
var ObjectEvolutionTriggerApi = (function () {
    function ObjectEvolutionTriggerApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableEvolutionTriggerApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEvolutionTriggerApi.prototype.evolutionTriggerListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.evolutionTriggerListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectEvolutionTriggerApi.prototype.evolutionTriggerList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.evolutionTriggerList(param.limit, param.offset, options).toPromise();
    };
    ObjectEvolutionTriggerApi.prototype.evolutionTriggerReadWithHttpInfo = function (param, options) {
        return this.api.evolutionTriggerReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectEvolutionTriggerApi.prototype.evolutionTriggerRead = function (param, options) {
        return this.api.evolutionTriggerRead(param.id, options).toPromise();
    };
    return ObjectEvolutionTriggerApi;
}());
exports.ObjectEvolutionTriggerApi = ObjectEvolutionTriggerApi;
var ObservableAPI_14 = require("./ObservableAPI");
var ObjectGenderApi = (function () {
    function ObjectGenderApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableGenderApi(configuration, requestFactory, responseProcessor);
    }
    ObjectGenderApi.prototype.genderListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.genderListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectGenderApi.prototype.genderList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.genderList(param.limit, param.offset, options).toPromise();
    };
    ObjectGenderApi.prototype.genderReadWithHttpInfo = function (param, options) {
        return this.api.genderReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectGenderApi.prototype.genderRead = function (param, options) {
        return this.api.genderRead(param.id, options).toPromise();
    };
    return ObjectGenderApi;
}());
exports.ObjectGenderApi = ObjectGenderApi;
var ObservableAPI_15 = require("./ObservableAPI");
var ObjectGenerationApi = (function () {
    function ObjectGenerationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableGenerationApi(configuration, requestFactory, responseProcessor);
    }
    ObjectGenerationApi.prototype.generationListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.generationListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectGenerationApi.prototype.generationList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.generationList(param.limit, param.offset, options).toPromise();
    };
    ObjectGenerationApi.prototype.generationReadWithHttpInfo = function (param, options) {
        return this.api.generationReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectGenerationApi.prototype.generationRead = function (param, options) {
        return this.api.generationRead(param.id, options).toPromise();
    };
    return ObjectGenerationApi;
}());
exports.ObjectGenerationApi = ObjectGenerationApi;
var ObservableAPI_16 = require("./ObservableAPI");
var ObjectGrowthRateApi = (function () {
    function ObjectGrowthRateApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableGrowthRateApi(configuration, requestFactory, responseProcessor);
    }
    ObjectGrowthRateApi.prototype.growthRateListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.growthRateListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectGrowthRateApi.prototype.growthRateList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.growthRateList(param.limit, param.offset, options).toPromise();
    };
    ObjectGrowthRateApi.prototype.growthRateReadWithHttpInfo = function (param, options) {
        return this.api.growthRateReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectGrowthRateApi.prototype.growthRateRead = function (param, options) {
        return this.api.growthRateRead(param.id, options).toPromise();
    };
    return ObjectGrowthRateApi;
}());
exports.ObjectGrowthRateApi = ObjectGrowthRateApi;
var ObservableAPI_17 = require("./ObservableAPI");
var ObjectItemApi = (function () {
    function ObjectItemApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableItemApi(configuration, requestFactory, responseProcessor);
    }
    ObjectItemApi.prototype.itemListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.itemListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectItemApi.prototype.itemList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.itemList(param.limit, param.offset, options).toPromise();
    };
    ObjectItemApi.prototype.itemReadWithHttpInfo = function (param, options) {
        return this.api.itemReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectItemApi.prototype.itemRead = function (param, options) {
        return this.api.itemRead(param.id, options).toPromise();
    };
    return ObjectItemApi;
}());
exports.ObjectItemApi = ObjectItemApi;
var ObservableAPI_18 = require("./ObservableAPI");
var ObjectItemAttributeApi = (function () {
    function ObjectItemAttributeApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableItemAttributeApi(configuration, requestFactory, responseProcessor);
    }
    ObjectItemAttributeApi.prototype.itemAttributeListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.itemAttributeListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectItemAttributeApi.prototype.itemAttributeList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.itemAttributeList(param.limit, param.offset, options).toPromise();
    };
    ObjectItemAttributeApi.prototype.itemAttributeReadWithHttpInfo = function (param, options) {
        return this.api.itemAttributeReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectItemAttributeApi.prototype.itemAttributeRead = function (param, options) {
        return this.api.itemAttributeRead(param.id, options).toPromise();
    };
    return ObjectItemAttributeApi;
}());
exports.ObjectItemAttributeApi = ObjectItemAttributeApi;
var ObservableAPI_19 = require("./ObservableAPI");
var ObjectItemCategoryApi = (function () {
    function ObjectItemCategoryApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableItemCategoryApi(configuration, requestFactory, responseProcessor);
    }
    ObjectItemCategoryApi.prototype.itemCategoryListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.itemCategoryListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectItemCategoryApi.prototype.itemCategoryList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.itemCategoryList(param.limit, param.offset, options).toPromise();
    };
    ObjectItemCategoryApi.prototype.itemCategoryReadWithHttpInfo = function (param, options) {
        return this.api.itemCategoryReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectItemCategoryApi.prototype.itemCategoryRead = function (param, options) {
        return this.api.itemCategoryRead(param.id, options).toPromise();
    };
    return ObjectItemCategoryApi;
}());
exports.ObjectItemCategoryApi = ObjectItemCategoryApi;
var ObservableAPI_20 = require("./ObservableAPI");
var ObjectItemFlingEffectApi = (function () {
    function ObjectItemFlingEffectApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservableItemFlingEffectApi(configuration, requestFactory, responseProcessor);
    }
    ObjectItemFlingEffectApi.prototype.itemFlingEffectListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.itemFlingEffectListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectItemFlingEffectApi.prototype.itemFlingEffectList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.itemFlingEffectList(param.limit, param.offset, options).toPromise();
    };
    ObjectItemFlingEffectApi.prototype.itemFlingEffectReadWithHttpInfo = function (param, options) {
        return this.api.itemFlingEffectReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectItemFlingEffectApi.prototype.itemFlingEffectRead = function (param, options) {
        return this.api.itemFlingEffectRead(param.id, options).toPromise();
    };
    return ObjectItemFlingEffectApi;
}());
exports.ObjectItemFlingEffectApi = ObjectItemFlingEffectApi;
var ObservableAPI_21 = require("./ObservableAPI");
var ObjectItemPocketApi = (function () {
    function ObjectItemPocketApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservableItemPocketApi(configuration, requestFactory, responseProcessor);
    }
    ObjectItemPocketApi.prototype.itemPocketListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.itemPocketListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectItemPocketApi.prototype.itemPocketList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.itemPocketList(param.limit, param.offset, options).toPromise();
    };
    ObjectItemPocketApi.prototype.itemPocketReadWithHttpInfo = function (param, options) {
        return this.api.itemPocketReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectItemPocketApi.prototype.itemPocketRead = function (param, options) {
        return this.api.itemPocketRead(param.id, options).toPromise();
    };
    return ObjectItemPocketApi;
}());
exports.ObjectItemPocketApi = ObjectItemPocketApi;
var ObservableAPI_22 = require("./ObservableAPI");
var ObjectLanguageApi = (function () {
    function ObjectLanguageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableLanguageApi(configuration, requestFactory, responseProcessor);
    }
    ObjectLanguageApi.prototype.languageListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.languageListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectLanguageApi.prototype.languageList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.languageList(param.limit, param.offset, options).toPromise();
    };
    ObjectLanguageApi.prototype.languageReadWithHttpInfo = function (param, options) {
        return this.api.languageReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectLanguageApi.prototype.languageRead = function (param, options) {
        return this.api.languageRead(param.id, options).toPromise();
    };
    return ObjectLanguageApi;
}());
exports.ObjectLanguageApi = ObjectLanguageApi;
var ObservableAPI_23 = require("./ObservableAPI");
var ObjectLocationApi = (function () {
    function ObjectLocationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_23.ObservableLocationApi(configuration, requestFactory, responseProcessor);
    }
    ObjectLocationApi.prototype.locationListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.locationListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectLocationApi.prototype.locationList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.locationList(param.limit, param.offset, options).toPromise();
    };
    ObjectLocationApi.prototype.locationReadWithHttpInfo = function (param, options) {
        return this.api.locationReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectLocationApi.prototype.locationRead = function (param, options) {
        return this.api.locationRead(param.id, options).toPromise();
    };
    return ObjectLocationApi;
}());
exports.ObjectLocationApi = ObjectLocationApi;
var ObservableAPI_24 = require("./ObservableAPI");
var ObjectLocationAreaApi = (function () {
    function ObjectLocationAreaApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_24.ObservableLocationAreaApi(configuration, requestFactory, responseProcessor);
    }
    ObjectLocationAreaApi.prototype.locationAreaListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.locationAreaListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectLocationAreaApi.prototype.locationAreaList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.locationAreaList(param.limit, param.offset, options).toPromise();
    };
    ObjectLocationAreaApi.prototype.locationAreaReadWithHttpInfo = function (param, options) {
        return this.api.locationAreaReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectLocationAreaApi.prototype.locationAreaRead = function (param, options) {
        return this.api.locationAreaRead(param.id, options).toPromise();
    };
    return ObjectLocationAreaApi;
}());
exports.ObjectLocationAreaApi = ObjectLocationAreaApi;
var ObservableAPI_25 = require("./ObservableAPI");
var ObjectMachineApi = (function () {
    function ObjectMachineApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_25.ObservableMachineApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMachineApi.prototype.machineListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.machineListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectMachineApi.prototype.machineList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.machineList(param.limit, param.offset, options).toPromise();
    };
    ObjectMachineApi.prototype.machineReadWithHttpInfo = function (param, options) {
        return this.api.machineReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectMachineApi.prototype.machineRead = function (param, options) {
        return this.api.machineRead(param.id, options).toPromise();
    };
    return ObjectMachineApi;
}());
exports.ObjectMachineApi = ObjectMachineApi;
var ObservableAPI_26 = require("./ObservableAPI");
var ObjectMoveApi = (function () {
    function ObjectMoveApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_26.ObservableMoveApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMoveApi.prototype.moveListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveApi.prototype.moveList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveList(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveApi.prototype.moveReadWithHttpInfo = function (param, options) {
        return this.api.moveReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectMoveApi.prototype.moveRead = function (param, options) {
        return this.api.moveRead(param.id, options).toPromise();
    };
    return ObjectMoveApi;
}());
exports.ObjectMoveApi = ObjectMoveApi;
var ObservableAPI_27 = require("./ObservableAPI");
var ObjectMoveAilmentApi = (function () {
    function ObjectMoveAilmentApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_27.ObservableMoveAilmentApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMoveAilmentApi.prototype.moveAilmentListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveAilmentListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveAilmentApi.prototype.moveAilmentList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveAilmentList(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveAilmentApi.prototype.moveAilmentReadWithHttpInfo = function (param, options) {
        return this.api.moveAilmentReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectMoveAilmentApi.prototype.moveAilmentRead = function (param, options) {
        return this.api.moveAilmentRead(param.id, options).toPromise();
    };
    return ObjectMoveAilmentApi;
}());
exports.ObjectMoveAilmentApi = ObjectMoveAilmentApi;
var ObservableAPI_28 = require("./ObservableAPI");
var ObjectMoveBattleStyleApi = (function () {
    function ObjectMoveBattleStyleApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_28.ObservableMoveBattleStyleApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMoveBattleStyleApi.prototype.moveBattleStyleListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveBattleStyleListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveBattleStyleApi.prototype.moveBattleStyleList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveBattleStyleList(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveBattleStyleApi.prototype.moveBattleStyleReadWithHttpInfo = function (param, options) {
        return this.api.moveBattleStyleReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectMoveBattleStyleApi.prototype.moveBattleStyleRead = function (param, options) {
        return this.api.moveBattleStyleRead(param.id, options).toPromise();
    };
    return ObjectMoveBattleStyleApi;
}());
exports.ObjectMoveBattleStyleApi = ObjectMoveBattleStyleApi;
var ObservableAPI_29 = require("./ObservableAPI");
var ObjectMoveCategoryApi = (function () {
    function ObjectMoveCategoryApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_29.ObservableMoveCategoryApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMoveCategoryApi.prototype.moveCategoryListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveCategoryListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveCategoryApi.prototype.moveCategoryList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveCategoryList(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveCategoryApi.prototype.moveCategoryReadWithHttpInfo = function (param, options) {
        return this.api.moveCategoryReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectMoveCategoryApi.prototype.moveCategoryRead = function (param, options) {
        return this.api.moveCategoryRead(param.id, options).toPromise();
    };
    return ObjectMoveCategoryApi;
}());
exports.ObjectMoveCategoryApi = ObjectMoveCategoryApi;
var ObservableAPI_30 = require("./ObservableAPI");
var ObjectMoveDamageClassApi = (function () {
    function ObjectMoveDamageClassApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_30.ObservableMoveDamageClassApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMoveDamageClassApi.prototype.moveDamageClassListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveDamageClassListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveDamageClassApi.prototype.moveDamageClassList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveDamageClassList(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveDamageClassApi.prototype.moveDamageClassReadWithHttpInfo = function (param, options) {
        return this.api.moveDamageClassReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectMoveDamageClassApi.prototype.moveDamageClassRead = function (param, options) {
        return this.api.moveDamageClassRead(param.id, options).toPromise();
    };
    return ObjectMoveDamageClassApi;
}());
exports.ObjectMoveDamageClassApi = ObjectMoveDamageClassApi;
var ObservableAPI_31 = require("./ObservableAPI");
var ObjectMoveLearnMethodApi = (function () {
    function ObjectMoveLearnMethodApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_31.ObservableMoveLearnMethodApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMoveLearnMethodApi.prototype.moveLearnMethodListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveLearnMethodListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveLearnMethodApi.prototype.moveLearnMethodList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveLearnMethodList(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveLearnMethodApi.prototype.moveLearnMethodReadWithHttpInfo = function (param, options) {
        return this.api.moveLearnMethodReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectMoveLearnMethodApi.prototype.moveLearnMethodRead = function (param, options) {
        return this.api.moveLearnMethodRead(param.id, options).toPromise();
    };
    return ObjectMoveLearnMethodApi;
}());
exports.ObjectMoveLearnMethodApi = ObjectMoveLearnMethodApi;
var ObservableAPI_32 = require("./ObservableAPI");
var ObjectMoveTargetApi = (function () {
    function ObjectMoveTargetApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_32.ObservableMoveTargetApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMoveTargetApi.prototype.moveTargetListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveTargetListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveTargetApi.prototype.moveTargetList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.moveTargetList(param.limit, param.offset, options).toPromise();
    };
    ObjectMoveTargetApi.prototype.moveTargetReadWithHttpInfo = function (param, options) {
        return this.api.moveTargetReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectMoveTargetApi.prototype.moveTargetRead = function (param, options) {
        return this.api.moveTargetRead(param.id, options).toPromise();
    };
    return ObjectMoveTargetApi;
}());
exports.ObjectMoveTargetApi = ObjectMoveTargetApi;
var ObservableAPI_33 = require("./ObservableAPI");
var ObjectNatureApi = (function () {
    function ObjectNatureApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_33.ObservableNatureApi(configuration, requestFactory, responseProcessor);
    }
    ObjectNatureApi.prototype.natureListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.natureListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectNatureApi.prototype.natureList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.natureList(param.limit, param.offset, options).toPromise();
    };
    ObjectNatureApi.prototype.natureReadWithHttpInfo = function (param, options) {
        return this.api.natureReadWithHttpInfo(param.idOrName, options).toPromise();
    };
    ObjectNatureApi.prototype.natureRead = function (param, options) {
        return this.api.natureRead(param.idOrName, options).toPromise();
    };
    return ObjectNatureApi;
}());
exports.ObjectNatureApi = ObjectNatureApi;
var ObservableAPI_34 = require("./ObservableAPI");
var ObjectPalParkAreaApi = (function () {
    function ObjectPalParkAreaApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_34.ObservablePalParkAreaApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPalParkAreaApi.prototype.palParkAreaListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.palParkAreaListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectPalParkAreaApi.prototype.palParkAreaList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.palParkAreaList(param.limit, param.offset, options).toPromise();
    };
    ObjectPalParkAreaApi.prototype.palParkAreaReadWithHttpInfo = function (param, options) {
        return this.api.palParkAreaReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectPalParkAreaApi.prototype.palParkAreaRead = function (param, options) {
        return this.api.palParkAreaRead(param.id, options).toPromise();
    };
    return ObjectPalParkAreaApi;
}());
exports.ObjectPalParkAreaApi = ObjectPalParkAreaApi;
var ObservableAPI_35 = require("./ObservableAPI");
var ObjectPokeathlonStatApi = (function () {
    function ObjectPokeathlonStatApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_35.ObservablePokeathlonStatApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPokeathlonStatApi.prototype.pokeathlonStatListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokeathlonStatListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectPokeathlonStatApi.prototype.pokeathlonStatList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokeathlonStatList(param.limit, param.offset, options).toPromise();
    };
    ObjectPokeathlonStatApi.prototype.pokeathlonStatReadWithHttpInfo = function (param, options) {
        return this.api.pokeathlonStatReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectPokeathlonStatApi.prototype.pokeathlonStatRead = function (param, options) {
        return this.api.pokeathlonStatRead(param.id, options).toPromise();
    };
    return ObjectPokeathlonStatApi;
}());
exports.ObjectPokeathlonStatApi = ObjectPokeathlonStatApi;
var ObservableAPI_36 = require("./ObservableAPI");
var ObjectPokedexApi = (function () {
    function ObjectPokedexApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_36.ObservablePokedexApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPokedexApi.prototype.pokedexListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokedexListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectPokedexApi.prototype.pokedexList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokedexList(param.limit, param.offset, options).toPromise();
    };
    ObjectPokedexApi.prototype.pokedexReadWithHttpInfo = function (param, options) {
        return this.api.pokedexReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectPokedexApi.prototype.pokedexRead = function (param, options) {
        return this.api.pokedexRead(param.id, options).toPromise();
    };
    return ObjectPokedexApi;
}());
exports.ObjectPokedexApi = ObjectPokedexApi;
var ObservableAPI_37 = require("./ObservableAPI");
var ObjectPokemonApi = (function () {
    function ObjectPokemonApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_37.ObservablePokemonApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPokemonApi.prototype.pokemonListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonApi.prototype.pokemonList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonList(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonApi.prototype.pokemonReadWithHttpInfo = function (param, options) {
        return this.api.pokemonReadWithHttpInfo(param.idOrName, options).toPromise();
    };
    ObjectPokemonApi.prototype.pokemonRead = function (param, options) {
        return this.api.pokemonRead(param.idOrName, options).toPromise();
    };
    return ObjectPokemonApi;
}());
exports.ObjectPokemonApi = ObjectPokemonApi;
var ObservableAPI_38 = require("./ObservableAPI");
var ObjectPokemonColorApi = (function () {
    function ObjectPokemonColorApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_38.ObservablePokemonColorApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPokemonColorApi.prototype.pokemonColorListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonColorListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonColorApi.prototype.pokemonColorList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonColorList(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonColorApi.prototype.pokemonColorReadWithHttpInfo = function (param, options) {
        return this.api.pokemonColorReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectPokemonColorApi.prototype.pokemonColorRead = function (param, options) {
        return this.api.pokemonColorRead(param.id, options).toPromise();
    };
    return ObjectPokemonColorApi;
}());
exports.ObjectPokemonColorApi = ObjectPokemonColorApi;
var ObservableAPI_39 = require("./ObservableAPI");
var ObjectPokemonFormApi = (function () {
    function ObjectPokemonFormApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_39.ObservablePokemonFormApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPokemonFormApi.prototype.pokemonFormListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonFormListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonFormApi.prototype.pokemonFormList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonFormList(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonFormApi.prototype.pokemonFormReadWithHttpInfo = function (param, options) {
        return this.api.pokemonFormReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectPokemonFormApi.prototype.pokemonFormRead = function (param, options) {
        return this.api.pokemonFormRead(param.id, options).toPromise();
    };
    return ObjectPokemonFormApi;
}());
exports.ObjectPokemonFormApi = ObjectPokemonFormApi;
var ObservableAPI_40 = require("./ObservableAPI");
var ObjectPokemonHabitatApi = (function () {
    function ObjectPokemonHabitatApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_40.ObservablePokemonHabitatApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPokemonHabitatApi.prototype.pokemonHabitatListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonHabitatListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonHabitatApi.prototype.pokemonHabitatList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonHabitatList(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonHabitatApi.prototype.pokemonHabitatReadWithHttpInfo = function (param, options) {
        return this.api.pokemonHabitatReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectPokemonHabitatApi.prototype.pokemonHabitatRead = function (param, options) {
        return this.api.pokemonHabitatRead(param.id, options).toPromise();
    };
    return ObjectPokemonHabitatApi;
}());
exports.ObjectPokemonHabitatApi = ObjectPokemonHabitatApi;
var ObservableAPI_41 = require("./ObservableAPI");
var ObjectPokemonShapeApi = (function () {
    function ObjectPokemonShapeApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_41.ObservablePokemonShapeApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPokemonShapeApi.prototype.pokemonShapeListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonShapeListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonShapeApi.prototype.pokemonShapeList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonShapeList(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonShapeApi.prototype.pokemonShapeReadWithHttpInfo = function (param, options) {
        return this.api.pokemonShapeReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectPokemonShapeApi.prototype.pokemonShapeRead = function (param, options) {
        return this.api.pokemonShapeRead(param.id, options).toPromise();
    };
    return ObjectPokemonShapeApi;
}());
exports.ObjectPokemonShapeApi = ObjectPokemonShapeApi;
var ObservableAPI_42 = require("./ObservableAPI");
var ObjectPokemonSpeciesApi = (function () {
    function ObjectPokemonSpeciesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_42.ObservablePokemonSpeciesApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPokemonSpeciesApi.prototype.pokemonSpeciesListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonSpeciesListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonSpeciesApi.prototype.pokemonSpeciesList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.pokemonSpeciesList(param.limit, param.offset, options).toPromise();
    };
    ObjectPokemonSpeciesApi.prototype.pokemonSpeciesReadWithHttpInfo = function (param, options) {
        return this.api.pokemonSpeciesReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectPokemonSpeciesApi.prototype.pokemonSpeciesRead = function (param, options) {
        return this.api.pokemonSpeciesRead(param.id, options).toPromise();
    };
    return ObjectPokemonSpeciesApi;
}());
exports.ObjectPokemonSpeciesApi = ObjectPokemonSpeciesApi;
var ObservableAPI_43 = require("./ObservableAPI");
var ObjectRegionApi = (function () {
    function ObjectRegionApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_43.ObservableRegionApi(configuration, requestFactory, responseProcessor);
    }
    ObjectRegionApi.prototype.regionListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.regionListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectRegionApi.prototype.regionList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.regionList(param.limit, param.offset, options).toPromise();
    };
    ObjectRegionApi.prototype.regionReadWithHttpInfo = function (param, options) {
        return this.api.regionReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectRegionApi.prototype.regionRead = function (param, options) {
        return this.api.regionRead(param.id, options).toPromise();
    };
    return ObjectRegionApi;
}());
exports.ObjectRegionApi = ObjectRegionApi;
var ObservableAPI_44 = require("./ObservableAPI");
var ObjectStatApi = (function () {
    function ObjectStatApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_44.ObservableStatApi(configuration, requestFactory, responseProcessor);
    }
    ObjectStatApi.prototype.statListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.statListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectStatApi.prototype.statList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.statList(param.limit, param.offset, options).toPromise();
    };
    ObjectStatApi.prototype.statReadWithHttpInfo = function (param, options) {
        return this.api.statReadWithHttpInfo(param.idOrName, options).toPromise();
    };
    ObjectStatApi.prototype.statRead = function (param, options) {
        return this.api.statRead(param.idOrName, options).toPromise();
    };
    return ObjectStatApi;
}());
exports.ObjectStatApi = ObjectStatApi;
var ObservableAPI_45 = require("./ObservableAPI");
var ObjectSuperContestEffectApi = (function () {
    function ObjectSuperContestEffectApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_45.ObservableSuperContestEffectApi(configuration, requestFactory, responseProcessor);
    }
    ObjectSuperContestEffectApi.prototype.superContestEffectListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.superContestEffectListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectSuperContestEffectApi.prototype.superContestEffectList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.superContestEffectList(param.limit, param.offset, options).toPromise();
    };
    ObjectSuperContestEffectApi.prototype.superContestEffectReadWithHttpInfo = function (param, options) {
        return this.api.superContestEffectReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectSuperContestEffectApi.prototype.superContestEffectRead = function (param, options) {
        return this.api.superContestEffectRead(param.id, options).toPromise();
    };
    return ObjectSuperContestEffectApi;
}());
exports.ObjectSuperContestEffectApi = ObjectSuperContestEffectApi;
var ObservableAPI_46 = require("./ObservableAPI");
var ObjectTypeApi = (function () {
    function ObjectTypeApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_46.ObservableTypeApi(configuration, requestFactory, responseProcessor);
    }
    ObjectTypeApi.prototype.typeListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.typeListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectTypeApi.prototype.typeList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.typeList(param.limit, param.offset, options).toPromise();
    };
    ObjectTypeApi.prototype.typeReadWithHttpInfo = function (param, options) {
        return this.api.typeReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectTypeApi.prototype.typeRead = function (param, options) {
        return this.api.typeRead(param.id, options).toPromise();
    };
    return ObjectTypeApi;
}());
exports.ObjectTypeApi = ObjectTypeApi;
var ObservableAPI_47 = require("./ObservableAPI");
var ObjectVersionApi = (function () {
    function ObjectVersionApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_47.ObservableVersionApi(configuration, requestFactory, responseProcessor);
    }
    ObjectVersionApi.prototype.versionListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.versionListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectVersionApi.prototype.versionList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.versionList(param.limit, param.offset, options).toPromise();
    };
    ObjectVersionApi.prototype.versionReadWithHttpInfo = function (param, options) {
        return this.api.versionReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectVersionApi.prototype.versionRead = function (param, options) {
        return this.api.versionRead(param.id, options).toPromise();
    };
    return ObjectVersionApi;
}());
exports.ObjectVersionApi = ObjectVersionApi;
var ObservableAPI_48 = require("./ObservableAPI");
var ObjectVersionGroupApi = (function () {
    function ObjectVersionGroupApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_48.ObservableVersionGroupApi(configuration, requestFactory, responseProcessor);
    }
    ObjectVersionGroupApi.prototype.versionGroupListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.versionGroupListWithHttpInfo(param.limit, param.offset, options).toPromise();
    };
    ObjectVersionGroupApi.prototype.versionGroupList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.versionGroupList(param.limit, param.offset, options).toPromise();
    };
    ObjectVersionGroupApi.prototype.versionGroupReadWithHttpInfo = function (param, options) {
        return this.api.versionGroupReadWithHttpInfo(param.id, options).toPromise();
    };
    ObjectVersionGroupApi.prototype.versionGroupRead = function (param, options) {
        return this.api.versionGroupRead(param.id, options).toPromise();
    };
    return ObjectVersionGroupApi;
}());
exports.ObjectVersionGroupApi = ObjectVersionGroupApi;
//# sourceMappingURL=ObjectParamAPI.js.map