"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genus = void 0;
var Genus = (function () {
    function Genus() {
    }
    Genus.getAttributeTypeMap = function () {
        return Genus.attributeTypeMap;
    };
    Genus.discriminator = undefined;
    Genus.attributeTypeMap = [
        {
            "name": "genus",
            "baseName": "genus",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "Language",
            "format": ""
        }
    ];
    return Genus;
}());
exports.Genus = Genus;
//# sourceMappingURL=Genus.js.map