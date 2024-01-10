"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineVersionDetail = void 0;
var MachineVersionDetail = (function () {
    function MachineVersionDetail() {
    }
    MachineVersionDetail.getAttributeTypeMap = function () {
        return MachineVersionDetail.attributeTypeMap;
    };
    MachineVersionDetail.discriminator = undefined;
    MachineVersionDetail.attributeTypeMap = [
        {
            "name": "machine",
            "baseName": "machine",
            "type": "APIResource",
            "format": ""
        },
        {
            "name": "versionGroup",
            "baseName": "version_group",
            "type": "APIResource",
            "format": ""
        }
    ];
    return MachineVersionDetail;
}());
exports.MachineVersionDetail = MachineVersionDetail;
//# sourceMappingURL=MachineVersionDetail.js.map