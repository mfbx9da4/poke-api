"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSpecies = void 0;
var PokemonSpecies = (function () {
    function PokemonSpecies() {
    }
    PokemonSpecies.getAttributeTypeMap = function () {
        return PokemonSpecies.attributeTypeMap;
    };
    PokemonSpecies.discriminator = undefined;
    PokemonSpecies.attributeTypeMap = [
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
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "genderRate",
            "baseName": "gender_rate",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "captureRate",
            "baseName": "capture_rate",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "baseHappiness",
            "baseName": "base_happiness",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isBaby",
            "baseName": "is_baby",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hatchCounter",
            "baseName": "hatch_counter",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "hasGenderDifferences",
            "baseName": "has_gender_differences",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "formsSwitchable",
            "baseName": "forms_switchable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "growthRate",
            "baseName": "growth_rate",
            "type": "GrowthRate",
            "format": ""
        },
        {
            "name": "pokedexNumbers",
            "baseName": "pokedex_numbers",
            "type": "Array<PokemonSpeciesDexEntry>",
            "format": ""
        },
        {
            "name": "eggGroups",
            "baseName": "egg_groups",
            "type": "Array<EggGroup>",
            "format": ""
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "PokemonColor",
            "format": ""
        },
        {
            "name": "shape",
            "baseName": "shape",
            "type": "PokemonShape",
            "format": ""
        },
        {
            "name": "evolvesFromSpecies",
            "baseName": "evolves_from_species",
            "type": "PokemonSpecies",
            "format": ""
        },
        {
            "name": "evolutionChain",
            "baseName": "evolution_chain",
            "type": "EvolutionChain",
            "format": ""
        },
        {
            "name": "habitat",
            "baseName": "habitat",
            "type": "PokemonHabitat",
            "format": ""
        },
        {
            "name": "generation",
            "baseName": "generation",
            "type": "Generation",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        },
        {
            "name": "palParkEncounters",
            "baseName": "pal_park_encounters",
            "type": "Array<PalParkEncounterArea>",
            "format": ""
        },
        {
            "name": "flavorTextEntries",
            "baseName": "flavor_text_entries",
            "type": "Array<FlavorText>",
            "format": ""
        },
        {
            "name": "formDescriptions",
            "baseName": "form_descriptions",
            "type": "Array<Description>",
            "format": ""
        },
        {
            "name": "genera",
            "baseName": "genera",
            "type": "Array<Genus>",
            "format": ""
        },
        {
            "name": "varieties",
            "baseName": "varieties",
            "type": "Array<PokemonSpeciesVariety>",
            "format": ""
        }
    ];
    return PokemonSpecies;
}());
exports.PokemonSpecies = PokemonSpecies;
//# sourceMappingURL=PokemonSpecies.js.map