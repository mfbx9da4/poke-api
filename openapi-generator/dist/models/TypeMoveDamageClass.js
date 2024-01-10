"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeMoveDamageClass = void 0;
var TypeMoveDamageClass = (function () {
    function TypeMoveDamageClass() {
    }
    TypeMoveDamageClass.getAttributeTypeMap = function () {
        return TypeMoveDamageClass.attributeTypeMap;
    };
    TypeMoveDamageClass.discriminator = undefined;
    TypeMoveDamageClass.attributeTypeMap = [
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
    return TypeMoveDamageClass;
}());
exports.TypeMoveDamageClass = TypeMoveDamageClass;
//# sourceMappingURL=TypeMoveDamageClass.js.map