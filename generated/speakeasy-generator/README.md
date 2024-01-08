# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { PokeSDK } from "poke-api";

async function run() {
    const sdk = new PokeSDK();

    const limit = 578676;
    const offset = 855699;

    const res = await sdk.ability.abilityList(limit, offset);

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [ability](docs/sdks/ability/README.md)

* [abilityList](docs/sdks/ability/README.md#abilitylist)
* [abilityRead](docs/sdks/ability/README.md#abilityread)

### [berryFirmness](docs/sdks/berryfirmness/README.md)

* [berryFirmnessList](docs/sdks/berryfirmness/README.md#berryfirmnesslist)
* [berryFirmnessRead](docs/sdks/berryfirmness/README.md#berryfirmnessread)

### [berryFlavor](docs/sdks/berryflavor/README.md)

* [berryFlavorList](docs/sdks/berryflavor/README.md#berryflavorlist)
* [berryFlavorRead](docs/sdks/berryflavor/README.md#berryflavorread)

### [berry](docs/sdks/berry/README.md)

* [berryList](docs/sdks/berry/README.md#berrylist)
* [berryRead](docs/sdks/berry/README.md#berryread)

### [characteristic](docs/sdks/characteristic/README.md)

* [characteristicList](docs/sdks/characteristic/README.md#characteristiclist)
* [characteristicRead](docs/sdks/characteristic/README.md#characteristicread)

### [contestEffect](docs/sdks/contesteffect/README.md)

* [contestEffectList](docs/sdks/contesteffect/README.md#contesteffectlist)
* [contestEffectRead](docs/sdks/contesteffect/README.md#contesteffectread)

### [contestType](docs/sdks/contesttype/README.md)

* [contestTypeList](docs/sdks/contesttype/README.md#contesttypelist)
* [contestTypeRead](docs/sdks/contesttype/README.md#contesttyperead)

### [eggGroup](docs/sdks/egggroup/README.md)

* [eggGroupList](docs/sdks/egggroup/README.md#egggrouplist)
* [eggGroupRead](docs/sdks/egggroup/README.md#egggroupread)

### [encounterConditionValue](docs/sdks/encounterconditionvalue/README.md)

* [encounterConditionValueList](docs/sdks/encounterconditionvalue/README.md#encounterconditionvaluelist)
* [encounterConditionValueRead](docs/sdks/encounterconditionvalue/README.md#encounterconditionvalueread)

### [encounterCondition](docs/sdks/encountercondition/README.md)

* [encounterConditionList](docs/sdks/encountercondition/README.md#encounterconditionlist)
* [encounterConditionRead](docs/sdks/encountercondition/README.md#encounterconditionread)

### [encounterMethod](docs/sdks/encountermethod/README.md)

* [encounterMethodList](docs/sdks/encountermethod/README.md#encountermethodlist)
* [encounterMethodRead](docs/sdks/encountermethod/README.md#encountermethodread)

### [evolutionChain](docs/sdks/evolutionchain/README.md)

* [evolutionChainList](docs/sdks/evolutionchain/README.md#evolutionchainlist)
* [evolutionChainRead](docs/sdks/evolutionchain/README.md#evolutionchainread)

### [evolutionTrigger](docs/sdks/evolutiontrigger/README.md)

* [evolutionTriggerList](docs/sdks/evolutiontrigger/README.md#evolutiontriggerlist)
* [evolutionTriggerRead](docs/sdks/evolutiontrigger/README.md#evolutiontriggerread)

### [gender](docs/sdks/gender/README.md)

* [genderList](docs/sdks/gender/README.md#genderlist)
* [genderRead](docs/sdks/gender/README.md#genderread)

### [generation](docs/sdks/generation/README.md)

* [generationList](docs/sdks/generation/README.md#generationlist)
* [generationRead](docs/sdks/generation/README.md#generationread)

### [growthRate](docs/sdks/growthrate/README.md)

* [growthRateList](docs/sdks/growthrate/README.md#growthratelist)
* [growthRateRead](docs/sdks/growthrate/README.md#growthrateread)

### [itemAttribute](docs/sdks/itemattribute/README.md)

* [itemAttributeList](docs/sdks/itemattribute/README.md#itemattributelist)
* [itemAttributeRead](docs/sdks/itemattribute/README.md#itemattributeread)

### [itemCategory](docs/sdks/itemcategory/README.md)

* [itemCategoryList](docs/sdks/itemcategory/README.md#itemcategorylist)
* [itemCategoryRead](docs/sdks/itemcategory/README.md#itemcategoryread)

### [itemFlingEffect](docs/sdks/itemflingeffect/README.md)

* [itemFlingEffectList](docs/sdks/itemflingeffect/README.md#itemflingeffectlist)
* [itemFlingEffectRead](docs/sdks/itemflingeffect/README.md#itemflingeffectread)

### [itemPocket](docs/sdks/itempocket/README.md)

* [itemPocketList](docs/sdks/itempocket/README.md#itempocketlist)
* [itemPocketRead](docs/sdks/itempocket/README.md#itempocketread)

### [item](docs/sdks/item/README.md)

* [itemList](docs/sdks/item/README.md#itemlist)
* [itemRead](docs/sdks/item/README.md#itemread)

### [language](docs/sdks/language/README.md)

* [languageList](docs/sdks/language/README.md#languagelist)
* [languageRead](docs/sdks/language/README.md#languageread)

### [locationArea](docs/sdks/locationarea/README.md)

* [locationAreaList](docs/sdks/locationarea/README.md#locationarealist)
* [locationAreaRead](docs/sdks/locationarea/README.md#locationarearead)

### [location](docs/sdks/location/README.md)

* [locationList](docs/sdks/location/README.md#locationlist)
* [locationRead](docs/sdks/location/README.md#locationread)

### [machine](docs/sdks/machine/README.md)

* [machineList](docs/sdks/machine/README.md#machinelist)
* [machineRead](docs/sdks/machine/README.md#machineread)

### [moveAilment](docs/sdks/moveailment/README.md)

* [moveAilmentList](docs/sdks/moveailment/README.md#moveailmentlist)
* [moveAilmentRead](docs/sdks/moveailment/README.md#moveailmentread)

### [moveBattleStyle](docs/sdks/movebattlestyle/README.md)

* [moveBattleStyleList](docs/sdks/movebattlestyle/README.md#movebattlestylelist)
* [moveBattleStyleRead](docs/sdks/movebattlestyle/README.md#movebattlestyleread)

### [moveCategory](docs/sdks/movecategory/README.md)

* [moveCategoryList](docs/sdks/movecategory/README.md#movecategorylist)
* [moveCategoryRead](docs/sdks/movecategory/README.md#movecategoryread)

### [moveDamageClass](docs/sdks/movedamageclass/README.md)

* [moveDamageClassList](docs/sdks/movedamageclass/README.md#movedamageclasslist)
* [moveDamageClassRead](docs/sdks/movedamageclass/README.md#movedamageclassread)

### [moveLearnMethod](docs/sdks/movelearnmethod/README.md)

* [moveLearnMethodList](docs/sdks/movelearnmethod/README.md#movelearnmethodlist)
* [moveLearnMethodRead](docs/sdks/movelearnmethod/README.md#movelearnmethodread)

### [moveTarget](docs/sdks/movetarget/README.md)

* [moveTargetList](docs/sdks/movetarget/README.md#movetargetlist)
* [moveTargetRead](docs/sdks/movetarget/README.md#movetargetread)

### [move](docs/sdks/move/README.md)

* [moveList](docs/sdks/move/README.md#movelist)
* [moveRead](docs/sdks/move/README.md#moveread)

### [nature](docs/sdks/nature/README.md)

* [natureList](docs/sdks/nature/README.md#naturelist)
* [natureRead](docs/sdks/nature/README.md#natureread)

### [palParkArea](docs/sdks/palparkarea/README.md)

* [palParkAreaList](docs/sdks/palparkarea/README.md#palparkarealist)
* [palParkAreaRead](docs/sdks/palparkarea/README.md#palparkarearead)

### [pokeathlonStat](docs/sdks/pokeathlonstat/README.md)

* [pokeathlonStatList](docs/sdks/pokeathlonstat/README.md#pokeathlonstatlist)
* [pokeathlonStatRead](docs/sdks/pokeathlonstat/README.md#pokeathlonstatread)

### [pokedex](docs/sdks/pokedex/README.md)

* [pokedexList](docs/sdks/pokedex/README.md#pokedexlist)
* [pokedexRead](docs/sdks/pokedex/README.md#pokedexread)

### [pokemonColor](docs/sdks/pokemoncolor/README.md)

* [pokemonColorList](docs/sdks/pokemoncolor/README.md#pokemoncolorlist)
* [pokemonColorRead](docs/sdks/pokemoncolor/README.md#pokemoncolorread)

### [pokemonForm](docs/sdks/pokemonform/README.md)

* [pokemonFormList](docs/sdks/pokemonform/README.md#pokemonformlist)
* [pokemonFormRead](docs/sdks/pokemonform/README.md#pokemonformread)

### [pokemonHabitat](docs/sdks/pokemonhabitat/README.md)

* [pokemonHabitatList](docs/sdks/pokemonhabitat/README.md#pokemonhabitatlist)
* [pokemonHabitatRead](docs/sdks/pokemonhabitat/README.md#pokemonhabitatread)

### [pokemonShape](docs/sdks/pokemonshape/README.md)

* [pokemonShapeList](docs/sdks/pokemonshape/README.md#pokemonshapelist)
* [pokemonShapeRead](docs/sdks/pokemonshape/README.md#pokemonshaperead)

### [pokemonSpecies](docs/sdks/pokemonspecies/README.md)

* [pokemonSpeciesList](docs/sdks/pokemonspecies/README.md#pokemonspecieslist)
* [pokemonSpeciesRead](docs/sdks/pokemonspecies/README.md#pokemonspeciesread)

### [pokemon](docs/sdks/pokemon/README.md)

* [pokemonList](docs/sdks/pokemon/README.md#pokemonlist)
* [pokemonRead](docs/sdks/pokemon/README.md#pokemonread)

### [region](docs/sdks/region/README.md)

* [regionList](docs/sdks/region/README.md#regionlist)
* [regionRead](docs/sdks/region/README.md#regionread)

### [stat](docs/sdks/stat/README.md)

* [statList](docs/sdks/stat/README.md#statlist)
* [statRead](docs/sdks/stat/README.md#statread)

### [superContestEffect](docs/sdks/supercontesteffect/README.md)

* [superContestEffectList](docs/sdks/supercontesteffect/README.md#supercontesteffectlist)
* [superContestEffectRead](docs/sdks/supercontesteffect/README.md#supercontesteffectread)

### [type](docs/sdks/type/README.md)

* [typeList](docs/sdks/type/README.md#typelist)
* [typeRead](docs/sdks/type/README.md#typeread)

### [versionGroup](docs/sdks/versiongroup/README.md)

* [versionGroupList](docs/sdks/versiongroup/README.md#versiongrouplist)
* [versionGroupRead](docs/sdks/versiongroup/README.md#versiongroupread)

### [version](docs/sdks/version/README.md)

* [versionList](docs/sdks/version/README.md#versionlist)
* [versionRead](docs/sdks/version/README.md#versionread)
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { PokeSDK } from "poke-api";

async function run() {
    const sdk = new PokeSDK();

    const limit = 578676;
    const offset = 855699;

    const res = await sdk.ability.abilityList(limit, offset).catch((err) => {
        throw err;
    });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://pokeapi.co/` | None |




### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { PokeSDK } from "poke-api";
import { HTTPClient } from "poke-api/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new PokeSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
