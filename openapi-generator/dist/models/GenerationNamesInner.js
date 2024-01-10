"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationNamesInner = void 0;
var GenerationNamesInner = (function () {
    function GenerationNamesInner() {
    }
    GenerationNamesInner.getAttributeTypeMap = function () {
        return GenerationNamesInner.attributeTypeMap;
    };
    GenerationNamesInner.discriminator = undefined;
    GenerationNamesInner.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "Language",
            "format": ""
        }
    ];
    return GenerationNamesInner;
}());
exports.GenerationNamesInner = GenerationNamesInner;
//# sourceMappingURL=GenerationNamesInner.js.map