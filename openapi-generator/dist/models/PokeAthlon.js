"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeAthlon = void 0;
var PokeAthlon = (function () {
    function PokeAthlon() {
    }
    PokeAthlon.getAttributeTypeMap = function () {
        return PokeAthlon.attributeTypeMap;
    };
    PokeAthlon.discriminator = undefined;
    PokeAthlon.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
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
            "type": "Array<PokeathlonStatName>",
            "format": ""
        }
    ];
    return PokeAthlon;
}());
exports.PokeAthlon = PokeAthlon;
//# sourceMappingURL=PokeAthlon.js.map