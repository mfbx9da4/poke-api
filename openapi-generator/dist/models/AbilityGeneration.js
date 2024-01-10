"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityGeneration = void 0;
var AbilityGeneration = (function () {
    function AbilityGeneration() {
    }
    AbilityGeneration.getAttributeTypeMap = function () {
        return AbilityGeneration.attributeTypeMap;
    };
    AbilityGeneration.discriminator = undefined;
    AbilityGeneration.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    ];
    return AbilityGeneration;
}());
exports.AbilityGeneration = AbilityGeneration;
//# sourceMappingURL=AbilityGeneration.js.map