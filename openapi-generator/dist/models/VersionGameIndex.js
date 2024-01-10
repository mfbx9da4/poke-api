"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionGameIndex = void 0;
var VersionGameIndex = (function () {
    function VersionGameIndex() {
    }
    VersionGameIndex.getAttributeTypeMap = function () {
        return VersionGameIndex.attributeTypeMap;
    };
    VersionGameIndex.discriminator = undefined;
    VersionGameIndex.attributeTypeMap = [
        {
            "name": "gameIndex",
            "baseName": "game_index",
            "type": "number",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return VersionGameIndex;
}());
exports.VersionGameIndex = VersionGameIndex;
//# sourceMappingURL=VersionGameIndex.js.map