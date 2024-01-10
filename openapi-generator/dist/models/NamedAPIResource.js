"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedAPIResource = void 0;
var NamedAPIResource = (function () {
    function NamedAPIResource() {
    }
    NamedAPIResource.getAttributeTypeMap = function () {
        return NamedAPIResource.attributeTypeMap;
    };
    NamedAPIResource.discriminator = undefined;
    NamedAPIResource.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": "uri"
        }
    ];
    return NamedAPIResource;
}());
exports.NamedAPIResource = NamedAPIResource;
//# sourceMappingURL=NamedAPIResource.js.map