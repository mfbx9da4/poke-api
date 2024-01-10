"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableVersionGroupApi = exports.ObservableVersionApi = exports.ObservableTypeApi = exports.ObservableSuperContestEffectApi = exports.ObservableStatApi = exports.ObservableRegionApi = exports.ObservablePokemonSpeciesApi = exports.ObservablePokemonShapeApi = exports.ObservablePokemonHabitatApi = exports.ObservablePokemonFormApi = exports.ObservablePokemonColorApi = exports.ObservablePokemonApi = exports.ObservablePokedexApi = exports.ObservablePokeathlonStatApi = exports.ObservablePalParkAreaApi = exports.ObservableNatureApi = exports.ObservableMoveTargetApi = exports.ObservableMoveLearnMethodApi = exports.ObservableMoveDamageClassApi = exports.ObservableMoveCategoryApi = exports.ObservableMoveBattleStyleApi = exports.ObservableMoveAilmentApi = exports.ObservableMoveApi = exports.ObservableMachineApi = exports.ObservableLocationAreaApi = exports.ObservableLocationApi = exports.ObservableLanguageApi = exports.ObservableItemPocketApi = exports.ObservableItemFlingEffectApi = exports.ObservableItemCategoryApi = exports.ObservableItemAttributeApi = exports.ObservableItemApi = exports.ObservableGrowthRateApi = exports.ObservableGenerationApi = exports.ObservableGenderApi = exports.ObservableEvolutionTriggerApi = exports.ObservableEvolutionChainApi = exports.ObservableEncounterMethodApi = exports.ObservableEncounterConditionValueApi = exports.ObservableEncounterConditionApi = exports.ObservableEggGroupApi = exports.ObservableContestTypeApi = exports.ObservableContestEffectApi = exports.ObservableCharacteristicApi = exports.ObservableBerryFlavorApi = exports.ObservableBerryFirmnessApi = exports.ObservableBerryApi = exports.ObservableAbilityApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var AbilityApi_1 = require("../apis/AbilityApi");
var ObservableAbilityApi = (function () {
    function ObservableAbilityApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AbilityApi_1.AbilityApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AbilityApi_1.AbilityApiResponseProcessor();
    }
    ObservableAbilityApi.prototype.abilityListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.abilityList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.abilityListWithHttpInfo(rsp); }));
        }));
    };
    ObservableAbilityApi.prototype.abilityList = function (limit, offset, _options) {
        return this.abilityListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAbilityApi.prototype.abilityReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.abilityRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.abilityReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableAbilityApi.prototype.abilityRead = function (id, _options) {
        return this.abilityReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableAbilityApi;
}());
exports.ObservableAbilityApi = ObservableAbilityApi;
var BerryApi_1 = require("../apis/BerryApi");
var ObservableBerryApi = (function () {
    function ObservableBerryApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BerryApi_1.BerryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BerryApi_1.BerryApiResponseProcessor();
    }
    ObservableBerryApi.prototype.berryListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.berryList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.berryListWithHttpInfo(rsp); }));
        }));
    };
    ObservableBerryApi.prototype.berryList = function (limit, offset, _options) {
        return this.berryListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBerryApi.prototype.berryReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.berryRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.berryReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableBerryApi.prototype.berryRead = function (id, _options) {
        return this.berryReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableBerryApi;
}());
exports.ObservableBerryApi = ObservableBerryApi;
var BerryFirmnessApi_1 = require("../apis/BerryFirmnessApi");
var ObservableBerryFirmnessApi = (function () {
    function ObservableBerryFirmnessApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BerryFirmnessApi_1.BerryFirmnessApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BerryFirmnessApi_1.BerryFirmnessApiResponseProcessor();
    }
    ObservableBerryFirmnessApi.prototype.berryFirmnessListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.berryFirmnessList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.berryFirmnessListWithHttpInfo(rsp); }));
        }));
    };
    ObservableBerryFirmnessApi.prototype.berryFirmnessList = function (limit, offset, _options) {
        return this.berryFirmnessListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBerryFirmnessApi.prototype.berryFirmnessReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.berryFirmnessRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.berryFirmnessReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableBerryFirmnessApi.prototype.berryFirmnessRead = function (id, _options) {
        return this.berryFirmnessReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableBerryFirmnessApi;
}());
exports.ObservableBerryFirmnessApi = ObservableBerryFirmnessApi;
var BerryFlavorApi_1 = require("../apis/BerryFlavorApi");
var ObservableBerryFlavorApi = (function () {
    function ObservableBerryFlavorApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BerryFlavorApi_1.BerryFlavorApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BerryFlavorApi_1.BerryFlavorApiResponseProcessor();
    }
    ObservableBerryFlavorApi.prototype.berryFlavorListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.berryFlavorList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.berryFlavorListWithHttpInfo(rsp); }));
        }));
    };
    ObservableBerryFlavorApi.prototype.berryFlavorList = function (limit, offset, _options) {
        return this.berryFlavorListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBerryFlavorApi.prototype.berryFlavorReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.berryFlavorRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.berryFlavorReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableBerryFlavorApi.prototype.berryFlavorRead = function (id, _options) {
        return this.berryFlavorReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableBerryFlavorApi;
}());
exports.ObservableBerryFlavorApi = ObservableBerryFlavorApi;
var CharacteristicApi_1 = require("../apis/CharacteristicApi");
var ObservableCharacteristicApi = (function () {
    function ObservableCharacteristicApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CharacteristicApi_1.CharacteristicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CharacteristicApi_1.CharacteristicApiResponseProcessor();
    }
    ObservableCharacteristicApi.prototype.characteristicListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.characteristicList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_17 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_17(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_18 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_18(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.characteristicListWithHttpInfo(rsp); }));
        }));
    };
    ObservableCharacteristicApi.prototype.characteristicList = function (limit, offset, _options) {
        return this.characteristicListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCharacteristicApi.prototype.characteristicReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.characteristicRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_19 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_19(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_20 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_20(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.characteristicReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableCharacteristicApi.prototype.characteristicRead = function (id, _options) {
        return this.characteristicReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCharacteristicApi;
}());
exports.ObservableCharacteristicApi = ObservableCharacteristicApi;
var ContestEffectApi_1 = require("../apis/ContestEffectApi");
var ObservableContestEffectApi = (function () {
    function ObservableContestEffectApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContestEffectApi_1.ContestEffectApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContestEffectApi_1.ContestEffectApiResponseProcessor();
    }
    ObservableContestEffectApi.prototype.contestEffectListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.contestEffectList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_21 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_21(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_22 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_22(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.contestEffectListWithHttpInfo(rsp); }));
        }));
    };
    ObservableContestEffectApi.prototype.contestEffectList = function (limit, offset, _options) {
        return this.contestEffectListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContestEffectApi.prototype.contestEffectReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.contestEffectRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_23 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_23(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_24 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_24(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.contestEffectReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableContestEffectApi.prototype.contestEffectRead = function (id, _options) {
        return this.contestEffectReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableContestEffectApi;
}());
exports.ObservableContestEffectApi = ObservableContestEffectApi;
var ContestTypeApi_1 = require("../apis/ContestTypeApi");
var ObservableContestTypeApi = (function () {
    function ObservableContestTypeApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContestTypeApi_1.ContestTypeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContestTypeApi_1.ContestTypeApiResponseProcessor();
    }
    ObservableContestTypeApi.prototype.contestTypeListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.contestTypeList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_25 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_25(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_26 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_26(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.contestTypeListWithHttpInfo(rsp); }));
        }));
    };
    ObservableContestTypeApi.prototype.contestTypeList = function (limit, offset, _options) {
        return this.contestTypeListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContestTypeApi.prototype.contestTypeReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.contestTypeRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_27 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_27(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_28 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_28(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.contestTypeReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableContestTypeApi.prototype.contestTypeRead = function (id, _options) {
        return this.contestTypeReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableContestTypeApi;
}());
exports.ObservableContestTypeApi = ObservableContestTypeApi;
var EggGroupApi_1 = require("../apis/EggGroupApi");
var ObservableEggGroupApi = (function () {
    function ObservableEggGroupApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EggGroupApi_1.EggGroupApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EggGroupApi_1.EggGroupApiResponseProcessor();
    }
    ObservableEggGroupApi.prototype.eggGroupListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.eggGroupList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_29 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_29(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_30 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_30(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.eggGroupListWithHttpInfo(rsp); }));
        }));
    };
    ObservableEggGroupApi.prototype.eggGroupList = function (limit, offset, _options) {
        return this.eggGroupListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEggGroupApi.prototype.eggGroupReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.eggGroupRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_31 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_31(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_32 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_32(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.eggGroupReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableEggGroupApi.prototype.eggGroupRead = function (id, _options) {
        return this.eggGroupReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableEggGroupApi;
}());
exports.ObservableEggGroupApi = ObservableEggGroupApi;
var EncounterConditionApi_1 = require("../apis/EncounterConditionApi");
var ObservableEncounterConditionApi = (function () {
    function ObservableEncounterConditionApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EncounterConditionApi_1.EncounterConditionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EncounterConditionApi_1.EncounterConditionApiResponseProcessor();
    }
    ObservableEncounterConditionApi.prototype.encounterConditionListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.encounterConditionList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_33 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_33(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_34 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_34(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.encounterConditionListWithHttpInfo(rsp); }));
        }));
    };
    ObservableEncounterConditionApi.prototype.encounterConditionList = function (limit, offset, _options) {
        return this.encounterConditionListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEncounterConditionApi.prototype.encounterConditionReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.encounterConditionRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_35 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_35(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_36 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_36(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.encounterConditionReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableEncounterConditionApi.prototype.encounterConditionRead = function (id, _options) {
        return this.encounterConditionReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableEncounterConditionApi;
}());
exports.ObservableEncounterConditionApi = ObservableEncounterConditionApi;
var EncounterConditionValueApi_1 = require("../apis/EncounterConditionValueApi");
var ObservableEncounterConditionValueApi = (function () {
    function ObservableEncounterConditionValueApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EncounterConditionValueApi_1.EncounterConditionValueApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EncounterConditionValueApi_1.EncounterConditionValueApiResponseProcessor();
    }
    ObservableEncounterConditionValueApi.prototype.encounterConditionValueListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.encounterConditionValueList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_37 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_37(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_38 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_38(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.encounterConditionValueListWithHttpInfo(rsp); }));
        }));
    };
    ObservableEncounterConditionValueApi.prototype.encounterConditionValueList = function (limit, offset, _options) {
        return this.encounterConditionValueListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEncounterConditionValueApi.prototype.encounterConditionValueReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.encounterConditionValueRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_39 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_39(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_40 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_40(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.encounterConditionValueReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableEncounterConditionValueApi.prototype.encounterConditionValueRead = function (id, _options) {
        return this.encounterConditionValueReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableEncounterConditionValueApi;
}());
exports.ObservableEncounterConditionValueApi = ObservableEncounterConditionValueApi;
var EncounterMethodApi_1 = require("../apis/EncounterMethodApi");
var ObservableEncounterMethodApi = (function () {
    function ObservableEncounterMethodApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EncounterMethodApi_1.EncounterMethodApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EncounterMethodApi_1.EncounterMethodApiResponseProcessor();
    }
    ObservableEncounterMethodApi.prototype.encounterMethodListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.encounterMethodList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_41 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_41(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_42 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_42(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.encounterMethodListWithHttpInfo(rsp); }));
        }));
    };
    ObservableEncounterMethodApi.prototype.encounterMethodList = function (limit, offset, _options) {
        return this.encounterMethodListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEncounterMethodApi.prototype.encounterMethodReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.encounterMethodRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_43 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_43(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_44 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_44(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.encounterMethodReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableEncounterMethodApi.prototype.encounterMethodRead = function (id, _options) {
        return this.encounterMethodReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableEncounterMethodApi;
}());
exports.ObservableEncounterMethodApi = ObservableEncounterMethodApi;
var EvolutionChainApi_1 = require("../apis/EvolutionChainApi");
var ObservableEvolutionChainApi = (function () {
    function ObservableEvolutionChainApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EvolutionChainApi_1.EvolutionChainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EvolutionChainApi_1.EvolutionChainApiResponseProcessor();
    }
    ObservableEvolutionChainApi.prototype.evolutionChainListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.evolutionChainList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_45 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_45(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_46 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_46(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.evolutionChainListWithHttpInfo(rsp); }));
        }));
    };
    ObservableEvolutionChainApi.prototype.evolutionChainList = function (limit, offset, _options) {
        return this.evolutionChainListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEvolutionChainApi.prototype.evolutionChainReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.evolutionChainRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_47 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_47(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_48 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_48(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.evolutionChainReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableEvolutionChainApi.prototype.evolutionChainRead = function (id, _options) {
        return this.evolutionChainReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableEvolutionChainApi;
}());
exports.ObservableEvolutionChainApi = ObservableEvolutionChainApi;
var EvolutionTriggerApi_1 = require("../apis/EvolutionTriggerApi");
var ObservableEvolutionTriggerApi = (function () {
    function ObservableEvolutionTriggerApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EvolutionTriggerApi_1.EvolutionTriggerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EvolutionTriggerApi_1.EvolutionTriggerApiResponseProcessor();
    }
    ObservableEvolutionTriggerApi.prototype.evolutionTriggerListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.evolutionTriggerList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_49 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_49(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_50 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_50(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.evolutionTriggerListWithHttpInfo(rsp); }));
        }));
    };
    ObservableEvolutionTriggerApi.prototype.evolutionTriggerList = function (limit, offset, _options) {
        return this.evolutionTriggerListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEvolutionTriggerApi.prototype.evolutionTriggerReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.evolutionTriggerRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_51 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_51(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_52 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_52(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.evolutionTriggerReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableEvolutionTriggerApi.prototype.evolutionTriggerRead = function (id, _options) {
        return this.evolutionTriggerReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableEvolutionTriggerApi;
}());
exports.ObservableEvolutionTriggerApi = ObservableEvolutionTriggerApi;
var GenderApi_1 = require("../apis/GenderApi");
var ObservableGenderApi = (function () {
    function ObservableGenderApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GenderApi_1.GenderApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GenderApi_1.GenderApiResponseProcessor();
    }
    ObservableGenderApi.prototype.genderListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.genderList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_53 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_53(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_54 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_54(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.genderListWithHttpInfo(rsp); }));
        }));
    };
    ObservableGenderApi.prototype.genderList = function (limit, offset, _options) {
        return this.genderListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableGenderApi.prototype.genderReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.genderRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_55 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_55(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_56 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_56(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.genderReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableGenderApi.prototype.genderRead = function (id, _options) {
        return this.genderReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableGenderApi;
}());
exports.ObservableGenderApi = ObservableGenderApi;
var GenerationApi_1 = require("../apis/GenerationApi");
var ObservableGenerationApi = (function () {
    function ObservableGenerationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GenerationApi_1.GenerationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GenerationApi_1.GenerationApiResponseProcessor();
    }
    ObservableGenerationApi.prototype.generationListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.generationList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_57 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_57(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_58 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_58(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.generationListWithHttpInfo(rsp); }));
        }));
    };
    ObservableGenerationApi.prototype.generationList = function (limit, offset, _options) {
        return this.generationListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableGenerationApi.prototype.generationReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.generationRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_59 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_59(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_60 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_60(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.generationReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableGenerationApi.prototype.generationRead = function (id, _options) {
        return this.generationReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableGenerationApi;
}());
exports.ObservableGenerationApi = ObservableGenerationApi;
var GrowthRateApi_1 = require("../apis/GrowthRateApi");
var ObservableGrowthRateApi = (function () {
    function ObservableGrowthRateApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GrowthRateApi_1.GrowthRateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GrowthRateApi_1.GrowthRateApiResponseProcessor();
    }
    ObservableGrowthRateApi.prototype.growthRateListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.growthRateList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_61 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_61(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_62 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_62(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.growthRateListWithHttpInfo(rsp); }));
        }));
    };
    ObservableGrowthRateApi.prototype.growthRateList = function (limit, offset, _options) {
        return this.growthRateListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableGrowthRateApi.prototype.growthRateReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.growthRateRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_63 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_63(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_64 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_64(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.growthRateReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableGrowthRateApi.prototype.growthRateRead = function (id, _options) {
        return this.growthRateReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableGrowthRateApi;
}());
exports.ObservableGrowthRateApi = ObservableGrowthRateApi;
var ItemApi_1 = require("../apis/ItemApi");
var ObservableItemApi = (function () {
    function ObservableItemApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemApi_1.ItemApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemApi_1.ItemApiResponseProcessor();
    }
    ObservableItemApi.prototype.itemListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.itemList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_65 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_65(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_66 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_66(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.itemListWithHttpInfo(rsp); }));
        }));
    };
    ObservableItemApi.prototype.itemList = function (limit, offset, _options) {
        return this.itemListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableItemApi.prototype.itemReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.itemRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_67 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_67(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_68 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_68(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.itemReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableItemApi.prototype.itemRead = function (id, _options) {
        return this.itemReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableItemApi;
}());
exports.ObservableItemApi = ObservableItemApi;
var ItemAttributeApi_1 = require("../apis/ItemAttributeApi");
var ObservableItemAttributeApi = (function () {
    function ObservableItemAttributeApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemAttributeApi_1.ItemAttributeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemAttributeApi_1.ItemAttributeApiResponseProcessor();
    }
    ObservableItemAttributeApi.prototype.itemAttributeListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.itemAttributeList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_69 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_69(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_70 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_70(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.itemAttributeListWithHttpInfo(rsp); }));
        }));
    };
    ObservableItemAttributeApi.prototype.itemAttributeList = function (limit, offset, _options) {
        return this.itemAttributeListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableItemAttributeApi.prototype.itemAttributeReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.itemAttributeRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_71 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_71(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_72 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_72(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.itemAttributeReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableItemAttributeApi.prototype.itemAttributeRead = function (id, _options) {
        return this.itemAttributeReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableItemAttributeApi;
}());
exports.ObservableItemAttributeApi = ObservableItemAttributeApi;
var ItemCategoryApi_1 = require("../apis/ItemCategoryApi");
var ObservableItemCategoryApi = (function () {
    function ObservableItemCategoryApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemCategoryApi_1.ItemCategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemCategoryApi_1.ItemCategoryApiResponseProcessor();
    }
    ObservableItemCategoryApi.prototype.itemCategoryListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.itemCategoryList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_73 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_73(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_74 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_74(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.itemCategoryListWithHttpInfo(rsp); }));
        }));
    };
    ObservableItemCategoryApi.prototype.itemCategoryList = function (limit, offset, _options) {
        return this.itemCategoryListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableItemCategoryApi.prototype.itemCategoryReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.itemCategoryRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_75 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_75(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_76 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_76(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.itemCategoryReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableItemCategoryApi.prototype.itemCategoryRead = function (id, _options) {
        return this.itemCategoryReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableItemCategoryApi;
}());
exports.ObservableItemCategoryApi = ObservableItemCategoryApi;
var ItemFlingEffectApi_1 = require("../apis/ItemFlingEffectApi");
var ObservableItemFlingEffectApi = (function () {
    function ObservableItemFlingEffectApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemFlingEffectApi_1.ItemFlingEffectApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemFlingEffectApi_1.ItemFlingEffectApiResponseProcessor();
    }
    ObservableItemFlingEffectApi.prototype.itemFlingEffectListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.itemFlingEffectList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_77 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_77(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_78 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_78(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.itemFlingEffectListWithHttpInfo(rsp); }));
        }));
    };
    ObservableItemFlingEffectApi.prototype.itemFlingEffectList = function (limit, offset, _options) {
        return this.itemFlingEffectListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableItemFlingEffectApi.prototype.itemFlingEffectReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.itemFlingEffectRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_79 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_79(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_80 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_80(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.itemFlingEffectReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableItemFlingEffectApi.prototype.itemFlingEffectRead = function (id, _options) {
        return this.itemFlingEffectReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableItemFlingEffectApi;
}());
exports.ObservableItemFlingEffectApi = ObservableItemFlingEffectApi;
var ItemPocketApi_1 = require("../apis/ItemPocketApi");
var ObservableItemPocketApi = (function () {
    function ObservableItemPocketApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemPocketApi_1.ItemPocketApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemPocketApi_1.ItemPocketApiResponseProcessor();
    }
    ObservableItemPocketApi.prototype.itemPocketListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.itemPocketList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_81 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_81(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_82 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_82(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.itemPocketListWithHttpInfo(rsp); }));
        }));
    };
    ObservableItemPocketApi.prototype.itemPocketList = function (limit, offset, _options) {
        return this.itemPocketListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableItemPocketApi.prototype.itemPocketReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.itemPocketRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_83 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_83(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_84 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_84(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.itemPocketReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableItemPocketApi.prototype.itemPocketRead = function (id, _options) {
        return this.itemPocketReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableItemPocketApi;
}());
exports.ObservableItemPocketApi = ObservableItemPocketApi;
var LanguageApi_1 = require("../apis/LanguageApi");
var ObservableLanguageApi = (function () {
    function ObservableLanguageApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LanguageApi_1.LanguageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LanguageApi_1.LanguageApiResponseProcessor();
    }
    ObservableLanguageApi.prototype.languageListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.languageList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_85 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_85(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_86 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_86(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.languageListWithHttpInfo(rsp); }));
        }));
    };
    ObservableLanguageApi.prototype.languageList = function (limit, offset, _options) {
        return this.languageListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableLanguageApi.prototype.languageReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.languageRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_87 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_87(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_88 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_88(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.languageReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableLanguageApi.prototype.languageRead = function (id, _options) {
        return this.languageReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLanguageApi;
}());
exports.ObservableLanguageApi = ObservableLanguageApi;
var LocationApi_1 = require("../apis/LocationApi");
var ObservableLocationApi = (function () {
    function ObservableLocationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationApi_1.LocationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationApi_1.LocationApiResponseProcessor();
    }
    ObservableLocationApi.prototype.locationListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.locationList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_89 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_89(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_90 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_90(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.locationListWithHttpInfo(rsp); }));
        }));
    };
    ObservableLocationApi.prototype.locationList = function (limit, offset, _options) {
        return this.locationListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableLocationApi.prototype.locationReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.locationRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_91 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_91(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_92 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_92(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.locationReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableLocationApi.prototype.locationRead = function (id, _options) {
        return this.locationReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLocationApi;
}());
exports.ObservableLocationApi = ObservableLocationApi;
var LocationAreaApi_1 = require("../apis/LocationAreaApi");
var ObservableLocationAreaApi = (function () {
    function ObservableLocationAreaApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationAreaApi_1.LocationAreaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationAreaApi_1.LocationAreaApiResponseProcessor();
    }
    ObservableLocationAreaApi.prototype.locationAreaListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.locationAreaList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_93 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_93(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_94 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_94(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.locationAreaListWithHttpInfo(rsp); }));
        }));
    };
    ObservableLocationAreaApi.prototype.locationAreaList = function (limit, offset, _options) {
        return this.locationAreaListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableLocationAreaApi.prototype.locationAreaReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.locationAreaRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_95 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_95(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_96 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_96(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.locationAreaReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableLocationAreaApi.prototype.locationAreaRead = function (id, _options) {
        return this.locationAreaReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLocationAreaApi;
}());
exports.ObservableLocationAreaApi = ObservableLocationAreaApi;
var MachineApi_1 = require("../apis/MachineApi");
var ObservableMachineApi = (function () {
    function ObservableMachineApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MachineApi_1.MachineApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MachineApi_1.MachineApiResponseProcessor();
    }
    ObservableMachineApi.prototype.machineListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.machineList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_97 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_97(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_98 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_98(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.machineListWithHttpInfo(rsp); }));
        }));
    };
    ObservableMachineApi.prototype.machineList = function (limit, offset, _options) {
        return this.machineListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMachineApi.prototype.machineReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.machineRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_99 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_99(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_100 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_100(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.machineReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableMachineApi.prototype.machineRead = function (id, _options) {
        return this.machineReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableMachineApi;
}());
exports.ObservableMachineApi = ObservableMachineApi;
var MoveApi_1 = require("../apis/MoveApi");
var ObservableMoveApi = (function () {
    function ObservableMoveApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveApi_1.MoveApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveApi_1.MoveApiResponseProcessor();
    }
    ObservableMoveApi.prototype.moveListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_101 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_101(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_102 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_102(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveListWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveApi.prototype.moveList = function (limit, offset, _options) {
        return this.moveListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMoveApi.prototype.moveReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_103 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_103(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_104 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_104(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveApi.prototype.moveRead = function (id, _options) {
        return this.moveReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableMoveApi;
}());
exports.ObservableMoveApi = ObservableMoveApi;
var MoveAilmentApi_1 = require("../apis/MoveAilmentApi");
var ObservableMoveAilmentApi = (function () {
    function ObservableMoveAilmentApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveAilmentApi_1.MoveAilmentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveAilmentApi_1.MoveAilmentApiResponseProcessor();
    }
    ObservableMoveAilmentApi.prototype.moveAilmentListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveAilmentList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_105 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_105(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_106 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_106(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveAilmentListWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveAilmentApi.prototype.moveAilmentList = function (limit, offset, _options) {
        return this.moveAilmentListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMoveAilmentApi.prototype.moveAilmentReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveAilmentRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_107 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_107(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_108 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_108(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveAilmentReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveAilmentApi.prototype.moveAilmentRead = function (id, _options) {
        return this.moveAilmentReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableMoveAilmentApi;
}());
exports.ObservableMoveAilmentApi = ObservableMoveAilmentApi;
var MoveBattleStyleApi_1 = require("../apis/MoveBattleStyleApi");
var ObservableMoveBattleStyleApi = (function () {
    function ObservableMoveBattleStyleApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveBattleStyleApi_1.MoveBattleStyleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveBattleStyleApi_1.MoveBattleStyleApiResponseProcessor();
    }
    ObservableMoveBattleStyleApi.prototype.moveBattleStyleListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveBattleStyleList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_109 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_109(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_110 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_110(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveBattleStyleListWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveBattleStyleApi.prototype.moveBattleStyleList = function (limit, offset, _options) {
        return this.moveBattleStyleListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMoveBattleStyleApi.prototype.moveBattleStyleReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveBattleStyleRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_111 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_111(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_112 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_112(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveBattleStyleReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveBattleStyleApi.prototype.moveBattleStyleRead = function (id, _options) {
        return this.moveBattleStyleReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableMoveBattleStyleApi;
}());
exports.ObservableMoveBattleStyleApi = ObservableMoveBattleStyleApi;
var MoveCategoryApi_1 = require("../apis/MoveCategoryApi");
var ObservableMoveCategoryApi = (function () {
    function ObservableMoveCategoryApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveCategoryApi_1.MoveCategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveCategoryApi_1.MoveCategoryApiResponseProcessor();
    }
    ObservableMoveCategoryApi.prototype.moveCategoryListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveCategoryList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_113 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_113(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_114 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_114(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveCategoryListWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveCategoryApi.prototype.moveCategoryList = function (limit, offset, _options) {
        return this.moveCategoryListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMoveCategoryApi.prototype.moveCategoryReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveCategoryRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_115 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_115(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_116 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_116(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveCategoryReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveCategoryApi.prototype.moveCategoryRead = function (id, _options) {
        return this.moveCategoryReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableMoveCategoryApi;
}());
exports.ObservableMoveCategoryApi = ObservableMoveCategoryApi;
var MoveDamageClassApi_1 = require("../apis/MoveDamageClassApi");
var ObservableMoveDamageClassApi = (function () {
    function ObservableMoveDamageClassApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveDamageClassApi_1.MoveDamageClassApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveDamageClassApi_1.MoveDamageClassApiResponseProcessor();
    }
    ObservableMoveDamageClassApi.prototype.moveDamageClassListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveDamageClassList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_117 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_117(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_118 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_118(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveDamageClassListWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveDamageClassApi.prototype.moveDamageClassList = function (limit, offset, _options) {
        return this.moveDamageClassListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMoveDamageClassApi.prototype.moveDamageClassReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveDamageClassRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_119 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_119(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_120 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_120(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveDamageClassReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveDamageClassApi.prototype.moveDamageClassRead = function (id, _options) {
        return this.moveDamageClassReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableMoveDamageClassApi;
}());
exports.ObservableMoveDamageClassApi = ObservableMoveDamageClassApi;
var MoveLearnMethodApi_1 = require("../apis/MoveLearnMethodApi");
var ObservableMoveLearnMethodApi = (function () {
    function ObservableMoveLearnMethodApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveLearnMethodApi_1.MoveLearnMethodApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveLearnMethodApi_1.MoveLearnMethodApiResponseProcessor();
    }
    ObservableMoveLearnMethodApi.prototype.moveLearnMethodListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveLearnMethodList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_121 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_121(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_122 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_122(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveLearnMethodListWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveLearnMethodApi.prototype.moveLearnMethodList = function (limit, offset, _options) {
        return this.moveLearnMethodListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMoveLearnMethodApi.prototype.moveLearnMethodReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveLearnMethodRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_123 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_123(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_124 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_124(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveLearnMethodReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveLearnMethodApi.prototype.moveLearnMethodRead = function (id, _options) {
        return this.moveLearnMethodReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableMoveLearnMethodApi;
}());
exports.ObservableMoveLearnMethodApi = ObservableMoveLearnMethodApi;
var MoveTargetApi_1 = require("../apis/MoveTargetApi");
var ObservableMoveTargetApi = (function () {
    function ObservableMoveTargetApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MoveTargetApi_1.MoveTargetApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MoveTargetApi_1.MoveTargetApiResponseProcessor();
    }
    ObservableMoveTargetApi.prototype.moveTargetListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveTargetList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_125 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_125(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_126 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_126(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveTargetListWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveTargetApi.prototype.moveTargetList = function (limit, offset, _options) {
        return this.moveTargetListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMoveTargetApi.prototype.moveTargetReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.moveTargetRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_127 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_127(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_128 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_128(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.moveTargetReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableMoveTargetApi.prototype.moveTargetRead = function (id, _options) {
        return this.moveTargetReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableMoveTargetApi;
}());
exports.ObservableMoveTargetApi = ObservableMoveTargetApi;
var NatureApi_1 = require("../apis/NatureApi");
var ObservableNatureApi = (function () {
    function ObservableNatureApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NatureApi_1.NatureApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NatureApi_1.NatureApiResponseProcessor();
    }
    ObservableNatureApi.prototype.natureListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.natureList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_129 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_129(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_130 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_130(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.natureListWithHttpInfo(rsp); }));
        }));
    };
    ObservableNatureApi.prototype.natureList = function (limit, offset, _options) {
        return this.natureListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableNatureApi.prototype.natureReadWithHttpInfo = function (idOrName, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.natureRead(idOrName, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_131 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_131(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_132 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_132(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.natureReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableNatureApi.prototype.natureRead = function (idOrName, _options) {
        return this.natureReadWithHttpInfo(idOrName, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableNatureApi;
}());
exports.ObservableNatureApi = ObservableNatureApi;
var PalParkAreaApi_1 = require("../apis/PalParkAreaApi");
var ObservablePalParkAreaApi = (function () {
    function ObservablePalParkAreaApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PalParkAreaApi_1.PalParkAreaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PalParkAreaApi_1.PalParkAreaApiResponseProcessor();
    }
    ObservablePalParkAreaApi.prototype.palParkAreaListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.palParkAreaList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_133 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_133(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_134 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_134(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.palParkAreaListWithHttpInfo(rsp); }));
        }));
    };
    ObservablePalParkAreaApi.prototype.palParkAreaList = function (limit, offset, _options) {
        return this.palParkAreaListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePalParkAreaApi.prototype.palParkAreaReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.palParkAreaRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_135 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_135(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_136 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_136(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.palParkAreaReadWithHttpInfo(rsp); }));
        }));
    };
    ObservablePalParkAreaApi.prototype.palParkAreaRead = function (id, _options) {
        return this.palParkAreaReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePalParkAreaApi;
}());
exports.ObservablePalParkAreaApi = ObservablePalParkAreaApi;
var PokeathlonStatApi_1 = require("../apis/PokeathlonStatApi");
var ObservablePokeathlonStatApi = (function () {
    function ObservablePokeathlonStatApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokeathlonStatApi_1.PokeathlonStatApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokeathlonStatApi_1.PokeathlonStatApiResponseProcessor();
    }
    ObservablePokeathlonStatApi.prototype.pokeathlonStatListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokeathlonStatList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_137 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_137(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_138 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_138(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokeathlonStatListWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokeathlonStatApi.prototype.pokeathlonStatList = function (limit, offset, _options) {
        return this.pokeathlonStatListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePokeathlonStatApi.prototype.pokeathlonStatReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokeathlonStatRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_139 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_139(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_140 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_140(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokeathlonStatReadWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokeathlonStatApi.prototype.pokeathlonStatRead = function (id, _options) {
        return this.pokeathlonStatReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePokeathlonStatApi;
}());
exports.ObservablePokeathlonStatApi = ObservablePokeathlonStatApi;
var PokedexApi_1 = require("../apis/PokedexApi");
var ObservablePokedexApi = (function () {
    function ObservablePokedexApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokedexApi_1.PokedexApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokedexApi_1.PokedexApiResponseProcessor();
    }
    ObservablePokedexApi.prototype.pokedexListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokedexList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_141 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_141(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_142 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_142(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokedexListWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokedexApi.prototype.pokedexList = function (limit, offset, _options) {
        return this.pokedexListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePokedexApi.prototype.pokedexReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokedexRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_143 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_143(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_144 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_144(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokedexReadWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokedexApi.prototype.pokedexRead = function (id, _options) {
        return this.pokedexReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePokedexApi;
}());
exports.ObservablePokedexApi = ObservablePokedexApi;
var PokemonApi_1 = require("../apis/PokemonApi");
var ObservablePokemonApi = (function () {
    function ObservablePokemonApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonApi_1.PokemonApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonApi_1.PokemonApiResponseProcessor();
    }
    ObservablePokemonApi.prototype.pokemonListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_145 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_145(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_146 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_146(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonListWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonApi.prototype.pokemonList = function (limit, offset, _options) {
        return this.pokemonListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePokemonApi.prototype.pokemonReadWithHttpInfo = function (idOrName, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonRead(idOrName, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_147 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_147(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_148 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_148(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonReadWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonApi.prototype.pokemonRead = function (idOrName, _options) {
        return this.pokemonReadWithHttpInfo(idOrName, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePokemonApi;
}());
exports.ObservablePokemonApi = ObservablePokemonApi;
var PokemonColorApi_1 = require("../apis/PokemonColorApi");
var ObservablePokemonColorApi = (function () {
    function ObservablePokemonColorApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonColorApi_1.PokemonColorApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonColorApi_1.PokemonColorApiResponseProcessor();
    }
    ObservablePokemonColorApi.prototype.pokemonColorListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonColorList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_149 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_149(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_150 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_150(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonColorListWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonColorApi.prototype.pokemonColorList = function (limit, offset, _options) {
        return this.pokemonColorListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePokemonColorApi.prototype.pokemonColorReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonColorRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_151 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_151(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_152 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_152(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonColorReadWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonColorApi.prototype.pokemonColorRead = function (id, _options) {
        return this.pokemonColorReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePokemonColorApi;
}());
exports.ObservablePokemonColorApi = ObservablePokemonColorApi;
var PokemonFormApi_1 = require("../apis/PokemonFormApi");
var ObservablePokemonFormApi = (function () {
    function ObservablePokemonFormApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonFormApi_1.PokemonFormApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonFormApi_1.PokemonFormApiResponseProcessor();
    }
    ObservablePokemonFormApi.prototype.pokemonFormListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonFormList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_153 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_153(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_154 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_154(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonFormListWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonFormApi.prototype.pokemonFormList = function (limit, offset, _options) {
        return this.pokemonFormListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePokemonFormApi.prototype.pokemonFormReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonFormRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_155 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_155(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_156 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_156(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonFormReadWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonFormApi.prototype.pokemonFormRead = function (id, _options) {
        return this.pokemonFormReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePokemonFormApi;
}());
exports.ObservablePokemonFormApi = ObservablePokemonFormApi;
var PokemonHabitatApi_1 = require("../apis/PokemonHabitatApi");
var ObservablePokemonHabitatApi = (function () {
    function ObservablePokemonHabitatApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonHabitatApi_1.PokemonHabitatApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonHabitatApi_1.PokemonHabitatApiResponseProcessor();
    }
    ObservablePokemonHabitatApi.prototype.pokemonHabitatListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonHabitatList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_157 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_157(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_158 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_158(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonHabitatListWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonHabitatApi.prototype.pokemonHabitatList = function (limit, offset, _options) {
        return this.pokemonHabitatListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePokemonHabitatApi.prototype.pokemonHabitatReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonHabitatRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_159 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_159(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_160 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_160(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonHabitatReadWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonHabitatApi.prototype.pokemonHabitatRead = function (id, _options) {
        return this.pokemonHabitatReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePokemonHabitatApi;
}());
exports.ObservablePokemonHabitatApi = ObservablePokemonHabitatApi;
var PokemonShapeApi_1 = require("../apis/PokemonShapeApi");
var ObservablePokemonShapeApi = (function () {
    function ObservablePokemonShapeApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonShapeApi_1.PokemonShapeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonShapeApi_1.PokemonShapeApiResponseProcessor();
    }
    ObservablePokemonShapeApi.prototype.pokemonShapeListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonShapeList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_161 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_161(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_162 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_162(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonShapeListWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonShapeApi.prototype.pokemonShapeList = function (limit, offset, _options) {
        return this.pokemonShapeListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePokemonShapeApi.prototype.pokemonShapeReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonShapeRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_163 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_163(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_164 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_164(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonShapeReadWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonShapeApi.prototype.pokemonShapeRead = function (id, _options) {
        return this.pokemonShapeReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePokemonShapeApi;
}());
exports.ObservablePokemonShapeApi = ObservablePokemonShapeApi;
var PokemonSpeciesApi_1 = require("../apis/PokemonSpeciesApi");
var ObservablePokemonSpeciesApi = (function () {
    function ObservablePokemonSpeciesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PokemonSpeciesApi_1.PokemonSpeciesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PokemonSpeciesApi_1.PokemonSpeciesApiResponseProcessor();
    }
    ObservablePokemonSpeciesApi.prototype.pokemonSpeciesListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonSpeciesList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_165 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_165(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_166 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_166(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonSpeciesListWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonSpeciesApi.prototype.pokemonSpeciesList = function (limit, offset, _options) {
        return this.pokemonSpeciesListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePokemonSpeciesApi.prototype.pokemonSpeciesReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.pokemonSpeciesRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_167 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_167(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_168 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_168(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.pokemonSpeciesReadWithHttpInfo(rsp); }));
        }));
    };
    ObservablePokemonSpeciesApi.prototype.pokemonSpeciesRead = function (id, _options) {
        return this.pokemonSpeciesReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePokemonSpeciesApi;
}());
exports.ObservablePokemonSpeciesApi = ObservablePokemonSpeciesApi;
var RegionApi_1 = require("../apis/RegionApi");
var ObservableRegionApi = (function () {
    function ObservableRegionApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RegionApi_1.RegionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RegionApi_1.RegionApiResponseProcessor();
    }
    ObservableRegionApi.prototype.regionListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.regionList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_169 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_169(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_170 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_170(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.regionListWithHttpInfo(rsp); }));
        }));
    };
    ObservableRegionApi.prototype.regionList = function (limit, offset, _options) {
        return this.regionListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableRegionApi.prototype.regionReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.regionRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_171 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_171(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_172 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_172(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.regionReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableRegionApi.prototype.regionRead = function (id, _options) {
        return this.regionReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableRegionApi;
}());
exports.ObservableRegionApi = ObservableRegionApi;
var StatApi_1 = require("../apis/StatApi");
var ObservableStatApi = (function () {
    function ObservableStatApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatApi_1.StatApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatApi_1.StatApiResponseProcessor();
    }
    ObservableStatApi.prototype.statListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.statList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_173 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_173(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_174 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_174(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.statListWithHttpInfo(rsp); }));
        }));
    };
    ObservableStatApi.prototype.statList = function (limit, offset, _options) {
        return this.statListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableStatApi.prototype.statReadWithHttpInfo = function (idOrName, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.statRead(idOrName, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_175 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_175(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_176 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_176(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.statReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableStatApi.prototype.statRead = function (idOrName, _options) {
        return this.statReadWithHttpInfo(idOrName, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableStatApi;
}());
exports.ObservableStatApi = ObservableStatApi;
var SuperContestEffectApi_1 = require("../apis/SuperContestEffectApi");
var ObservableSuperContestEffectApi = (function () {
    function ObservableSuperContestEffectApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SuperContestEffectApi_1.SuperContestEffectApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SuperContestEffectApi_1.SuperContestEffectApiResponseProcessor();
    }
    ObservableSuperContestEffectApi.prototype.superContestEffectListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.superContestEffectList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_177 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_177(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_178 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_178(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.superContestEffectListWithHttpInfo(rsp); }));
        }));
    };
    ObservableSuperContestEffectApi.prototype.superContestEffectList = function (limit, offset, _options) {
        return this.superContestEffectListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableSuperContestEffectApi.prototype.superContestEffectReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.superContestEffectRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_179 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_179(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_180 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_180(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.superContestEffectReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableSuperContestEffectApi.prototype.superContestEffectRead = function (id, _options) {
        return this.superContestEffectReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableSuperContestEffectApi;
}());
exports.ObservableSuperContestEffectApi = ObservableSuperContestEffectApi;
var TypeApi_1 = require("../apis/TypeApi");
var ObservableTypeApi = (function () {
    function ObservableTypeApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TypeApi_1.TypeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TypeApi_1.TypeApiResponseProcessor();
    }
    ObservableTypeApi.prototype.typeListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.typeList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_181 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_181(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_182 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_182(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.typeListWithHttpInfo(rsp); }));
        }));
    };
    ObservableTypeApi.prototype.typeList = function (limit, offset, _options) {
        return this.typeListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTypeApi.prototype.typeReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.typeRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_183 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_183(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_184 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_184(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.typeReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableTypeApi.prototype.typeRead = function (id, _options) {
        return this.typeReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableTypeApi;
}());
exports.ObservableTypeApi = ObservableTypeApi;
var VersionApi_1 = require("../apis/VersionApi");
var ObservableVersionApi = (function () {
    function ObservableVersionApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VersionApi_1.VersionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VersionApi_1.VersionApiResponseProcessor();
    }
    ObservableVersionApi.prototype.versionListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.versionList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_185 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_185(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_186 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_186(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.versionListWithHttpInfo(rsp); }));
        }));
    };
    ObservableVersionApi.prototype.versionList = function (limit, offset, _options) {
        return this.versionListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableVersionApi.prototype.versionReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.versionRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_187 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_187(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_188 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_188(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.versionReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableVersionApi.prototype.versionRead = function (id, _options) {
        return this.versionReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableVersionApi;
}());
exports.ObservableVersionApi = ObservableVersionApi;
var VersionGroupApi_1 = require("../apis/VersionGroupApi");
var ObservableVersionGroupApi = (function () {
    function ObservableVersionGroupApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VersionGroupApi_1.VersionGroupApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VersionGroupApi_1.VersionGroupApiResponseProcessor();
    }
    ObservableVersionGroupApi.prototype.versionGroupListWithHttpInfo = function (limit, offset, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.versionGroupList(limit, offset, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_189 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_189(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_190 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_190(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.versionGroupListWithHttpInfo(rsp); }));
        }));
    };
    ObservableVersionGroupApi.prototype.versionGroupList = function (limit, offset, _options) {
        return this.versionGroupListWithHttpInfo(limit, offset, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableVersionGroupApi.prototype.versionGroupReadWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.versionGroupRead(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_191 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_191(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_192 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_192(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.versionGroupReadWithHttpInfo(rsp); }));
        }));
    };
    ObservableVersionGroupApi.prototype.versionGroupRead = function (id, _options) {
        return this.versionGroupReadWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableVersionGroupApi;
}());
exports.ObservableVersionGroupApi = ObservableVersionGroupApi;
//# sourceMappingURL=ObservableAPI.js.map