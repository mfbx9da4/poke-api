"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeGameIndicesInner = void 0;
var TypeGameIndicesInner = (function () {
    function TypeGameIndicesInner() {
    }
    TypeGameIndicesInner.getAttributeTypeMap = function () {
        return TypeGameIndicesInner.attributeTypeMap;
    };
    TypeGameIndicesInner.discriminator = undefined;
    TypeGameIndicesInner.attributeTypeMap = [
        {
            "name": "gameIndex",
            "baseName": "game_index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "generation",
            "baseName": "generation",
            "type": "TypeGameIndicesInnerGeneration",
            "format": ""
        }
    ];
    return TypeGameIndicesInner;
}());
exports.TypeGameIndicesInner = TypeGameIndicesInner;
//# sourceMappingURL=TypeGameIndicesInner.js.map