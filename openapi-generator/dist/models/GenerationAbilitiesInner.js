"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationAbilitiesInner = void 0;
var GenerationAbilitiesInner = (function () {
    function GenerationAbilitiesInner() {
    }
    GenerationAbilitiesInner.getAttributeTypeMap = function () {
        return GenerationAbilitiesInner.attributeTypeMap;
    };
    GenerationAbilitiesInner.discriminator = undefined;
    GenerationAbilitiesInner.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isHidden",
            "baseName": "is_hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "slot",
            "baseName": "slot",
            "type": "number",
            "format": ""
        }
    ];
    return GenerationAbilitiesInner;
}());
exports.GenerationAbilitiesInner = GenerationAbilitiesInner;
//# sourceMappingURL=GenerationAbilitiesInner.js.map