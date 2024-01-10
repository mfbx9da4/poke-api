"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = void 0;
var Language = (function () {
    function Language() {
    }
    Language.getAttributeTypeMap = function () {
        return Language.attributeTypeMap;
    };
    Language.discriminator = undefined;
    Language.attributeTypeMap = [
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
            "name": "official",
            "baseName": "official",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "iso639",
            "baseName": "iso639",
            "type": "string",
            "format": ""
        },
        {
            "name": "iso3166",
            "baseName": "iso3166",
            "type": "string",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<Name>",
            "format": ""
        }
    ];
    return Language;
}());
exports.Language = Language;
//# sourceMappingURL=Language.js.map