"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrowthRate = void 0;
var GrowthRate = (function () {
    function GrowthRate() {
    }
    GrowthRate.getAttributeTypeMap = function () {
        return GrowthRate.attributeTypeMap;
    };
    GrowthRate.discriminator = undefined;
    GrowthRate.attributeTypeMap = [
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
            "name": "formula",
            "baseName": "formula",
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
    return GrowthRate;
}());
exports.GrowthRate = GrowthRate;
//# sourceMappingURL=GrowthRate.js.map