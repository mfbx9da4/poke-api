"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityNamesInner = void 0;
var AbilityNamesInner = (function () {
    function AbilityNamesInner() {
    }
    AbilityNamesInner.getAttributeTypeMap = function () {
        return AbilityNamesInner.attributeTypeMap;
    };
    AbilityNamesInner.discriminator = undefined;
    AbilityNamesInner.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "AbilityNamesInnerLanguage",
            "format": ""
        }
    ];
    return AbilityNamesInner;
}());
exports.AbilityNamesInner = AbilityNamesInner;
//# sourceMappingURL=AbilityNamesInner.js.map