"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = (function () {
    function Pokemon() {
    }
    Pokemon.getAttributeTypeMap = function () {
        return Pokemon.attributeTypeMap;
    };
    Pokemon.discriminator = undefined;
    Pokemon.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "baseExperience",
            "baseName": "base_experience",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isDefault",
            "baseName": "is_default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "abilities",
            "baseName": "abilities",
            "type": "Array<PokemonAbility>",
            "format": ""
        },
        {
            "name": "forms",
            "baseName": "forms",
            "type": "Array<PokemonForm>",
            "format": ""
        },
        {
            "name": "gameIndices",
            "baseName": "game_indices",
            "type": "Array<VersionGameIndex>",
            "format": ""
        },
        {
            "name": "heldItems",
            "baseName": "held_items",
            "type": "Array<PokemonHeldItem>",
            "format": ""
        },
        {
            "name": "locationAreaEncounters",
            "baseName": "location_area_encounters",
            "type": "string",
            "format": ""
        },
        {
            "name": "moves",
            "baseName": "moves",
            "type": "Array<PokemonMove>",
            "format": ""
        },
        {
            "name": "sprites",
            "baseName": "sprites",
            "type": "PokemonSprites",
            "format": ""
        },
        {
            "name": "species",
            "baseName": "species",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "stats",
            "baseName": "stats",
            "type": "Array<PokemonStat>",
            "format": ""
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "Array<PokemonType>",
            "format": ""
        }
    ];
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=Pokemon.js.map