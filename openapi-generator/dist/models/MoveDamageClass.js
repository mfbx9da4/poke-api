"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveDamageClass = void 0;
var MoveDamageClass = (function () {
    function MoveDamageClass() {
    }
    MoveDamageClass.getAttributeTypeMap = function () {
        return MoveDamageClass.attributeTypeMap;
    };
    MoveDamageClass.discriminator = undefined;
    MoveDamageClass.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
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
    return MoveDamageClass;
}());
exports.MoveDamageClass = MoveDamageClass;
//# sourceMappingURL=MoveDamageClass.js.map