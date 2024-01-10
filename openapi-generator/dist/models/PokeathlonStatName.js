"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeathlonStatName = void 0;
var PokeathlonStatName = (function () {
    function PokeathlonStatName() {
    }
    PokeathlonStatName.getAttributeTypeMap = function () {
        return PokeathlonStatName.attributeTypeMap;
    };
    PokeathlonStatName.discriminator = undefined;
    PokeathlonStatName.attributeTypeMap = [
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
        }
    ];
    return PokeathlonStatName;
}());
exports.PokeathlonStatName = PokeathlonStatName;
//# sourceMappingURL=PokeathlonStatName.js.map