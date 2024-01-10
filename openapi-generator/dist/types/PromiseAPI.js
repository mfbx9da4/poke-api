"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseVersionGroupApi = exports.PromiseVersionApi = exports.PromiseTypeApi = exports.PromiseSuperContestEffectApi = exports.PromiseStatApi = exports.PromiseRegionApi = exports.PromisePokemonSpeciesApi = exports.PromisePokemonShapeApi = exports.PromisePokemonHabitatApi = exports.PromisePokemonFormApi = exports.PromisePokemonColorApi = exports.PromisePokemonApi = exports.PromisePokedexApi = exports.PromisePokeathlonStatApi = exports.PromisePalParkAreaApi = exports.PromiseNatureApi = exports.PromiseMoveTargetApi = exports.PromiseMoveLearnMethodApi = exports.PromiseMoveDamageClassApi = exports.PromiseMoveCategoryApi = exports.PromiseMoveBattleStyleApi = exports.PromiseMoveAilmentApi = exports.PromiseMoveApi = exports.PromiseMachineApi = exports.PromiseLocationAreaApi = exports.PromiseLocationApi = exports.PromiseLanguageApi = exports.PromiseItemPocketApi = exports.PromiseItemFlingEffectApi = exports.PromiseItemCategoryApi = exports.PromiseItemAttributeApi = exports.PromiseItemApi = exports.PromiseGrowthRateApi = exports.PromiseGenerationApi = exports.PromiseGenderApi = exports.PromiseEvolutionTriggerApi = exports.PromiseEvolutionChainApi = exports.PromiseEncounterMethodApi = exports.PromiseEncounterConditionValueApi = exports.PromiseEncounterConditionApi = exports.PromiseEggGroupApi = exports.PromiseContestTypeApi = exports.PromiseContestEffectApi = exports.PromiseCharacteristicApi = exports.PromiseBerryFlavorApi = exports.PromiseBerryFirmnessApi = exports.PromiseBerryApi = exports.PromiseAbilityApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAbilityApi = (function () {
    function PromiseAbilityApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAbilityApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAbilityApi.prototype.abilityListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.abilityListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseAbilityApi.prototype.abilityList = function (limit, offset, _options) {
        var result = this.api.abilityList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseAbilityApi.prototype.abilityReadWithHttpInfo = function (id, _options) {
        var result = this.api.abilityReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseAbilityApi.prototype.abilityRead = function (id, _options) {
        var result = this.api.abilityRead(id, _options);
        return result.toPromise();
    };
    return PromiseAbilityApi;
}());
exports.PromiseAbilityApi = PromiseAbilityApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseBerryApi = (function () {
    function PromiseBerryApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableBerryApi(configuration, requestFactory, responseProcessor);
    }
    PromiseBerryApi.prototype.berryListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.berryListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseBerryApi.prototype.berryList = function (limit, offset, _options) {
        var result = this.api.berryList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseBerryApi.prototype.berryReadWithHttpInfo = function (id, _options) {
        var result = this.api.berryReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseBerryApi.prototype.berryRead = function (id, _options) {
        var result = this.api.berryRead(id, _options);
        return result.toPromise();
    };
    return PromiseBerryApi;
}());
exports.PromiseBerryApi = PromiseBerryApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseBerryFirmnessApi = (function () {
    function PromiseBerryFirmnessApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableBerryFirmnessApi(configuration, requestFactory, responseProcessor);
    }
    PromiseBerryFirmnessApi.prototype.berryFirmnessListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.berryFirmnessListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseBerryFirmnessApi.prototype.berryFirmnessList = function (limit, offset, _options) {
        var result = this.api.berryFirmnessList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseBerryFirmnessApi.prototype.berryFirmnessReadWithHttpInfo = function (id, _options) {
        var result = this.api.berryFirmnessReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseBerryFirmnessApi.prototype.berryFirmnessRead = function (id, _options) {
        var result = this.api.berryFirmnessRead(id, _options);
        return result.toPromise();
    };
    return PromiseBerryFirmnessApi;
}());
exports.PromiseBerryFirmnessApi = PromiseBerryFirmnessApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseBerryFlavorApi = (function () {
    function PromiseBerryFlavorApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableBerryFlavorApi(configuration, requestFactory, responseProcessor);
    }
    PromiseBerryFlavorApi.prototype.berryFlavorListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.berryFlavorListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseBerryFlavorApi.prototype.berryFlavorList = function (limit, offset, _options) {
        var result = this.api.berryFlavorList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseBerryFlavorApi.prototype.berryFlavorReadWithHttpInfo = function (id, _options) {
        var result = this.api.berryFlavorReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseBerryFlavorApi.prototype.berryFlavorRead = function (id, _options) {
        var result = this.api.berryFlavorRead(id, _options);
        return result.toPromise();
    };
    return PromiseBerryFlavorApi;
}());
exports.PromiseBerryFlavorApi = PromiseBerryFlavorApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseCharacteristicApi = (function () {
    function PromiseCharacteristicApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableCharacteristicApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCharacteristicApi.prototype.characteristicListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.characteristicListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseCharacteristicApi.prototype.characteristicList = function (limit, offset, _options) {
        var result = this.api.characteristicList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseCharacteristicApi.prototype.characteristicReadWithHttpInfo = function (id, _options) {
        var result = this.api.characteristicReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseCharacteristicApi.prototype.characteristicRead = function (id, _options) {
        var result = this.api.characteristicRead(id, _options);
        return result.toPromise();
    };
    return PromiseCharacteristicApi;
}());
exports.PromiseCharacteristicApi = PromiseCharacteristicApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseContestEffectApi = (function () {
    function PromiseContestEffectApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableContestEffectApi(configuration, requestFactory, responseProcessor);
    }
    PromiseContestEffectApi.prototype.contestEffectListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.contestEffectListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseContestEffectApi.prototype.contestEffectList = function (limit, offset, _options) {
        var result = this.api.contestEffectList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseContestEffectApi.prototype.contestEffectReadWithHttpInfo = function (id, _options) {
        var result = this.api.contestEffectReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseContestEffectApi.prototype.contestEffectRead = function (id, _options) {
        var result = this.api.contestEffectRead(id, _options);
        return result.toPromise();
    };
    return PromiseContestEffectApi;
}());
exports.PromiseContestEffectApi = PromiseContestEffectApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseContestTypeApi = (function () {
    function PromiseContestTypeApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableContestTypeApi(configuration, requestFactory, responseProcessor);
    }
    PromiseContestTypeApi.prototype.contestTypeListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.contestTypeListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseContestTypeApi.prototype.contestTypeList = function (limit, offset, _options) {
        var result = this.api.contestTypeList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseContestTypeApi.prototype.contestTypeReadWithHttpInfo = function (id, _options) {
        var result = this.api.contestTypeReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseContestTypeApi.prototype.contestTypeRead = function (id, _options) {
        var result = this.api.contestTypeRead(id, _options);
        return result.toPromise();
    };
    return PromiseContestTypeApi;
}());
exports.PromiseContestTypeApi = PromiseContestTypeApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromiseEggGroupApi = (function () {
    function PromiseEggGroupApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableEggGroupApi(configuration, requestFactory, responseProcessor);
    }
    PromiseEggGroupApi.prototype.eggGroupListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.eggGroupListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEggGroupApi.prototype.eggGroupList = function (limit, offset, _options) {
        var result = this.api.eggGroupList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEggGroupApi.prototype.eggGroupReadWithHttpInfo = function (id, _options) {
        var result = this.api.eggGroupReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseEggGroupApi.prototype.eggGroupRead = function (id, _options) {
        var result = this.api.eggGroupRead(id, _options);
        return result.toPromise();
    };
    return PromiseEggGroupApi;
}());
exports.PromiseEggGroupApi = PromiseEggGroupApi;
var ObservableAPI_9 = require("./ObservableAPI");
var PromiseEncounterConditionApi = (function () {
    function PromiseEncounterConditionApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableEncounterConditionApi(configuration, requestFactory, responseProcessor);
    }
    PromiseEncounterConditionApi.prototype.encounterConditionListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.encounterConditionListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEncounterConditionApi.prototype.encounterConditionList = function (limit, offset, _options) {
        var result = this.api.encounterConditionList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEncounterConditionApi.prototype.encounterConditionReadWithHttpInfo = function (id, _options) {
        var result = this.api.encounterConditionReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseEncounterConditionApi.prototype.encounterConditionRead = function (id, _options) {
        var result = this.api.encounterConditionRead(id, _options);
        return result.toPromise();
    };
    return PromiseEncounterConditionApi;
}());
exports.PromiseEncounterConditionApi = PromiseEncounterConditionApi;
var ObservableAPI_10 = require("./ObservableAPI");
var PromiseEncounterConditionValueApi = (function () {
    function PromiseEncounterConditionValueApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableEncounterConditionValueApi(configuration, requestFactory, responseProcessor);
    }
    PromiseEncounterConditionValueApi.prototype.encounterConditionValueListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.encounterConditionValueListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEncounterConditionValueApi.prototype.encounterConditionValueList = function (limit, offset, _options) {
        var result = this.api.encounterConditionValueList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEncounterConditionValueApi.prototype.encounterConditionValueReadWithHttpInfo = function (id, _options) {
        var result = this.api.encounterConditionValueReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseEncounterConditionValueApi.prototype.encounterConditionValueRead = function (id, _options) {
        var result = this.api.encounterConditionValueRead(id, _options);
        return result.toPromise();
    };
    return PromiseEncounterConditionValueApi;
}());
exports.PromiseEncounterConditionValueApi = PromiseEncounterConditionValueApi;
var ObservableAPI_11 = require("./ObservableAPI");
var PromiseEncounterMethodApi = (function () {
    function PromiseEncounterMethodApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableEncounterMethodApi(configuration, requestFactory, responseProcessor);
    }
    PromiseEncounterMethodApi.prototype.encounterMethodListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.encounterMethodListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEncounterMethodApi.prototype.encounterMethodList = function (limit, offset, _options) {
        var result = this.api.encounterMethodList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEncounterMethodApi.prototype.encounterMethodReadWithHttpInfo = function (id, _options) {
        var result = this.api.encounterMethodReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseEncounterMethodApi.prototype.encounterMethodRead = function (id, _options) {
        var result = this.api.encounterMethodRead(id, _options);
        return result.toPromise();
    };
    return PromiseEncounterMethodApi;
}());
exports.PromiseEncounterMethodApi = PromiseEncounterMethodApi;
var ObservableAPI_12 = require("./ObservableAPI");
var PromiseEvolutionChainApi = (function () {
    function PromiseEvolutionChainApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableEvolutionChainApi(configuration, requestFactory, responseProcessor);
    }
    PromiseEvolutionChainApi.prototype.evolutionChainListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.evolutionChainListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEvolutionChainApi.prototype.evolutionChainList = function (limit, offset, _options) {
        var result = this.api.evolutionChainList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEvolutionChainApi.prototype.evolutionChainReadWithHttpInfo = function (id, _options) {
        var result = this.api.evolutionChainReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseEvolutionChainApi.prototype.evolutionChainRead = function (id, _options) {
        var result = this.api.evolutionChainRead(id, _options);
        return result.toPromise();
    };
    return PromiseEvolutionChainApi;
}());
exports.PromiseEvolutionChainApi = PromiseEvolutionChainApi;
var ObservableAPI_13 = require("./ObservableAPI");
var PromiseEvolutionTriggerApi = (function () {
    function PromiseEvolutionTriggerApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableEvolutionTriggerApi(configuration, requestFactory, responseProcessor);
    }
    PromiseEvolutionTriggerApi.prototype.evolutionTriggerListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.evolutionTriggerListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEvolutionTriggerApi.prototype.evolutionTriggerList = function (limit, offset, _options) {
        var result = this.api.evolutionTriggerList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseEvolutionTriggerApi.prototype.evolutionTriggerReadWithHttpInfo = function (id, _options) {
        var result = this.api.evolutionTriggerReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseEvolutionTriggerApi.prototype.evolutionTriggerRead = function (id, _options) {
        var result = this.api.evolutionTriggerRead(id, _options);
        return result.toPromise();
    };
    return PromiseEvolutionTriggerApi;
}());
exports.PromiseEvolutionTriggerApi = PromiseEvolutionTriggerApi;
var ObservableAPI_14 = require("./ObservableAPI");
var PromiseGenderApi = (function () {
    function PromiseGenderApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableGenderApi(configuration, requestFactory, responseProcessor);
    }
    PromiseGenderApi.prototype.genderListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.genderListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseGenderApi.prototype.genderList = function (limit, offset, _options) {
        var result = this.api.genderList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseGenderApi.prototype.genderReadWithHttpInfo = function (id, _options) {
        var result = this.api.genderReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseGenderApi.prototype.genderRead = function (id, _options) {
        var result = this.api.genderRead(id, _options);
        return result.toPromise();
    };
    return PromiseGenderApi;
}());
exports.PromiseGenderApi = PromiseGenderApi;
var ObservableAPI_15 = require("./ObservableAPI");
var PromiseGenerationApi = (function () {
    function PromiseGenerationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableGenerationApi(configuration, requestFactory, responseProcessor);
    }
    PromiseGenerationApi.prototype.generationListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.generationListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseGenerationApi.prototype.generationList = function (limit, offset, _options) {
        var result = this.api.generationList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseGenerationApi.prototype.generationReadWithHttpInfo = function (id, _options) {
        var result = this.api.generationReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseGenerationApi.prototype.generationRead = function (id, _options) {
        var result = this.api.generationRead(id, _options);
        return result.toPromise();
    };
    return PromiseGenerationApi;
}());
exports.PromiseGenerationApi = PromiseGenerationApi;
var ObservableAPI_16 = require("./ObservableAPI");
var PromiseGrowthRateApi = (function () {
    function PromiseGrowthRateApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableGrowthRateApi(configuration, requestFactory, responseProcessor);
    }
    PromiseGrowthRateApi.prototype.growthRateListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.growthRateListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseGrowthRateApi.prototype.growthRateList = function (limit, offset, _options) {
        var result = this.api.growthRateList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseGrowthRateApi.prototype.growthRateReadWithHttpInfo = function (id, _options) {
        var result = this.api.growthRateReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseGrowthRateApi.prototype.growthRateRead = function (id, _options) {
        var result = this.api.growthRateRead(id, _options);
        return result.toPromise();
    };
    return PromiseGrowthRateApi;
}());
exports.PromiseGrowthRateApi = PromiseGrowthRateApi;
var ObservableAPI_17 = require("./ObservableAPI");
var PromiseItemApi = (function () {
    function PromiseItemApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableItemApi(configuration, requestFactory, responseProcessor);
    }
    PromiseItemApi.prototype.itemListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.itemListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseItemApi.prototype.itemList = function (limit, offset, _options) {
        var result = this.api.itemList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseItemApi.prototype.itemReadWithHttpInfo = function (id, _options) {
        var result = this.api.itemReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseItemApi.prototype.itemRead = function (id, _options) {
        var result = this.api.itemRead(id, _options);
        return result.toPromise();
    };
    return PromiseItemApi;
}());
exports.PromiseItemApi = PromiseItemApi;
var ObservableAPI_18 = require("./ObservableAPI");
var PromiseItemAttributeApi = (function () {
    function PromiseItemAttributeApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableItemAttributeApi(configuration, requestFactory, responseProcessor);
    }
    PromiseItemAttributeApi.prototype.itemAttributeListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.itemAttributeListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseItemAttributeApi.prototype.itemAttributeList = function (limit, offset, _options) {
        var result = this.api.itemAttributeList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseItemAttributeApi.prototype.itemAttributeReadWithHttpInfo = function (id, _options) {
        var result = this.api.itemAttributeReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseItemAttributeApi.prototype.itemAttributeRead = function (id, _options) {
        var result = this.api.itemAttributeRead(id, _options);
        return result.toPromise();
    };
    return PromiseItemAttributeApi;
}());
exports.PromiseItemAttributeApi = PromiseItemAttributeApi;
var ObservableAPI_19 = require("./ObservableAPI");
var PromiseItemCategoryApi = (function () {
    function PromiseItemCategoryApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableItemCategoryApi(configuration, requestFactory, responseProcessor);
    }
    PromiseItemCategoryApi.prototype.itemCategoryListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.itemCategoryListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseItemCategoryApi.prototype.itemCategoryList = function (limit, offset, _options) {
        var result = this.api.itemCategoryList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseItemCategoryApi.prototype.itemCategoryReadWithHttpInfo = function (id, _options) {
        var result = this.api.itemCategoryReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseItemCategoryApi.prototype.itemCategoryRead = function (id, _options) {
        var result = this.api.itemCategoryRead(id, _options);
        return result.toPromise();
    };
    return PromiseItemCategoryApi;
}());
exports.PromiseItemCategoryApi = PromiseItemCategoryApi;
var ObservableAPI_20 = require("./ObservableAPI");
var PromiseItemFlingEffectApi = (function () {
    function PromiseItemFlingEffectApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservableItemFlingEffectApi(configuration, requestFactory, responseProcessor);
    }
    PromiseItemFlingEffectApi.prototype.itemFlingEffectListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.itemFlingEffectListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseItemFlingEffectApi.prototype.itemFlingEffectList = function (limit, offset, _options) {
        var result = this.api.itemFlingEffectList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseItemFlingEffectApi.prototype.itemFlingEffectReadWithHttpInfo = function (id, _options) {
        var result = this.api.itemFlingEffectReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseItemFlingEffectApi.prototype.itemFlingEffectRead = function (id, _options) {
        var result = this.api.itemFlingEffectRead(id, _options);
        return result.toPromise();
    };
    return PromiseItemFlingEffectApi;
}());
exports.PromiseItemFlingEffectApi = PromiseItemFlingEffectApi;
var ObservableAPI_21 = require("./ObservableAPI");
var PromiseItemPocketApi = (function () {
    function PromiseItemPocketApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservableItemPocketApi(configuration, requestFactory, responseProcessor);
    }
    PromiseItemPocketApi.prototype.itemPocketListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.itemPocketListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseItemPocketApi.prototype.itemPocketList = function (limit, offset, _options) {
        var result = this.api.itemPocketList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseItemPocketApi.prototype.itemPocketReadWithHttpInfo = function (id, _options) {
        var result = this.api.itemPocketReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseItemPocketApi.prototype.itemPocketRead = function (id, _options) {
        var result = this.api.itemPocketRead(id, _options);
        return result.toPromise();
    };
    return PromiseItemPocketApi;
}());
exports.PromiseItemPocketApi = PromiseItemPocketApi;
var ObservableAPI_22 = require("./ObservableAPI");
var PromiseLanguageApi = (function () {
    function PromiseLanguageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableLanguageApi(configuration, requestFactory, responseProcessor);
    }
    PromiseLanguageApi.prototype.languageListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.languageListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseLanguageApi.prototype.languageList = function (limit, offset, _options) {
        var result = this.api.languageList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseLanguageApi.prototype.languageReadWithHttpInfo = function (id, _options) {
        var result = this.api.languageReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseLanguageApi.prototype.languageRead = function (id, _options) {
        var result = this.api.languageRead(id, _options);
        return result.toPromise();
    };
    return PromiseLanguageApi;
}());
exports.PromiseLanguageApi = PromiseLanguageApi;
var ObservableAPI_23 = require("./ObservableAPI");
var PromiseLocationApi = (function () {
    function PromiseLocationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_23.ObservableLocationApi(configuration, requestFactory, responseProcessor);
    }
    PromiseLocationApi.prototype.locationListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.locationListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseLocationApi.prototype.locationList = function (limit, offset, _options) {
        var result = this.api.locationList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseLocationApi.prototype.locationReadWithHttpInfo = function (id, _options) {
        var result = this.api.locationReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseLocationApi.prototype.locationRead = function (id, _options) {
        var result = this.api.locationRead(id, _options);
        return result.toPromise();
    };
    return PromiseLocationApi;
}());
exports.PromiseLocationApi = PromiseLocationApi;
var ObservableAPI_24 = require("./ObservableAPI");
var PromiseLocationAreaApi = (function () {
    function PromiseLocationAreaApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_24.ObservableLocationAreaApi(configuration, requestFactory, responseProcessor);
    }
    PromiseLocationAreaApi.prototype.locationAreaListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.locationAreaListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseLocationAreaApi.prototype.locationAreaList = function (limit, offset, _options) {
        var result = this.api.locationAreaList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseLocationAreaApi.prototype.locationAreaReadWithHttpInfo = function (id, _options) {
        var result = this.api.locationAreaReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseLocationAreaApi.prototype.locationAreaRead = function (id, _options) {
        var result = this.api.locationAreaRead(id, _options);
        return result.toPromise();
    };
    return PromiseLocationAreaApi;
}());
exports.PromiseLocationAreaApi = PromiseLocationAreaApi;
var ObservableAPI_25 = require("./ObservableAPI");
var PromiseMachineApi = (function () {
    function PromiseMachineApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_25.ObservableMachineApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMachineApi.prototype.machineListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.machineListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMachineApi.prototype.machineList = function (limit, offset, _options) {
        var result = this.api.machineList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMachineApi.prototype.machineReadWithHttpInfo = function (id, _options) {
        var result = this.api.machineReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseMachineApi.prototype.machineRead = function (id, _options) {
        var result = this.api.machineRead(id, _options);
        return result.toPromise();
    };
    return PromiseMachineApi;
}());
exports.PromiseMachineApi = PromiseMachineApi;
var ObservableAPI_26 = require("./ObservableAPI");
var PromiseMoveApi = (function () {
    function PromiseMoveApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_26.ObservableMoveApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMoveApi.prototype.moveListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.moveListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveApi.prototype.moveList = function (limit, offset, _options) {
        var result = this.api.moveList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveApi.prototype.moveReadWithHttpInfo = function (id, _options) {
        var result = this.api.moveReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseMoveApi.prototype.moveRead = function (id, _options) {
        var result = this.api.moveRead(id, _options);
        return result.toPromise();
    };
    return PromiseMoveApi;
}());
exports.PromiseMoveApi = PromiseMoveApi;
var ObservableAPI_27 = require("./ObservableAPI");
var PromiseMoveAilmentApi = (function () {
    function PromiseMoveAilmentApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_27.ObservableMoveAilmentApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMoveAilmentApi.prototype.moveAilmentListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.moveAilmentListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveAilmentApi.prototype.moveAilmentList = function (limit, offset, _options) {
        var result = this.api.moveAilmentList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveAilmentApi.prototype.moveAilmentReadWithHttpInfo = function (id, _options) {
        var result = this.api.moveAilmentReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseMoveAilmentApi.prototype.moveAilmentRead = function (id, _options) {
        var result = this.api.moveAilmentRead(id, _options);
        return result.toPromise();
    };
    return PromiseMoveAilmentApi;
}());
exports.PromiseMoveAilmentApi = PromiseMoveAilmentApi;
var ObservableAPI_28 = require("./ObservableAPI");
var PromiseMoveBattleStyleApi = (function () {
    function PromiseMoveBattleStyleApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_28.ObservableMoveBattleStyleApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMoveBattleStyleApi.prototype.moveBattleStyleListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.moveBattleStyleListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveBattleStyleApi.prototype.moveBattleStyleList = function (limit, offset, _options) {
        var result = this.api.moveBattleStyleList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveBattleStyleApi.prototype.moveBattleStyleReadWithHttpInfo = function (id, _options) {
        var result = this.api.moveBattleStyleReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseMoveBattleStyleApi.prototype.moveBattleStyleRead = function (id, _options) {
        var result = this.api.moveBattleStyleRead(id, _options);
        return result.toPromise();
    };
    return PromiseMoveBattleStyleApi;
}());
exports.PromiseMoveBattleStyleApi = PromiseMoveBattleStyleApi;
var ObservableAPI_29 = require("./ObservableAPI");
var PromiseMoveCategoryApi = (function () {
    function PromiseMoveCategoryApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_29.ObservableMoveCategoryApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMoveCategoryApi.prototype.moveCategoryListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.moveCategoryListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveCategoryApi.prototype.moveCategoryList = function (limit, offset, _options) {
        var result = this.api.moveCategoryList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveCategoryApi.prototype.moveCategoryReadWithHttpInfo = function (id, _options) {
        var result = this.api.moveCategoryReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseMoveCategoryApi.prototype.moveCategoryRead = function (id, _options) {
        var result = this.api.moveCategoryRead(id, _options);
        return result.toPromise();
    };
    return PromiseMoveCategoryApi;
}());
exports.PromiseMoveCategoryApi = PromiseMoveCategoryApi;
var ObservableAPI_30 = require("./ObservableAPI");
var PromiseMoveDamageClassApi = (function () {
    function PromiseMoveDamageClassApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_30.ObservableMoveDamageClassApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMoveDamageClassApi.prototype.moveDamageClassListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.moveDamageClassListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveDamageClassApi.prototype.moveDamageClassList = function (limit, offset, _options) {
        var result = this.api.moveDamageClassList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveDamageClassApi.prototype.moveDamageClassReadWithHttpInfo = function (id, _options) {
        var result = this.api.moveDamageClassReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseMoveDamageClassApi.prototype.moveDamageClassRead = function (id, _options) {
        var result = this.api.moveDamageClassRead(id, _options);
        return result.toPromise();
    };
    return PromiseMoveDamageClassApi;
}());
exports.PromiseMoveDamageClassApi = PromiseMoveDamageClassApi;
var ObservableAPI_31 = require("./ObservableAPI");
var PromiseMoveLearnMethodApi = (function () {
    function PromiseMoveLearnMethodApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_31.ObservableMoveLearnMethodApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMoveLearnMethodApi.prototype.moveLearnMethodListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.moveLearnMethodListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveLearnMethodApi.prototype.moveLearnMethodList = function (limit, offset, _options) {
        var result = this.api.moveLearnMethodList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveLearnMethodApi.prototype.moveLearnMethodReadWithHttpInfo = function (id, _options) {
        var result = this.api.moveLearnMethodReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseMoveLearnMethodApi.prototype.moveLearnMethodRead = function (id, _options) {
        var result = this.api.moveLearnMethodRead(id, _options);
        return result.toPromise();
    };
    return PromiseMoveLearnMethodApi;
}());
exports.PromiseMoveLearnMethodApi = PromiseMoveLearnMethodApi;
var ObservableAPI_32 = require("./ObservableAPI");
var PromiseMoveTargetApi = (function () {
    function PromiseMoveTargetApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_32.ObservableMoveTargetApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMoveTargetApi.prototype.moveTargetListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.moveTargetListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveTargetApi.prototype.moveTargetList = function (limit, offset, _options) {
        var result = this.api.moveTargetList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseMoveTargetApi.prototype.moveTargetReadWithHttpInfo = function (id, _options) {
        var result = this.api.moveTargetReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseMoveTargetApi.prototype.moveTargetRead = function (id, _options) {
        var result = this.api.moveTargetRead(id, _options);
        return result.toPromise();
    };
    return PromiseMoveTargetApi;
}());
exports.PromiseMoveTargetApi = PromiseMoveTargetApi;
var ObservableAPI_33 = require("./ObservableAPI");
var PromiseNatureApi = (function () {
    function PromiseNatureApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_33.ObservableNatureApi(configuration, requestFactory, responseProcessor);
    }
    PromiseNatureApi.prototype.natureListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.natureListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseNatureApi.prototype.natureList = function (limit, offset, _options) {
        var result = this.api.natureList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseNatureApi.prototype.natureReadWithHttpInfo = function (idOrName, _options) {
        var result = this.api.natureReadWithHttpInfo(idOrName, _options);
        return result.toPromise();
    };
    PromiseNatureApi.prototype.natureRead = function (idOrName, _options) {
        var result = this.api.natureRead(idOrName, _options);
        return result.toPromise();
    };
    return PromiseNatureApi;
}());
exports.PromiseNatureApi = PromiseNatureApi;
var ObservableAPI_34 = require("./ObservableAPI");
var PromisePalParkAreaApi = (function () {
    function PromisePalParkAreaApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_34.ObservablePalParkAreaApi(configuration, requestFactory, responseProcessor);
    }
    PromisePalParkAreaApi.prototype.palParkAreaListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.palParkAreaListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromisePalParkAreaApi.prototype.palParkAreaList = function (limit, offset, _options) {
        var result = this.api.palParkAreaList(limit, offset, _options);
        return result.toPromise();
    };
    PromisePalParkAreaApi.prototype.palParkAreaReadWithHttpInfo = function (id, _options) {
        var result = this.api.palParkAreaReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromisePalParkAreaApi.prototype.palParkAreaRead = function (id, _options) {
        var result = this.api.palParkAreaRead(id, _options);
        return result.toPromise();
    };
    return PromisePalParkAreaApi;
}());
exports.PromisePalParkAreaApi = PromisePalParkAreaApi;
var ObservableAPI_35 = require("./ObservableAPI");
var PromisePokeathlonStatApi = (function () {
    function PromisePokeathlonStatApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_35.ObservablePokeathlonStatApi(configuration, requestFactory, responseProcessor);
    }
    PromisePokeathlonStatApi.prototype.pokeathlonStatListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.pokeathlonStatListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokeathlonStatApi.prototype.pokeathlonStatList = function (limit, offset, _options) {
        var result = this.api.pokeathlonStatList(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokeathlonStatApi.prototype.pokeathlonStatReadWithHttpInfo = function (id, _options) {
        var result = this.api.pokeathlonStatReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromisePokeathlonStatApi.prototype.pokeathlonStatRead = function (id, _options) {
        var result = this.api.pokeathlonStatRead(id, _options);
        return result.toPromise();
    };
    return PromisePokeathlonStatApi;
}());
exports.PromisePokeathlonStatApi = PromisePokeathlonStatApi;
var ObservableAPI_36 = require("./ObservableAPI");
var PromisePokedexApi = (function () {
    function PromisePokedexApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_36.ObservablePokedexApi(configuration, requestFactory, responseProcessor);
    }
    PromisePokedexApi.prototype.pokedexListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.pokedexListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokedexApi.prototype.pokedexList = function (limit, offset, _options) {
        var result = this.api.pokedexList(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokedexApi.prototype.pokedexReadWithHttpInfo = function (id, _options) {
        var result = this.api.pokedexReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromisePokedexApi.prototype.pokedexRead = function (id, _options) {
        var result = this.api.pokedexRead(id, _options);
        return result.toPromise();
    };
    return PromisePokedexApi;
}());
exports.PromisePokedexApi = PromisePokedexApi;
var ObservableAPI_37 = require("./ObservableAPI");
var PromisePokemonApi = (function () {
    function PromisePokemonApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_37.ObservablePokemonApi(configuration, requestFactory, responseProcessor);
    }
    PromisePokemonApi.prototype.pokemonListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.pokemonListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonApi.prototype.pokemonList = function (limit, offset, _options) {
        var result = this.api.pokemonList(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonApi.prototype.pokemonReadWithHttpInfo = function (idOrName, _options) {
        var result = this.api.pokemonReadWithHttpInfo(idOrName, _options);
        return result.toPromise();
    };
    PromisePokemonApi.prototype.pokemonRead = function (idOrName, _options) {
        var result = this.api.pokemonRead(idOrName, _options);
        return result.toPromise();
    };
    return PromisePokemonApi;
}());
exports.PromisePokemonApi = PromisePokemonApi;
var ObservableAPI_38 = require("./ObservableAPI");
var PromisePokemonColorApi = (function () {
    function PromisePokemonColorApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_38.ObservablePokemonColorApi(configuration, requestFactory, responseProcessor);
    }
    PromisePokemonColorApi.prototype.pokemonColorListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.pokemonColorListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonColorApi.prototype.pokemonColorList = function (limit, offset, _options) {
        var result = this.api.pokemonColorList(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonColorApi.prototype.pokemonColorReadWithHttpInfo = function (id, _options) {
        var result = this.api.pokemonColorReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromisePokemonColorApi.prototype.pokemonColorRead = function (id, _options) {
        var result = this.api.pokemonColorRead(id, _options);
        return result.toPromise();
    };
    return PromisePokemonColorApi;
}());
exports.PromisePokemonColorApi = PromisePokemonColorApi;
var ObservableAPI_39 = require("./ObservableAPI");
var PromisePokemonFormApi = (function () {
    function PromisePokemonFormApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_39.ObservablePokemonFormApi(configuration, requestFactory, responseProcessor);
    }
    PromisePokemonFormApi.prototype.pokemonFormListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.pokemonFormListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonFormApi.prototype.pokemonFormList = function (limit, offset, _options) {
        var result = this.api.pokemonFormList(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonFormApi.prototype.pokemonFormReadWithHttpInfo = function (id, _options) {
        var result = this.api.pokemonFormReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromisePokemonFormApi.prototype.pokemonFormRead = function (id, _options) {
        var result = this.api.pokemonFormRead(id, _options);
        return result.toPromise();
    };
    return PromisePokemonFormApi;
}());
exports.PromisePokemonFormApi = PromisePokemonFormApi;
var ObservableAPI_40 = require("./ObservableAPI");
var PromisePokemonHabitatApi = (function () {
    function PromisePokemonHabitatApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_40.ObservablePokemonHabitatApi(configuration, requestFactory, responseProcessor);
    }
    PromisePokemonHabitatApi.prototype.pokemonHabitatListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.pokemonHabitatListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonHabitatApi.prototype.pokemonHabitatList = function (limit, offset, _options) {
        var result = this.api.pokemonHabitatList(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonHabitatApi.prototype.pokemonHabitatReadWithHttpInfo = function (id, _options) {
        var result = this.api.pokemonHabitatReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromisePokemonHabitatApi.prototype.pokemonHabitatRead = function (id, _options) {
        var result = this.api.pokemonHabitatRead(id, _options);
        return result.toPromise();
    };
    return PromisePokemonHabitatApi;
}());
exports.PromisePokemonHabitatApi = PromisePokemonHabitatApi;
var ObservableAPI_41 = require("./ObservableAPI");
var PromisePokemonShapeApi = (function () {
    function PromisePokemonShapeApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_41.ObservablePokemonShapeApi(configuration, requestFactory, responseProcessor);
    }
    PromisePokemonShapeApi.prototype.pokemonShapeListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.pokemonShapeListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonShapeApi.prototype.pokemonShapeList = function (limit, offset, _options) {
        var result = this.api.pokemonShapeList(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonShapeApi.prototype.pokemonShapeReadWithHttpInfo = function (id, _options) {
        var result = this.api.pokemonShapeReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromisePokemonShapeApi.prototype.pokemonShapeRead = function (id, _options) {
        var result = this.api.pokemonShapeRead(id, _options);
        return result.toPromise();
    };
    return PromisePokemonShapeApi;
}());
exports.PromisePokemonShapeApi = PromisePokemonShapeApi;
var ObservableAPI_42 = require("./ObservableAPI");
var PromisePokemonSpeciesApi = (function () {
    function PromisePokemonSpeciesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_42.ObservablePokemonSpeciesApi(configuration, requestFactory, responseProcessor);
    }
    PromisePokemonSpeciesApi.prototype.pokemonSpeciesListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.pokemonSpeciesListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonSpeciesApi.prototype.pokemonSpeciesList = function (limit, offset, _options) {
        var result = this.api.pokemonSpeciesList(limit, offset, _options);
        return result.toPromise();
    };
    PromisePokemonSpeciesApi.prototype.pokemonSpeciesReadWithHttpInfo = function (id, _options) {
        var result = this.api.pokemonSpeciesReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromisePokemonSpeciesApi.prototype.pokemonSpeciesRead = function (id, _options) {
        var result = this.api.pokemonSpeciesRead(id, _options);
        return result.toPromise();
    };
    return PromisePokemonSpeciesApi;
}());
exports.PromisePokemonSpeciesApi = PromisePokemonSpeciesApi;
var ObservableAPI_43 = require("./ObservableAPI");
var PromiseRegionApi = (function () {
    function PromiseRegionApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_43.ObservableRegionApi(configuration, requestFactory, responseProcessor);
    }
    PromiseRegionApi.prototype.regionListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.regionListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseRegionApi.prototype.regionList = function (limit, offset, _options) {
        var result = this.api.regionList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseRegionApi.prototype.regionReadWithHttpInfo = function (id, _options) {
        var result = this.api.regionReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseRegionApi.prototype.regionRead = function (id, _options) {
        var result = this.api.regionRead(id, _options);
        return result.toPromise();
    };
    return PromiseRegionApi;
}());
exports.PromiseRegionApi = PromiseRegionApi;
var ObservableAPI_44 = require("./ObservableAPI");
var PromiseStatApi = (function () {
    function PromiseStatApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_44.ObservableStatApi(configuration, requestFactory, responseProcessor);
    }
    PromiseStatApi.prototype.statListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.statListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseStatApi.prototype.statList = function (limit, offset, _options) {
        var result = this.api.statList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseStatApi.prototype.statReadWithHttpInfo = function (idOrName, _options) {
        var result = this.api.statReadWithHttpInfo(idOrName, _options);
        return result.toPromise();
    };
    PromiseStatApi.prototype.statRead = function (idOrName, _options) {
        var result = this.api.statRead(idOrName, _options);
        return result.toPromise();
    };
    return PromiseStatApi;
}());
exports.PromiseStatApi = PromiseStatApi;
var ObservableAPI_45 = require("./ObservableAPI");
var PromiseSuperContestEffectApi = (function () {
    function PromiseSuperContestEffectApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_45.ObservableSuperContestEffectApi(configuration, requestFactory, responseProcessor);
    }
    PromiseSuperContestEffectApi.prototype.superContestEffectListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.superContestEffectListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseSuperContestEffectApi.prototype.superContestEffectList = function (limit, offset, _options) {
        var result = this.api.superContestEffectList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseSuperContestEffectApi.prototype.superContestEffectReadWithHttpInfo = function (id, _options) {
        var result = this.api.superContestEffectReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseSuperContestEffectApi.prototype.superContestEffectRead = function (id, _options) {
        var result = this.api.superContestEffectRead(id, _options);
        return result.toPromise();
    };
    return PromiseSuperContestEffectApi;
}());
exports.PromiseSuperContestEffectApi = PromiseSuperContestEffectApi;
var ObservableAPI_46 = require("./ObservableAPI");
var PromiseTypeApi = (function () {
    function PromiseTypeApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_46.ObservableTypeApi(configuration, requestFactory, responseProcessor);
    }
    PromiseTypeApi.prototype.typeListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.typeListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseTypeApi.prototype.typeList = function (limit, offset, _options) {
        var result = this.api.typeList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseTypeApi.prototype.typeReadWithHttpInfo = function (id, _options) {
        var result = this.api.typeReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseTypeApi.prototype.typeRead = function (id, _options) {
        var result = this.api.typeRead(id, _options);
        return result.toPromise();
    };
    return PromiseTypeApi;
}());
exports.PromiseTypeApi = PromiseTypeApi;
var ObservableAPI_47 = require("./ObservableAPI");
var PromiseVersionApi = (function () {
    function PromiseVersionApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_47.ObservableVersionApi(configuration, requestFactory, responseProcessor);
    }
    PromiseVersionApi.prototype.versionListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.versionListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseVersionApi.prototype.versionList = function (limit, offset, _options) {
        var result = this.api.versionList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseVersionApi.prototype.versionReadWithHttpInfo = function (id, _options) {
        var result = this.api.versionReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseVersionApi.prototype.versionRead = function (id, _options) {
        var result = this.api.versionRead(id, _options);
        return result.toPromise();
    };
    return PromiseVersionApi;
}());
exports.PromiseVersionApi = PromiseVersionApi;
var ObservableAPI_48 = require("./ObservableAPI");
var PromiseVersionGroupApi = (function () {
    function PromiseVersionGroupApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_48.ObservableVersionGroupApi(configuration, requestFactory, responseProcessor);
    }
    PromiseVersionGroupApi.prototype.versionGroupListWithHttpInfo = function (limit, offset, _options) {
        var result = this.api.versionGroupListWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    };
    PromiseVersionGroupApi.prototype.versionGroupList = function (limit, offset, _options) {
        var result = this.api.versionGroupList(limit, offset, _options);
        return result.toPromise();
    };
    PromiseVersionGroupApi.prototype.versionGroupReadWithHttpInfo = function (id, _options) {
        var result = this.api.versionGroupReadWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseVersionGroupApi.prototype.versionGroupRead = function (id, _options) {
        var result = this.api.versionGroupRead(id, _options);
        return result.toPromise();
    };
    return PromiseVersionGroupApi;
}());
exports.PromiseVersionGroupApi = PromiseVersionGroupApi;
//# sourceMappingURL=PromiseAPI.js.map