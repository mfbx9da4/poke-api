"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionTrigger = void 0;
var EvolutionTrigger = (function () {
    function EvolutionTrigger() {
    }
    EvolutionTrigger.getAttributeTypeMap = function () {
        return EvolutionTrigger.attributeTypeMap;
    };
    EvolutionTrigger.discriminator = undefined;
    EvolutionTrigger.attributeTypeMap = [
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
    return EvolutionTrigger;
}());
exports.EvolutionTrigger = EvolutionTrigger;
//# sourceMappingURL=EvolutionTrigger.js.map