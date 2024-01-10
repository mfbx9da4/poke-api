"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveAilment = void 0;
var MoveAilment = (function () {
    function MoveAilment() {
    }
    MoveAilment.getAttributeTypeMap = function () {
        return MoveAilment.attributeTypeMap;
    };
    MoveAilment.discriminator = undefined;
    MoveAilment.attributeTypeMap = [
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
            "name": "moves",
            "baseName": "moves",
            "type": "Array<Move>",
            "format": ""
        }
    ];
    return MoveAilment;
}());
exports.MoveAilment = MoveAilment;
//# sourceMappingURL=MoveAilment.js.map