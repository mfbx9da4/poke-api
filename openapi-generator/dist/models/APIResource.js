"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResource = void 0;
var APIResource = (function () {
    function APIResource() {
    }
    APIResource.getAttributeTypeMap = function () {
        return APIResource.attributeTypeMap;
    };
    APIResource.discriminator = undefined;
    APIResource.attributeTypeMap = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        }
    ];
    return APIResource;
}());
exports.APIResource = APIResource;
//# sourceMappingURL=APIResource.js.map