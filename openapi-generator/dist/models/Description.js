"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Description = void 0;
var Description = (function () {
    function Description() {
    }
    Description.getAttributeTypeMap = function () {
        return Description.attributeTypeMap;
    };
    Description.discriminator = undefined;
    Description.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
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
    return Description;
}());
exports.Description = Description;
//# sourceMappingURL=Description.js.map