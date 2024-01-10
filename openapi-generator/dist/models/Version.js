"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = void 0;
var Version = (function () {
    function Version() {
    }
    Version.getAttributeTypeMap = function () {
        return Version.attributeTypeMap;
    };
    Version.discriminator = undefined;
    Version.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        },
        {
            "name": "versionGroup",
            "baseName": "version_group",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return Version;
}());
exports.Version = Version;
//# sourceMappingURL=Version.js.map