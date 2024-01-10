"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ability = void 0;
var Ability = (function () {
    function Ability() {
    }
    Ability.getAttributeTypeMap = function () {
        return Ability.attributeTypeMap;
    };
    Ability.discriminator = undefined;
    Ability.attributeTypeMap = [
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
            "name": "isMainSeries",
            "baseName": "is_main_series",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "generation",
            "baseName": "generation",
            "type": "AbilityGeneration",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<AbilityNamesInner>",
            "format": ""
        }
    ];
    return Ability;
}());
exports.Ability = Ability;
//# sourceMappingURL=Ability.js.map