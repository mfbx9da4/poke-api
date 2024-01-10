"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generation = void 0;
var Generation = (function () {
    function Generation() {
    }
    Generation.getAttributeTypeMap = function () {
        return Generation.attributeTypeMap;
    };
    Generation.discriminator = undefined;
    Generation.attributeTypeMap = [
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
            "name": "abilities",
            "baseName": "abilities",
            "type": "Array<GenerationAbilitiesInner>",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<GenerationNamesInner>",
            "format": ""
        }
    ];
    return Generation;
}());
exports.Generation = Generation;
//# sourceMappingURL=Generation.js.map