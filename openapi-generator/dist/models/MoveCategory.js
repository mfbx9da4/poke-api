"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveCategory = void 0;
var MoveCategory = (function () {
    function MoveCategory() {
    }
    MoveCategory.getAttributeTypeMap = function () {
        return MoveCategory.attributeTypeMap;
    };
    MoveCategory.discriminator = undefined;
    MoveCategory.attributeTypeMap = [
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
        }
    ];
    return MoveCategory;
}());
exports.MoveCategory = MoveCategory;
//# sourceMappingURL=MoveCategory.js.map