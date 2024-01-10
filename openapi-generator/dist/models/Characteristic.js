"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Characteristic = void 0;
var Characteristic = (function () {
    function Characteristic() {
    }
    Characteristic.getAttributeTypeMap = function () {
        return Characteristic.attributeTypeMap;
    };
    Characteristic.discriminator = undefined;
    Characteristic.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "geneModulo",
            "baseName": "gene_modulo",
            "type": "number",
            "format": ""
        },
        {
            "name": "possibleValues",
            "baseName": "possible_values",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return Characteristic;
}());
exports.Characteristic = Characteristic;
//# sourceMappingURL=Characteristic.js.map