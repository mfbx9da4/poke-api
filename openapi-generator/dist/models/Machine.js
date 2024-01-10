"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine = void 0;
var Machine = (function () {
    function Machine() {
    }
    Machine.getAttributeTypeMap = function () {
        return Machine.attributeTypeMap;
    };
    Machine.discriminator = undefined;
    Machine.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "move",
            "baseName": "move",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "versionGroup",
            "baseName": "version_group",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return Machine;
}());
exports.Machine = Machine;
//# sourceMappingURL=Machine.js.map