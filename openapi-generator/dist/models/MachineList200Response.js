"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineList200Response = void 0;
var MachineList200Response = (function () {
    function MachineList200Response() {
    }
    MachineList200Response.getAttributeTypeMap = function () {
        return MachineList200Response.attributeTypeMap;
    };
    MachineList200Response.discriminator = undefined;
    MachineList200Response.attributeTypeMap = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Machine>",
            "format": ""
        }
    ];
    return MachineList200Response;
}());
exports.MachineList200Response = MachineList200Response;
//# sourceMappingURL=MachineList200Response.js.map