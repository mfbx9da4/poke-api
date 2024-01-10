"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveTarget = void 0;
var MoveTarget = (function () {
    function MoveTarget() {
    }
    MoveTarget.getAttributeTypeMap = function () {
        return MoveTarget.attributeTypeMap;
    };
    MoveTarget.discriminator = undefined;
    MoveTarget.attributeTypeMap = [
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
        }
    ];
    return MoveTarget;
}());
exports.MoveTarget = MoveTarget;
//# sourceMappingURL=MoveTarget.js.map