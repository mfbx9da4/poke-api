"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestType = void 0;
var ContestType = (function () {
    function ContestType() {
    }
    ContestType.getAttributeTypeMap = function () {
        return ContestType.attributeTypeMap;
    };
    ContestType.discriminator = undefined;
    ContestType.attributeTypeMap = [
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
            "name": "berryFlavor",
            "baseName": "berry_flavor",
            "type": "BerryFlavor",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<ContestName>",
            "format": ""
        }
    ];
    return ContestType;
}());
exports.ContestType = ContestType;
//# sourceMappingURL=ContestType.js.map