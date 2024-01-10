"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeGeneration = void 0;
var TypeGeneration = (function () {
    function TypeGeneration() {
    }
    TypeGeneration.getAttributeTypeMap = function () {
        return TypeGeneration.attributeTypeMap;
    };
    TypeGeneration.discriminator = undefined;
    TypeGeneration.attributeTypeMap = [
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
    return TypeGeneration;
}());
exports.TypeGeneration = TypeGeneration;
//# sourceMappingURL=TypeGeneration.js.map