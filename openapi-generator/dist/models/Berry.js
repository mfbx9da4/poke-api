"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Berry = void 0;
var Berry = (function () {
    function Berry() {
    }
    Berry.getAttributeTypeMap = function () {
        return Berry.attributeTypeMap;
    };
    Berry.discriminator = undefined;
    Berry.attributeTypeMap = [
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
            "name": "growthTime",
            "baseName": "growth_time",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxHarvest",
            "baseName": "max_harvest",
            "type": "number",
            "format": ""
        },
        {
            "name": "naturalGiftPower",
            "baseName": "natural_gift_power",
            "type": "number",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": ""
        },
        {
            "name": "smoothness",
            "baseName": "smoothness",
            "type": "number",
            "format": ""
        },
        {
            "name": "soilDryness",
            "baseName": "soil_dryness",
            "type": "number",
            "format": ""
        },
        {
            "name": "firmness",
            "baseName": "firmness",
            "type": "BerryFirmness",
            "format": ""
        },
        {
            "name": "flavors",
            "baseName": "flavors",
            "type": "Array<BerryFlavorMap>",
            "format": ""
        }
    ];
    return Berry;
}());
exports.Berry = Berry;
//# sourceMappingURL=Berry.js.map