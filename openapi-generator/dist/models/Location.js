"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
var Location = (function () {
    function Location() {
    }
    Location.getAttributeTypeMap = function () {
        return Location.attributeTypeMap;
    };
    Location.discriminator = undefined;
    Location.attributeTypeMap = [
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
            "name": "region",
            "baseName": "region",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        },
        {
            "name": "gameIndices",
            "baseName": "game_indices",
            "type": "Array<GenerationGameIndex>",
            "format": ""
        },
        {
            "name": "areas",
            "baseName": "areas",
            "type": "Array<NamedAPIResource>",
            "format": ""
        }
    ];
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=Location.js.map