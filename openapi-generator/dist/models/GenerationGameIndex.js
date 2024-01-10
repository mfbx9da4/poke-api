"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationGameIndex = void 0;
var GenerationGameIndex = (function () {
    function GenerationGameIndex() {
    }
    GenerationGameIndex.getAttributeTypeMap = function () {
        return GenerationGameIndex.attributeTypeMap;
    };
    GenerationGameIndex.discriminator = undefined;
    GenerationGameIndex.attributeTypeMap = [
        {
            "name": "gameIndex",
            "baseName": "game_index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "generation",
            "baseName": "generation",
            "type": "Generation",
            "format": ""
        }
    ];
    return GenerationGameIndex;
}());
exports.GenerationGameIndex = GenerationGameIndex;
//# sourceMappingURL=GenerationGameIndex.js.map