"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
var Region = (function () {
    function Region() {
    }
    Region.getAttributeTypeMap = function () {
        return Region.attributeTypeMap;
    };
    Region.discriminator = undefined;
    Region.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "Array<NamedAPIResource>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        },
        {
            "name": "mainGeneration",
            "baseName": "main_generation",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "pokedexes",
            "baseName": "pokedexes",
            "type": "Array<NamedAPIResource>",
            "format": ""
        },
        {
            "name": "versionGroups",
            "baseName": "version_groups",
            "type": "Array<NamedAPIResource>",
            "format": ""
        }
    ];
    return Region;
}());
exports.Region = Region;
//# sourceMappingURL=Region.js.map