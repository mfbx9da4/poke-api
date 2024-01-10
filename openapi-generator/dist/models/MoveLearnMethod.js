"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveLearnMethod = void 0;
var MoveLearnMethod = (function () {
    function MoveLearnMethod() {
    }
    MoveLearnMethod.getAttributeTypeMap = function () {
        return MoveLearnMethod.attributeTypeMap;
    };
    MoveLearnMethod.discriminator = undefined;
    MoveLearnMethod.attributeTypeMap = [
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
            "name": "descriptions",
            "baseName": "descriptions",
            "type": "Array<Description>",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        }
    ];
    return MoveLearnMethod;
}());
exports.MoveLearnMethod = MoveLearnMethod;
//# sourceMappingURL=MoveLearnMethod.js.map