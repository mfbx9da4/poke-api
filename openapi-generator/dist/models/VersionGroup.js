"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionGroup = void 0;
var VersionGroup = (function () {
    function VersionGroup() {
    }
    VersionGroup.getAttributeTypeMap = function () {
        return VersionGroup.attributeTypeMap;
    };
    VersionGroup.discriminator = undefined;
    VersionGroup.attributeTypeMap = [
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
            "name": "generation",
            "baseName": "generation",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "moveLearnMethods",
            "baseName": "move_learn_methods",
            "type": "Array<NamedAPIResource>",
            "format": ""
        },
        {
            "name": "pokedexes",
            "baseName": "pokedexes",
            "type": "Array<NamedAPIResource>",
            "format": ""
        },
        {
            "name": "regions",
            "baseName": "regions",
            "type": "Array<NamedAPIResource>",
            "format": ""
        },
        {
            "name": "versions",
            "baseName": "versions",
            "type": "Array<NamedAPIResource>",
            "format": ""
        }
    ];
    return VersionGroup;
}());
exports.VersionGroup = VersionGroup;
//# sourceMappingURL=VersionGroup.js.map